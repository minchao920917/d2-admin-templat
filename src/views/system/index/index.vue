<template>
  <d2-container type="ghost">
    <p>通过关键字过滤树节点</p>
    <div class="component-wrapper">
      <div class="filter-wrapper">
        <input type="text" v-model="filterText" placeholder="输入关键字进行过滤" />
      </div>
      <!-- <vue-okr-tree ref="tree" :data="testData" :left-data="testLeftData" only-both-tree direction="horizontal"
        show-collapsable node-key="id" default-expand-all :label-class-name="renderLabelClass"
        current-lable-class-name="label-bg-blue" :filter-node-method="filterNode" showNodeNum  :render-content="renderContent"></vue-okr-tree>
     -->
      </div>

  </d2-container>
</template>

<script>
// import VueOkrTree from '../index/components/vue-okr-tree/OkrTree.vue'
export default {
  components: {
    // VueOkrTree
  },
  data () {
    return {
      filterText: '',
      testData: [
        {
          id: 1,
          label: 'xxx科技有有限公司',
          content: '这是一个有活力的公司'
        }
      ],
      testLeftData: [{
        id: 1,
        label: 'xxx科技有有限公司',
        content: '这是一个有活力的公司',
        children: [{
          id: 12,
          label: '产品研发部',
          content: '这是一个有活力的产品研发部',
          children: [{
            id: 13,
            label: '研发-前端',
            content: '这是一个有活力的研发-前端'
          }, {
            id: 14,
            label: '研发-后端',
            content: '这是一个有活力的研发-后端'
          }, {
            id: 15,
            label: 'UI 设计',
            content: '这是一个有活力的UI 设计'
          }]
        }, {
          id: 16,
          label: '销售部',
          children: [{
            id: 17,
            label: '销售一部',
            content: '这是一个有活力的销售一部'
          }, {
            id: 18,
            label: '销售二部',
            content: '这是一个有活力的销售二部'
          }
          ]
        }, {
          id: 19,
          label: '财务部',
          content: '这是一个有活力的财务部'
        }]
      }]
    }
  },
  watch: {
    filterText (val) {
      this.$refs.tree.filter(val)
    }
  },
  methods: {
    filterNode (value, data) {
      if (!value) return true
      return data.label.indexOf(value) !== -1
    },
    renderLabelClass (node) {
      return 'label-class-blue'
    },
    renderNodeBtnContent (h, node) {
      return (
        <div class="org-chart-node-btn-text">{'>'}</div>
      )
    },
    renderContent (h, node) {
      const cls = ['diy-wrapper']
      if (node.isCurrent) {
        cls.push('current-select')
      }
      if (node.isLeftChild) {
        cls.push('left-child')
      }
      return (
        <div class={cls}>
          <div class="diy-con-name">{node.data.label}</div>
          <div class="diy-con-content">{node.data.content}</div>
        </div>
      )
    }
  }
}
</script>
<style>
.label-class-blue {
  color: #1989fa;
}

.label-bg-blue {
  background-color: aqua;
  color: red;
}
.label-class-blue{
  color: #1989fa;
}
.label-bg-blue{
  background: #1989fa;
  color: #fff;
}
.diy-wrapper{
  padding:10px
}
.no-padding{
  padding: 0 !important;
}
.diy-wrapper.left-child{
  border: 1px solid red;
}
.diy-wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.diy-wrapper .diy-con-name {
  font-size: 12px;
  line-height: 18px;
  color: #646a73;
}
.diy-wrapper .diy-con-content {
  color: #1f2329;
  line-height: 22px;
  word-break: break-word;
  font-size: 14px;
}
.diy-wrapper.current-select .diy-con-name {
  color: red;
}
.diy-wrapper.current-select .diy-con-content {
  color: #1989fa;
}
</style>
