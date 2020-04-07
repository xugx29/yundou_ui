<template>
  <div class="reportAndAccountContainer cashFlowContainer">
    <div class="operationBar">
      <div class="leftBar">
        <button @click="toggleReportType(1)" :class="{'select': type == 1}">月报</button>
        <button @click="toggleReportType(2)" :class="{'select': type == 2}">季报</button>
        <el-date-picker
          v-if="type == 1"
          v-model="period"
          type="month"
          value-format="yyyyMM"
          format="yyyy年MM期"
          :editable=false
          :picker-options="pickerOptions"
          :clearable=false
          @change="changePeriod"
          placeholder="选择日期"
        ></el-date-picker>
        <el-dropdown v-if="!!quarterList && type == 2" @command="handleCommand" placement="bottom" trigger="click">
            <span class="el-dropdown-link">
              <div class="el-date-editor el-input el-input--prefix el-input--suffix el-date-editor--month" style="width: 150px !important;">
                <input type="text" :value="quarterValue" readonly="readonly" name="" placeholder="选择日期" class="el-input__inner">
                <span class="el-input__prefix">
                  <i class="el-input__icon el-icon-date"></i>
                </span>
               </div>
            </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item v-for="(item, index) in quarterList" :command="item" :key="index">{{item.quarterValue}}</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
    <div class="reportContent">
      <el-table
        :data="tableData"
        border
        v-if="tableData.length != 0"
        height="100%"
        style="width: 100%;font-size: 12px;font-weight:400;color:rgba(51,51,51,1);"
        :header-cell-style="getRowClass"
        class="table"
      >
        <el-table-column prop="accountCode" label="项目" header-align="center">
          <template slot-scope="scope">
              <span class="reportsItemName" :class="{'text-center': scope.row.style.indent == 'center', bold: scope.row.style.bold == 1}" :style="{'text-indent': scope.row.style.indent == 'center' ? 0 : (parseInt(scope.row.style.indent) * 18) + 'px'}">
                {{scope.row.itemName}}
              </span>
          </template>
        </el-table-column>
        <el-table-column prop="accountName" label="行次" width="66" header-align="center" align="center">
          <template slot-scope="scope">
            {{scope.row.lineNo == '0' ? '' : scope.row.lineNo}}
          </template>
        </el-table-column>
        <el-table-column
          prop="direction"
          :label="type == 1 ? '本期金额' : '本季金额'"
          width="260"
          header-align="center"
          align="right"
        >
          <template slot-scope="scope">
            {{scope.row.value[0] | currency}}
          </template>
        </el-table-column>
        <el-table-column
          prop="initial_balance"
          label="本年累计金额"
          width="260"
          header-align="center"
          align="right"
        >
          <template slot-scope="scope">
            {{scope.row.value[1] | currency}}
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'cashflow',
    data () {
      return {
          tableData: [],
          type: 1, // 1月报 2季报
          quarterValue: '',
          quarterList: null,
          period: '',
          pickerOptions: {
              disabledDate: (time) => {
                  let currentPeriod = this.currentPeriod.toString();
                  let bigMonthLastDay = this.getLastDayOfMonth(currentPeriod.substr(0, 4), currentPeriod.substr(4, 2))
                  let initPeriod = this.initPeriod.toString();
                  let bigTime = currentPeriod.substr(0, 4) + '-' + currentPeriod.substr(4, 2) + '-' + bigMonthLastDay + ' 11:59:59';
                  let smallestTime = initPeriod.substr(0, 4) + '-' + initPeriod.substr(4, 2) + '-01 00:00:01'
                  return time.getTime() < new Date(smallestTime).getTime() || time.getTime() > new Date(bigTime).getTime()
              }
          }
      }
    },
    filters: {
        currency (value, placeholder) {
            if (isNaN(value)) {
                return value;
            }
            value = parseFloat(value);
            placeholder = placeholder || '';
            if (value === 0 || isNaN(value)) {
                return placeholder;
            }
            value = value.toFixed(2);
            if (value === 0) {
                return placeholder;
            }
            let reg = /(\d{1,3})(?=(\d{3})+(?:$|\D))/g;
            return value.replace(reg, '$1,');
        }
    },
    created () {
        this.period = this.currentPeriod.toString()
        this.quarterList = this.createQuarterList(this.initPeriod, this.currentPeriod)
        this.tableData = JSON.parse(JSON.stringify(this.reportData))
    },
    watch: {
      reportData (v, ov) {
        this.tableData = JSON.parse(JSON.stringify(v))
      }
    },
    props: ['initPeriod', 'currentPeriod', 'reportData'],
    methods: {
        changePeriod (date) {
            this.$emit('updateReportData', {
                type: 'month',
                accountPeriod: date
            })
        },
        getLastDayOfMonth (year, month) { // 获取某年某月的最后一天
            let date = new Date(year, month - 1, '01');
            date.setDate(1);
            date.setMonth(date.getMonth() + 1);
            let cdate = new Date(date.getTime() - 1000 * 60 * 60 * 24);
            return cdate.getDate();
        },
        handleCommand (command) {
            this.quarterValue = command.quarterValue;
            this.$emit('updateReportData', {
                type: 'quarter',
                startPeriod: command.startPeriod,
                endPeriod: command.endPeriod
            })
        },
        toggleReportType (type) {
            this.type = type;
            if (type == 2) {
                this.startPeriod = this.quarterList[0].startPeriod;
                this.endPeriod = this.quarterList[0].endPeriod;
                this.quarterValue = this.quarterList[0].quarterValue;
                this.$emit('updateReportData', {
                    type: 'quarter',
                    startPeriod: this.startPeriod,
                    endPeriod: this.endPeriod
                })
            }
            if (type == 1) {
                this.$emit('updateReportData', {
                    type: 'month',
                    accountPeriod: this.period
                })
            }
        },
        getRowClass ({row, column, rowIndex, columnIndex}) {
            if (rowIndex == 0) {
                return 'background:#FAFAFA;border-right:none;font-size:14px;font-weight:500;color:rgba(0,0,0,0.85);height:54px;';
            } else {
                return '';
            }
        },
        createQuarterList (initPeriod, currentPeriod) {
            let quarterSelect = [];
            let startYear = initPeriod.toString().substr(0, 4);
            let startMonth = initPeriod.toString().substr(4, 2) - 0;
            let quarterStartData = [];
            let endYear = currentPeriod.toString().substr(0, 4);
            let endMonth = currentPeriod.toString().substr(4, 2) - 0;
            if (startMonth <= 3) {
                quarterStartData = [{
                    startPeriod: startYear + '01',
                    endPeriod: startYear + '03',
                    quarterValue: startYear + '年第一季度'
                },
                    {
                        startPeriod: startYear + '04',
                        endPeriod: startYear + '06',
                        quarterValue: startYear + '年第二季度'
                    },
                    {
                        startPeriod: startYear + '07',
                        endPeriod: startYear + '09',
                        quarterValue: startYear + '年第三季度'
                    },
                    {
                        startPeriod: startYear + '10',
                        endPeriod: startYear + '12',
                        quarterValue: startYear + '年第四季度'
                    }]
                quarterSelect = quarterStartData;
            } else if (startMonth <= 6) {
                quarterStartData = [{
                    startPeriod: startYear + '04',
                    endPeriod: startYear + '06',
                    quarterValue: startYear + '年第二季度'
                },
                    {
                        startPeriod: startYear + '07',
                        endPeriod: startYear + '09',
                        quarterValue: startYear + '年第三季度'
                    },
                    {
                        startPeriod: startYear + '10',
                        endPeriod: startYear + '12',
                        quarterValue: startYear + '年第四季度'
                    }]
                quarterSelect = quarterStartData;
            } else if (startMonth <= 9) {
                quarterStartData = [{
                    startPeriod: startYear + '07',
                    endPeriod: startYear + '09',
                    quarterValue: startYear + '年第三季度'
                },
                    {
                        startPeriod: startYear + '10',
                        endPeriod: startYear + '12',
                        quarterValue: startYear + '年第四季度'
                    }]
                quarterSelect = quarterStartData;
            } else {
                quarterStartData = [{
                    startPeriod: startYear + '10',
                    endPeriod: startYear + '12',
                    quarterValue: startYear + '年第四季度'
                }]
            }
            let quarterEndData = [];
            if (endMonth <= 3) {
                quarterEndData = [{
                    startPeriod: endYear + '01',
                    endPeriod: endYear + '03',
                    quarterValue: endYear + '年第一季度'
                }];
            } else if (endMonth <= 6) {
                quarterEndData = [{
                    startPeriod: endYear + '01',
                    endPeriod: endYear + '03',
                    quarterValue: endYear + '年第一季度'
                },
                    {
                        startPeriod: endYear + '04',
                        endPeriod: endYear + '06',
                        quarterValue: endYear + '年第二季度'
                    }];
            } else if (endMonth <= 9) {
                quarterEndData = [{
                    startPeriod: endYear + '01',
                    endPeriod: endYear + '03',
                    quarterValue: endYear + '年第一季度'
                },
                    {
                        startPeriod: endYear + '04',
                        endPeriod: endYear + '06',
                        quarterValue: endYear + '年第二季度'
                    },
                    {
                        startPeriod: endYear + '07',
                        endPeriod: endYear + '09',
                        quarterValue: endYear + '年第三季度'
                    }];
            } else {
                quarterEndData = [{
                    startPeriod: endYear + '01',
                    endPeriod: endYear + '03',
                    quarterValue: endYear + '年第一季度'
                },
                    {
                        startPeriod: endYear + '04',
                        endPeriod: endYear + '06',
                        quarterValue: endYear + '年第二季度'
                    },
                    {
                        startPeriod: endYear + '07',
                        endPeriod: endYear + '09',
                        quarterValue: endYear + '年第三季度'
                    },
                    {
                        startPeriod: endYear + '10',
                        endPeriod: endYear + '12',
                        quarterValue: endYear + '年第四季度'
                    }];
            }
            if (startYear != endYear) {
                quarterSelect = quarterStartData;
                for (let year = (startYear - 0 + 1); year < endYear; year++) {
                    let quarterMiddleDate = [{
                        startPeriod: year + '01',
                        endPeriod: year + '03',
                        quarterValue: year + '年第一季度'
                    },
                        {
                            startPeriod: year + '04',
                            endPeriod: year + '06',
                            quarterValue: year + '年第二季度'
                        },
                        {
                            startPeriod: year + '07',
                            endPeriod: year + '09',
                            quarterValue: year + '年第三季度'
                        },
                        {
                            startPeriod: year + '10',
                            endPeriod: year + '12',
                            quarterValue: year + '年第四季度'
                        }];
                    for (let val of quarterMiddleDate) {
                        quarterSelect.push(val);
                    }
                }
                for (let val of quarterEndData) {
                    quarterSelect.push(val);
                }
            } else {
                quarterSelect = []
                for (let i = 0; i < quarterStartData.length; i++) {
                    for (let j = 0; j < quarterEndData.length; j++) {
                        if (quarterStartData[i].quarterValue == quarterEndData[j].quarterValue) {
                            quarterSelect.push(quarterStartData[i]);
                        }
                    }
                }
                quarterSelect = JSON.parse(JSON.stringify(quarterSelect));
            }
            quarterSelect.reverse();
            return quarterSelect;
        }
    }
  }
</script>
<style lang="less">
  .cashFlowContainer{
    .text-center{
      text-align: center;
    }
    .bold{
      font-weight: bold;
    }
    .el-date-editor.el-input, .el-date-editor.el-input__inner{
      width:120px !important;
    }
    .el-input__inner, div.el-input,  .el-input__inner, div.el-select, .el-input__suffix-inner{
      display: inline-block;
      height:32px !important;
    }
    .el-input__icon{
      line-height:32px !important;
    }
    input {
      cursor: default;
    }
    .el-input__inner{
      padding-right: 10px !important;
    }
    .reportsItemName{
      display: inline-block;width:100%;height: 100%;position: relative;
    }
  }
</style>
<style scoped lang="less">
   html, body{
      margin:0; padding: 0; height:100%; width:100%;
   }
   div{
     margin: 0; padding:0;
   }
  div, span{
    box-sizing: border-box;
  }
.reportAndAccountContainer{
  width: 100%;
  height: 100%;
  div.operationBar {
    height: 32px;
    display: flex;
    padding: 0 15px;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    .leftBar{
      display: flex;
      height: 100%;
      button{
        width: 60px;
        height: 32px;
        background: rgba(255, 255, 255, 1);
        border: 1px solid rgba(217, 217, 217, 1);
        border-radius: 4px 0 0 4px;
        font-size: 14px;
        font-weight: 400;
        color: rgba(0, 0, 0, 0.65);
        line-height: 22px;
        outline: none;
        &:nth-child(2){
          margin-right: 10px;
          border-radius: 0 4px 4px 0;
          border-left:0;
        }
        &.select{
          border: 1px solid #1890ff;
          background: rgba(255, 255, 255, 1);
          color: #1890ff;
        }
      }
    }
  }
  .reportContent{
    height: calc(~"100% - 50px");
    padding:20px 15px 0;
  }
}
</style>
