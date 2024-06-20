<template>
  <d2-container type="card">
    <template slot="header">区域划分</template>
    <div style="height: 600px; margin: -16px;overflow: hidden;">
      <SplitPane :min-percent='20' :default-percent='30' split="vertical">
        <!-- <template slot="paneL"><div style="margin: 10px;">左</div></template> -->
        <template slot="paneR">
          <el-button type="primary" icon="el-icon-edit" circle @click="downloadPng"></el-button>
          <div style="margin: 10px;">
            <vue-okr-tree id="canvas" ref="tree" :data="testData" :left-data="testLeftData" only-both-tree direction="horizontal"
        show-collapsable node-key="id" default-expand-all :label-class-name="renderLabelClass"
        current-lable-class-name="label-bg-blue" :filter-node-method="filterNode" showNodeNum  :render-content="renderContent"></vue-okr-tree>
</div>
        </template>
      </SplitPane>
    </div>
    <!-- <div style="margin: 10px;">
            <vue-okr-tree ref="tree" :data="testData" :left-data="testLeftData" only-both-tree direction="horizontal"
        show-collapsable node-key="id" default-expand-all :label-class-name="renderLabelClass"
        current-lable-class-name="label-bg-blue" :filter-node-method="filterNode" showNodeNum  :render-content="renderContent"></vue-okr-tree>
    </div> -->
  </d2-container>
</template>

<script>

import VueOkrTree from './vue-okr-tree/OkrTree.vue'
import Vue from 'vue'
import SplitPane from 'vue-splitpane'
Vue.component('SplitPane', SplitPane)
export default {
  components: {
    VueOkrTree
  },
  data(){
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
  mounted () {
    // 加载完成后显示提示
    this.showInfo()
  },
  methods: {
    downloadPng(){
 
    },
    // 显示提示
    showInfo () {
      this.$notify({
        title: '提示',
        message: '在横向或者纵向的分割线上拖拽调整分区大小'
      })
    },
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
