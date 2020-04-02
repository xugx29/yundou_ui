<template>
 <div style='width: 100%;height: 100%;'>
   <reportBalance :initPeriod="201010" :currentPeriod='201012' :reportData='data'></reportBalance>
 </div>
</template>

<script>
export default {
  name: 'App',
  data () {
      return {
          data: {}
      }
  },
  created () {
      // this.$message({
      //     message:  '操作成功操作成功操作成功操作成功操作成功操作成功！',
      //     type:  'warning',
      //     duration:  3000
      // })
      this.data = [
          {
              'column': 1,
              'formulaType': 0,
              'itemName': '流动资产：',
              'lineNo': 0,
              'sort': 10,
              'style': {
                  'indent': '0',
                  'bold': '1'
              },
              'value': [
                  0.00,
                  0.00
              ]
          },
          {
              'column': 1,
              'formulaType': 2,
              'itemName': '货币资金',
              'lineNo': 1,
              'sort': 20,
              'style': {
                  'indent': '1',
                  'bold': ''
              },
              'value': [
                  0.00,
                  0.00
              ]
          },
          {
              'column': 1,
              'formulaType': 2,
              'itemName': '短期投资',
              'lineNo': 2,
              'sort': 30,
              'style': {
                  'indent': '1',
                  'bold': ''
              },
              'value': [
                  0.00,
                  0.00
              ]
          },
          {
              'column': 1,
              'formulaType': 2,
              'itemName': '应收票据',
              'lineNo': 3,
              'sort': 40,
              'style': {
                  'indent': '1',
                  'bold': ''
              },
              'value': [
                  0.00,
                  0.00
              ]
          },
          {
              'column': 1,
              'formulaType': 2,
              'itemName': '应收账款',
              'lineNo': 4,
              'sort': 50,
              'style': {
                  'indent': '1',
                  'bold': ''
              },
              'value': [
                  0.00,
                  0.00
              ]
          },
          {
              'column': 1,
              'formulaType': 2,
              'itemName': '预付账款',
              'lineNo': 5,
              'sort': 60,
              'style': {
                  'indent': '1',
                  'bold': ''
              },
              'value': [
                  0.00,
                  0.00
              ]
          },
          {
              'column': 1,
              'formulaType': 2,
              'itemName': '应收股利',
              'lineNo': 6,
              'sort': 70,
              'style': {
                  'indent': '1',
                  'bold': ''
              },
              'value': [
                  0.00,
                  0.00
              ]
          },
          {
              'column': 1,
              'formulaType': 2,
              'itemName': '应收利息',
              'lineNo': 7,
              'sort': 80,
              'style': {
                  'indent': '1',
                  'bold': ''
              },
              'value': [
                  0.00,
                  0.00
              ]
          },
          {
              'column': 1,
              'formulaType': 2,
              'itemName': '其他应收款',
              'lineNo': 8,
              'sort': 90,
              'style': {
                  'indent': '1',
                  'bold': ''
              },
              'value': [
                  0.00,
                  0.00
              ]
          },
          {
              'column': 1,
              'formulaType': 2,
              'itemName': '存货',
              'lineNo': 9,
              'sort': 100,
              'style': {
                  'indent': '1',
                  'bold': ''
              },
              'value': [
                  0.00,
                  0.00
              ]
          },
          {
              'column': 1,
              'formulaType': 2,
              'itemName': '其中：原材料',
              'lineNo': 10,
              'sort': 110,
              'style': {
                  'indent': '2',
                  'bold': ''
              },
              'value': [
                  0.00,
                  0.00
              ]
          },
          {
              'column': 1,
              'formulaType': 2,
              'itemName': '在产品',
              'lineNo': 11,
              'sort': 120,
              'style': {
                  'indent': '2',
                  'bold': ''
              },
              'value': [
                  0.00,
                  0.00
              ]
          },
          {
              'column': 1,
              'formulaType': 2,
              'itemName': '库存商品',
              'lineNo': 12,
              'sort': 130,
              'style': {
                  'indent': '2',
                  'bold': ''
              },
              'value': [
                  0.00,
                  0.00
              ]
          },
          {
              'column': 1,
              'formulaType': 2,
              'itemName': '周转材料',
              'lineNo': 13,
              'sort': 140,
              'style': {
                  'indent': '2',
                  'bold': ''
              },
              'value': [
                  0.00,
                  0.00
              ]
          },
          {
              'column': 1,
              'formulaType': 2,
              'itemName': '其他流动资产',
              'lineNo': 14,
              'sort': 150,
              'style': {
                  'indent': '1',
                  'bold': ''
              },
              'value': [
                  0.00,
                  0.00
              ]
          },
          {
              'column': 1,
              'formulaType': 1,
              'itemName': '流动资产合计',
              'lineNo': 15,
              'sort': 160,
              'style': {
                  'indent': 'center',
                  'bold': '1'
              },
              'value': [
                  0.00,
                  0.00
              ]
          },
          {
              'column': 1,
              'formulaType': 0,
              'itemName': '非流动资产：',
              'lineNo': 0,
              'sort': 170,
              'style': {
                  'indent': '0',
                  'bold': '1'
              },
              'value': [
                  0.00,
                  0.00
              ]
          },
          {
              'column': 1,
              'formulaType': 2,
              'itemName': '长期债券投资',
              'lineNo': 16,
              'sort': 180,
              'style': {
                  'indent': '1',
                  'bold': ''
              },
              'value': [
                  0.00,
                  0.00
              ]
          },
          {
              'column': 1,
              'formulaType': 2,
              'itemName': '长期股权投资',
              'lineNo': 17,
              'sort': 190,
              'style': {
                  'indent': '1',
                  'bold': ''
              },
              'value': [
                  0.00,
                  0.00
              ]
          },
          {
              'column': 1,
              'formulaType': 2,
              'itemName': '固定资产原价',
              'lineNo': 18,
              'sort': 200,
              'style': {
                  'indent': '1',
                  'bold': ''
              },
              'value': [
                  0.00,
                  0.00
              ]
          },
          {
              'column': 1,
              'formulaType': 2,
              'itemName': '减：累计折旧',
              'lineNo': 19,
              'sort': 210,
              'style': {
                  'indent': '1',
                  'bold': ''
              },
              'value': [
                  88577.04,
                  0.00
              ]
          },
          {
              'column': 1,
              'formulaType': 1,
              'itemName': '固定资产账面价值',
              'lineNo': 20,
              'sort': 220,
              'style': {
                  'indent': 'center',
                  'bold': '1'
              },
              'value': [
                  -88577.04,
                  0.00
              ]
          },
          {
              'column': 1,
              'formulaType': 2,
              'itemName': '在建工程',
              'lineNo': 21,
              'sort': 230,
              'style': {
                  'indent': '1',
                  'bold': ''
              },
              'value': [
                  0.00,
                  0.00
              ]
          },
          {
              'column': 1,
              'formulaType': 2,
              'itemName': '工程物资',
              'lineNo': 22,
              'sort': 240,
              'style': {
                  'indent': '1',
                  'bold': ''
              },
              'value': [
                  0.00,
                  0.00
              ]
          },
          {
              'column': 1,
              'formulaType': 2,
              'itemName': '固定资产清理',
              'lineNo': 23,
              'sort': 250,
              'style': {
                  'indent': '1',
                  'bold': ''
              },
              'value': [
                  0.00,
                  0.00
              ]
          },
          {
              'column': 1,
              'formulaType': 2,
              'itemName': '生产性生物资产',
              'lineNo': 24,
              'sort': 260,
              'style': {
                  'indent': '1',
                  'bold': ''
              },
              'value': [
                  0.00,
                  0.00
              ]
          },
          {
              'column': 1,
              'formulaType': 2,
              'itemName': '无形资产',
              'lineNo': 25,
              'sort': 270,
              'style': {
                  'indent': '1',
                  'bold': ''
              },
              'value': [
                  -32000.00,
                  0.00
              ]
          },
          {
              'column': 1,
              'formulaType': 2,
              'itemName': '开发支出',
              'lineNo': 26,
              'sort': 280,
              'style': {
                  'indent': '1',
                  'bold': ''
              },
              'value': [
                  0.00,
                  0.00
              ]
          },
          {
              'column': 1,
              'formulaType': 2,
              'itemName': '长期待摊费用',
              'lineNo': 27,
              'sort': 290,
              'style': {
                  'indent': '1',
                  'bold': ''
              },
              'value': [
                  0.00,
                  0.00
              ]
          },
          {
              'column': 1,
              'formulaType': 2,
              'itemName': '其他非流动资产',
              'lineNo': 28,
              'sort': 300,
              'style': {
                  'indent': '1',
                  'bold': ''
              },
              'value': [
                  0.00,
                  0.00
              ]
          },
          {
              'column': 1,
              'formulaType': 1,
              'itemName': '非流动资产合计',
              'lineNo': 29,
              'sort': 310,
              'style': {
                  'indent': 'center',
                  'bold': '1'
              },
              'value': [
                  -120577.04,
                  0.00
              ]
          },
          {
              'column': 1,
              'formulaType': 1,
              'itemName': '资产总计',
              'lineNo': 30,
              'sort': 320,
              'style': {
                  'indent': 'center',
                  'bold': '1'
              },
              'value': [
                  -120577.04,
                  0.00
              ]
          },
          {
              'column': 2,
              'formulaType': 0,
              'itemName': '流动负债：',
              'lineNo': 0,
              'sort': 330,
              'style': {
                  'indent': '0',
                  'bold': '1'
              },
              'value': [
                  0.00,
                  0.00
              ]
          },
          {
              'column': 2,
              'formulaType': 2,
              'itemName': '短期借款',
              'lineNo': 31,
              'sort': 340,
              'style': {
                  'indent': '1',
                  'bold': ''
              },
              'value': [
                  0.00,
                  0.00
              ]
          },
          {
              'column': 2,
              'formulaType': 2,
              'itemName': '应付票据',
              'lineNo': 32,
              'sort': 350,
              'style': {
                  'indent': '1',
                  'bold': ''
              },
              'value': [
                  0.00,
                  0.00
              ]
          },
          {
              'column': 2,
              'formulaType': 2,
              'itemName': '应付账款',
              'lineNo': 33,
              'sort': 360,
              'style': {
                  'indent': '1',
                  'bold': ''
              },
              'value': [
                  0.00,
                  0.00
              ]
          },
          {
              'column': 2,
              'formulaType': 2,
              'itemName': '预收账款',
              'lineNo': 34,
              'sort': 370,
              'style': {
                  'indent': '1',
                  'bold': ''
              },
              'value': [
                  0.00,
                  0.00
              ]
          },
          {
              'column': 2,
              'formulaType': 2,
              'itemName': '应付职工薪酬',
              'lineNo': 35,
              'sort': 380,
              'style': {
                  'indent': '1',
                  'bold': ''
              },
              'value': [
                  0.00,
                  0.00
              ]
          },
          {
              'column': 2,
              'formulaType': 2,
              'itemName': '应交税费',
              'lineNo': 36,
              'sort': 390,
              'style': {
                  'indent': '1',
                  'bold': ''
              },
              'value': [
                  0.00,
                  0.00
              ]
          },
          {
              'column': 2,
              'formulaType': 2,
              'itemName': '应付利息',
              'lineNo': 37,
              'sort': 400,
              'style': {
                  'indent': '1',
                  'bold': ''
              },
              'value': [
                  0.00,
                  0.00
              ]
          },
          {
              'column': 2,
              'formulaType': 2,
              'itemName': '应付利润',
              'lineNo': 38,
              'sort': 410,
              'style': {
                  'indent': '1',
                  'bold': ''
              },
              'value': [
                  0.00,
                  0.00
              ]
          },
          {
              'column': 2,
              'formulaType': 2,
              'itemName': '其他应付款',
              'lineNo': 39,
              'sort': 420,
              'style': {
                  'indent': '1',
                  'bold': ''
              },
              'value': [
                  0.00,
                  0.00
              ]
          },
          {
              'column': 2,
              'formulaType': 2,
              'itemName': '其他流动负债',
              'lineNo': 40,
              'sort': 430,
              'style': {
                  'indent': '1',
                  'bold': ''
              },
              'value': [
                  0.00,
                  0.00
              ]
          },
          {
              'column': 2,
              'formulaType': 1,
              'itemName': '流动负债合计',
              'lineNo': 41,
              'sort': 440,
              'style': {
                  'indent': 'center',
                  'bold': '1'
              },
              'value': [
                  0.00,
                  0.00
              ]
          },
          {
              'column': 2,
              'formulaType': 0,
              'itemName': '非流动负债：',
              'lineNo': 0,
              'sort': 450,
              'style': {
                  'indent': '0',
                  'bold': '1'
              },
              'value': [
                  0.00,
                  0.00
              ]
          },
          {
              'column': 2,
              'formulaType': 2,
              'itemName': '长期借款',
              'lineNo': 42,
              'sort': 460,
              'style': {
                  'indent': '1',
                  'bold': ''
              },
              'value': [
                  0.00,
                  0.00
              ]
          },
          {
              'column': 2,
              'formulaType': 2,
              'itemName': '长期应付款',
              'lineNo': 43,
              'sort': 470,
              'style': {
                  'indent': '1',
                  'bold': ''
              },
              'value': [
                  0.00,
                  0.00
              ]
          },
          {
              'column': 2,
              'formulaType': 2,
              'itemName': '递延收益',
              'lineNo': 44,
              'sort': 480,
              'style': {
                  'indent': '1',
                  'bold': ''
              },
              'value': [
                  0.00,
                  0.00
              ]
          },
          {
              'column': 2,
              'formulaType': 2,
              'itemName': '其他非流动负债',
              'lineNo': 45,
              'sort': 490,
              'style': {
                  'indent': '1',
                  'bold': ''
              },
              'value': [
                  0.00,
                  0.00
              ]
          },
          {
              'column': 2,
              'formulaType': 1,
              'itemName': '非流动负债合计',
              'lineNo': 46,
              'sort': 500,
              'style': {
                  'indent': 'center',
                  'bold': '1'
              },
              'value': [
                  0.00,
                  0.00
              ]
          },
          {
              'column': 2,
              'formulaType': 1,
              'itemName': '负债合计',
              'lineNo': 47,
              'sort': 510,
              'style': {
                  'indent': 'center',
                  'bold': '1'
              },
              'value': [
                  0.00,
                  0.00
              ]
          },
          {
              'column': 2,
              'formulaType': 0,
              'itemName': '',
              'lineNo': 0,
              'sort': 511,
              'style': {
                  'indent': '0',
                  'bold': ''
              },
              'value': [
                  0.00,
                  0.00
              ]
          },
          {
              'column': 2,
              'formulaType': 0,
              'itemName': '',
              'lineNo': 0,
              'sort': 512,
              'style': {
                  'indent': '0',
                  'bold': ''
              },
              'value': [
                  0.00,
                  0.00
              ]
          },
          {
              'column': 2,
              'formulaType': 0,
              'itemName': '',
              'lineNo': 0,
              'sort': 513,
              'style': {
                  'indent': '0',
                  'bold': ''
              },
              'value': [
                  0.00,
                  0.00
              ]
          },
          {
              'column': 2,
              'formulaType': 0,
              'itemName': '',
              'lineNo': 0,
              'sort': 514,
              'style': {
                  'indent': '0',
                  'bold': ''
              },
              'value': [
                  0.00,
                  0.00
              ]
          },
          {
              'column': 2,
              'formulaType': 0,
              'itemName': '',
              'lineNo': 0,
              'sort': 515,
              'style': {
                  'indent': '0',
                  'bold': ''
              },
              'value': [
                  0.00,
                  0.00
              ]
          },
          {
              'column': 2,
              'formulaType': 0,
              'itemName': '',
              'lineNo': 0,
              'sort': 516,
              'style': {
                  'indent': '0',
                  'bold': ''
              },
              'value': [
                  0.00,
                  0.00
              ]
          },
          {
              'column': 2,
              'formulaType': 0,
              'itemName': '所有者权益（或股东权益）：',
              'lineNo': 0,
              'sort': 520,
              'style': {
                  'indent': 'center',
                  'bold': '1'
              },
              'value': [
                  0.00,
                  0.00
              ]
          },
          {
              'column': 2,
              'formulaType': 2,
              'itemName': '实收资本（或股本）',
              'lineNo': 48,
              'sort': 530,
              'style': {
                  'indent': '1',
                  'bold': ''
              },
              'value': [
                  0.00,
                  0.00
              ]
          },
          {
              'column': 2,
              'formulaType': 2,
              'itemName': '资本公积',
              'lineNo': 49,
              'sort': 540,
              'style': {
                  'indent': '1',
                  'bold': ''
              },
              'value': [
                  0.00,
                  0.00
              ]
          },
          {
              'column': 2,
              'formulaType': 2,
              'itemName': '盈余公积',
              'lineNo': 50,
              'sort': 550,
              'style': {
                  'indent': '1',
                  'bold': ''
              },
              'value': [
                  0.00,
                  0.00
              ]
          },
          {
              'column': 2,
              'formulaType': 2,
              'itemName': '未分配利润',
              'lineNo': 51,
              'sort': 560,
              'style': {
                  'indent': '1',
                  'bold': ''
              },
              'value': [
                  -120577.04,
                  0.00
              ]
          },
          {
              'column': 2,
              'formulaType': 1,
              'itemName': '所有者权益（或股东权益）合计',
              'lineNo': 52,
              'sort': 570,
              'style': {
                  'indent': 'center',
                  'bold': '1'
              },
              'value': [
                  -120577.04,
                  0.00
              ]
          },
          {
              'column': 2,
              'formulaType': 1,
              'itemName': '负债和所有者权益（或股东权益）总计',
              'lineNo': 53,
              'sort': 580,
              'style': {
                  'indent': 'center',
                  'bold': '1'
              },
              'value': [
                  -120577.04,
                  0.00
              ]
          }
      ]
  },
  methods: {
    // showMessage () {
    //   this.$message.normal({
    //     message:  '操作成功操作成功操作成功操作成功操作成功操作成功！',
    //     duration:  3000
    //   })
    // }
      logout () {
          alert(1)
      }
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing:  antialiased;
  -moz-osx-font-smoothing:  grayscale;
  text-align:  center;
  color:  #2c3e50;
  margin-top:  60px;
}
</style>
