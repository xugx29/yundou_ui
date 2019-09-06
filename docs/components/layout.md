#### 布局(Layout)
> UI库提供两列布局，菜单支持三级，具体使用如下

##### Props
| props名 | 默认 | 类型 | 注释 |
| :------: | :------: | :------: | :------: |
| nav | 无默认值，需按示例①构建 | Array | 导航菜单 |
| serviceModule | false | Boolean | 是否显示右侧服务中心模块 |
| logo | 图片url | String | 菜单中logo的url地址 |
| notice | {show: true, text1: '111', text2: '222'} | Object | 消息通知模块 |

##### 示例①
> 此例用于提供构建nav菜单的数据结构，具体如下
```javascript
    [
      {
        "name": "一级菜单1",
        "iconClass": "",
        "url": "",
        "child": {}
      },
      {
        "name": "一级菜单2",
        "iconClass": "",
        "url": "",
        "child": {
            "alias": "一级菜单2的别名",
            "data": [{"name": "二级菜单1", "child": [
              {"name": "三级菜单1", "url": ""}
            ]},
            {"name": "二级菜单2", "child": [
              {"name": "三级菜单2", "url": ""}, {"name": "三级菜单3", "url": ""}
            ]},
            {"name": "二级菜单3", "child": [
              {"name": "三级菜单4", "url": ""}, {"name": "三级菜单5", "url": ""}
            ]},
            {"name": "二级菜单4", "child": [
              {"name": "三级菜单6", "url": ""}, {"name": "三级菜单7", "url": ""}
            ]}]}
      }
    ]
```
##### 字段说明
| 字段名 | 注释 |
| :------: | :------: |
| name | 菜单名称 |
| iconClass | 一级菜单前面图标的图标名，和项目中雪碧图对应即可 |
| url | router link url，提供给vue-router做跳转链接，如不需跳转（部分一级菜单等），留空即可 |
| child | 下级菜单数组 |
