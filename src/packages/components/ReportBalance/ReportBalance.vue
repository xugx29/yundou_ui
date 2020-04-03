<template>
  <div class="reportAndAccountContainer reportBalance">
    <div class="operationBar">
      <div class="leftBar">
        <el-date-picker
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
      </div>
    </div>
    <div class="reportContent">
      <el-table
        :data="data"
        border
        height="100%"
        style="width: 100%;font-size: 12px;font-weight:400;color:rgba(51,51,51,1);"
        :header-cell-style="getRowClass"
        class="table"
      >
        <el-table-column prop="accountCode" label="资产" header-align="center">
          <template slot-scope="scope">
              <span class="reportsItemName" :class="{'text-center': scope.row.left.style.indent == 'center', bold: scope.row.left.style.bold == 1}" :style="{'text-indent': scope.row.left.style.indent == 'center' ? 0 : (parseInt(scope.row.left.style.indent) * 18) + 'px'}">
                {{scope.row.left.itemName}}
              </span>
          </template>
        </el-table-column>
        <el-table-column prop="accountName" label="行次" width="66" header-align="center" align="center">
          <template slot-scope="scope">
            {{scope.row.left.lineNo == '0' ? '' : scope.row.left.lineNo}}
          </template>
        </el-table-column>
        <el-table-column
          prop="direction"
          label="期末余额"
          width="140"
          header-align="center"
          align="right"
        >
          <template slot-scope="scope">
            {{scope.row.left.value[0] | currency}}
          </template>
        </el-table-column>
        <el-table-column
          prop="initial_balance"
          label="年初余额"
          width="140"
          header-align="center"
          align="right"
        >
          <template slot-scope="scope">
            {{scope.row.left.value[1] | currency}}
          </template>
        </el-table-column>
        <el-table-column
          prop="accumulative_debtor"
          label="负债和所有者权益"
          header-align="center"
          align="left"
        >
          <template slot-scope="scope">
              <span class="reportsItemName" :class="{'text-center': scope.row.right.style.indent == 'center', bold: scope.row.right.style.bold == 1}" :style="{'text-indent': scope.row.right.style.indent == 'center' ? 0 : (parseInt(scope.row.right.style.indent) * 18) + 'px'}">
                {{scope.row.right.itemName}}
                <i @click="editFormula(scope.row.right)" v-if="scope.row.right.formulaType == 2" class="icon-editFormula"></i>
              </span>
          </template>
        </el-table-column>
        <el-table-column
          prop="accumulative_credit"
          label="行次"
          width="66"
          header-align="center"
          align="center"
        >
          <template slot-scope="scope">
            {{scope.row.right.lineNo == '0' ? '' : scope.row.right.lineNo}}
          </template>
        </el-table-column>
        <el-table-column
          prop="initial_amount"
          label="期末余额"
          width="140"
          header-align="center"
          align="right"
        >
          <template slot-scope="scope">
            {{scope.row.right.value[0] | currency}}
          </template>
        </el-table-column>
        <el-table-column prop="damage_amount" label="年初余额" header-align="center" align="right" width="140">
          <template slot-scope="scope">
            {{scope.row.right.value[1] | currency}}
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'reportBalance',
    data () {
      return {
          data: [],
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
        this.initData();
    },
    props: ['initPeriod', 'currentPeriod', 'reportData'],
    methods: {
        initData () {
            let data = this.reportData
            let left = [];
            let right = [];
            let arr = [];
            for (let i = 0; i < data.length; i++) {
                if (data[i].column == 1) {
                    left.push(data[i])
                } else {
                    right.push(data[i])
                }
            }
            for (let i = 0; i < left.length; i++) {
                let obj = {}
                obj.left = left[i];
                obj.right = right[i]
                arr.push(obj)
            }
            this.data = arr;
        },
        getRowClass ({row, column, rowIndex, columnIndex}) {
            if (rowIndex == 0) {
                return 'background:#FAFAFA;border-right:none;font-size:14px;font-weight:500;color:rgba(0,0,0,0.85);height:54px;';
            } else {
                return '';
            }
        },
        getLastDayOfMonth (year, month) { // 获取某年某月的最后一天
            let date = new Date(year, month - 1, '01');
            date.setDate(1);
            date.setMonth(date.getMonth() + 1);
            let cdate = new Date(date.getTime() - 1000 * 60 * 60 * 24);
            return cdate.getDate();
        },
        changePeriod (date) {
            this.$emit('updateReportData', date)
        }
    }
  }
</script>
<style lang="less">
  .reportBalance{
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
    }
  }
  .reportContent{
    height: calc(~"100% - 50px");
    padding:20px 15px 0;
  }
}
</style>
