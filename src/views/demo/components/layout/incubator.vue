<template>
  <d2-container type="full" class="page">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="航天-3号楼" name="first"></el-tab-pane>
      <el-tab-pane label="航天-2号楼" name="second"></el-tab-pane>
      <el-tab-pane label="航天-1号楼" name="third"></el-tab-pane>
      <el-tab-pane label="航天-24号楼" name="fourth"></el-tab-pane>
    </el-tabs>

    <el-row :gutter="30">
      <el-col :span="18">
        <el-card style="width: 100%">
          <h3 slot="header">温箱状态</h3>
          <template>
            <div class="card-wrap">
              <el-card v-for="item in layout" :key="item.i" class="card-item">
                <el-tag size="mini" slot="header"
                  >编号: test001{{ item.i }}</el-tag
                >
                <template>
                  <el-row :gutter="30">
                    <el-col :span="14">
                      <div class="d2-mb">
                        温度状态:
                        <el-link
                          :type="
                            item.status === 0
                              ? 'success'
                              : item.status === 1
                              ? 'primary'
                              : 'info'
                          "
                          >{{
                            item.status === 0
                              ? "运行中"
                              : item.status === 1
                              ? "待机"
                              : "离线"
                          }}</el-link
                        >
                      </div>
                      <div class="d2-mb">运行时间: {{ item.time }}分钟</div>
                      <div class="d2-mb">
                        型号:<el-tag size="mini" type="info" slot="header">{{
                          item.model
                        }}</el-tag>
                      </div>
                    </el-col>
                    <el-col :span="10">
                      <div class="img-wrap">
                        <d2-icon-svg class="icon" :name="getIconName(item)" />
                        <span>{{ item.tp}}℃  </span>
                      </div>
                    </el-col>
                  </el-row>
                </template>
              </el-card>
            </div>
          </template>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-row :gutter="30" class="row-bg">
          <el-col :span="24">
            <el-card  >
               <h3 slot="header">温箱统计</h3>
              <template>
                <branch />
              </template>
            </el-card>
          </el-col>
          <el-col :span="24" style="margin-top:20px;">
            <el-card >
               <h3 slot="header">运行时间排行</h3>
              <template>
                <listIcons />
              </template>
            </el-card>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </d2-container>
</template>

<script>
import Vue from 'vue'
import { GridLayout, GridItem } from 'vue-grid-layout'
import listIcons from './components/listIcons'
import branch from './components/branch'
Vue.component('d2-grid-layout', GridLayout)
Vue.component('d2-grid-item', GridItem)
export default {
  components: {
    listIcons,
    branch
  },
  data () {
    function generateRandomString (length) {
      const characters =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
      let result = ''
      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length)
        result += characters[randomIndex]
      }
      return result
    }
    return {
      activeName: 'first',
      layout: [
        {
          i: '0',
          status: Math.floor(Math.random() * 3),
          tp: Math.floor(Math.random() * (100 - -100 + 1)) + -100,
          time: Math.floor(Math.random() * 1000),
          model: generateRandomString(8)
        },
        {
          i: '1',
          status: Math.floor(Math.random() * 3),
          tp: Math.floor(Math.random() * (100 - -100 + 1)) + -100,
          time: Math.floor(Math.random() * 1000),
          model: generateRandomString(8)
        },
        {
          i: '2',
          status: Math.floor(Math.random() * 3),
          tp: Math.floor(Math.random() * (100 - -100 + 1)) + -100,
          time: Math.floor(Math.random() * 1000),
          model: generateRandomString(8)
        },
        {
          i: '3',
          status: Math.floor(Math.random() * 3),
          tp: Math.floor(Math.random() * (100 - -100 + 1)) + -100,
          time: Math.floor(Math.random() * 1000),
          model: generateRandomString(8)
        },
        {
          i: '4',
          status: Math.floor(Math.random() * 3),
          tp: Math.floor(Math.random() * (100 - -100 + 1)) + -100,
          time: Math.floor(Math.random() * 1000),
          model: generateRandomString(8)
        },
        {
          i: '6',
          status: Math.floor(Math.random() * 3),
          tp: Math.floor(Math.random() * (100 - -100 + 1)) + -100,
          time: Math.floor(Math.random() * 1000),
          model: generateRandomString(8)
        },
        {
          i: '7',
          status: Math.floor(Math.random() * 3),
          tp: Math.floor(Math.random() * (100 - -100 + 1)) + -100,
          time: Math.floor(Math.random() * 1000),
          model: generateRandomString(8)
        },
        {
          i: '8',
          status: Math.floor(Math.random() * 3),
          tp: Math.floor(Math.random() * (100 - -100 + 1)) + -100,
          time: Math.floor(Math.random() * 1000),
          model: generateRandomString(8)
        }
      ]
    }
  },
  mounted () {
  
  },

  methods: {
    handleClick (val) {
      console.log('val', val)
    },
    getIconName (item) {
      let name = 'tp-success'
      if (item.tp < 0) {
        name = 'tp-success'
      }
      if (item.tp >= 0 && item.tp < 40) {
        name = 'tp-primary'
      }
      if (item.tp >= 40) {
        name = 'tp-danger'
      }
      return name
    },
    log (arg1 = 'log', ...logs) {
      if (logs.length === 0) {
        console.log(arg1)
      } else {
        console.group(arg1)
        logs.forEach((e) => {
          console.log(e)
        })
        console.groupEnd()
      }
    },
 
    // 测试代码
    layoutUpdatedHandler (newLayout) {
      console.group('layoutUpdatedHandler')
      newLayout.forEach((e) => {
        console.log(
          `{'x': ${e.x}, 'y': ${e.y}, 'w': ${e.w}, 'h': ${e.h}, 'i': '${e.i}'},`
        )
      })
      console.groupEnd()
    },
    resizeHandler (i, newH, newW) {
      this.log('resizeHandler', `i: ${i}, newH: ${newH}, newW: ${newW}`)
    },
    moveHandler (i, newX, newY) {
      this.log('moveHandler', `i: ${i}, newX: ${newX}, newY: ${newY}`)
    },
    resizedHandler (i, newH, newW, newHPx, newWPx) {
      this.log(
        'resizedHandler',
        `i: ${i}, newH: ${newH}, newW: ${newW}, newHPx: ${newHPx}, newWPx: ${newWPx}`
      )
    },
    movedHandler (i, newX, newY) {
      this.log('movedHandler', `i: ${i}, newX: ${newX}, newY: ${newY}`)
    }
  }
}
</script>

<style lang="scss" scoped>
.page {
  .vue-grid-layout {
    background-color: $color-bg;
    border-radius: 4px;
    margin: -10px;
    .page_card {
      height: 100%;
      @extend %unable-select;
    }
    .vue-resizable-handle {
      opacity: 0.3;
      &:hover {
        opacity: 1;
      }
    }
  }
  .card-wrap {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    .d2-mb{
      font-size: 14px;
    }
    .card-item {
      width: 30%;
      margin-top: 10px;
      margin-left: 20px;
      .img-wrap{
        display: flex;
        flex-direction: column;
        height: 100%;
        align-content: center;
        margin-top: 10%;
        .icon{
          width: 50px;
          height:50px;
        }
        span{
          margin-top:10px;
          font-size:20px;
          font-weight: bold;
        }
      }
    }
  }
}
</style>
