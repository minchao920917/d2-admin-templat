<!--
 * @Author: minchao
 * @Date: 2024-05-24 08:37:08
 * @LastEditors: minchao
 * @LastEditTime: 2024-06-04 10:19:25
 * @Description: 请填写简介
-->
<template>
  <!-- <dv-full-screen-container >content</dv-full-screen-container> -->
  <div class="page">
    <dv-border-box-11 class="center" title="车间温湿度数据展示-2楼">
      <div class="text-wrap">
         <dv-border-box-5 class="text text-left">更新时间:{{currentTime}}</dv-border-box-5>
        <dv-border-box-5 class="text text-right" :reverse="true">
          <span>正常值:温度: 18~28℃</span>
          &nbsp;&nbsp;<span>温度: 30~70%RH</span>
        </dv-border-box-5>
      </div>

      <div class="item-wrap">
        <dv-border-box-13 v-for="item in layout" :key="item.i" class="item">
          <div class="cont-wrap">
            <dv-border-box-8 class="title">20{{ item.i }}</dv-border-box-8>
            <dv-border-box-10 class="cont">{{ item.model }}</dv-border-box-10>
            <el-divider></el-divider>
            <dv-conical-column-chart
              class="img-box"
              :config="{
                ...config,
                data: [
                  {
                    name: '温度',
                    value: item.wd,
                  },
                  {
                    name: '湿度',
                    value: item.sd,
                  },
                ],
              }"
              style="width: 200px; height: 300px;margin:40px auto;"
            />
          </div>
        </dv-border-box-13>
      </div>
    </dv-border-box-11>

  </div>
</template>

<script>
export default {
  components: {},
  data () {
    return {
      currentTime: this.getCurrentTime(),
      timer: null,
      activeName: 'first',
      layout: [
        {
          i: '0',
          status: Math.floor(Math.random() * 3),
          wd: Math.floor(Math.random() * (100 - 0 + 1)) + -0,
          sd: Math.floor(Math.random() * (100 - 0 + 1)) + -0,
          time: Math.floor(Math.random() * 1000),
          model: '验收交付'
        },
        {
          i: '1',
          status: Math.floor(Math.random() * 3),
          wd: Math.floor(Math.random() * (100 - 0 + 1)) + -0,
          sd: Math.floor(Math.random() * (100 - 0 + 1)) + -0,
          time: Math.floor(Math.random() * 1000),
          model: '整机装调1'
        },
        {
          i: '2',
          status: Math.floor(Math.random() * 3),
          wd: Math.floor(Math.random() * (100 - 0 + 1)) + -0,
          sd: Math.floor(Math.random() * (100 - 0 + 1)) + -0,
          time: Math.floor(Math.random() * 1000),
          model: '整机装调2'
        },
        {
          i: '3',
          status: Math.floor(Math.random() * 3),
          wd: Math.floor(Math.random() * (100 - 0 + 1)) + -0,
          sd: Math.floor(Math.random() * (100 - 0 + 1)) + -0,
          time: Math.floor(Math.random() * 1000),
          model: '整机装调3'
        },
        {
          i: '4',
          status: Math.floor(Math.random() * 3),
          wd: Math.floor(Math.random() * (100 - 0 + 1)) + -0,
          sd: Math.floor(Math.random() * (100 - 0 + 1)) + -0,
          time: Math.floor(Math.random() * 1000),
          model: '整机装调4'
        }
      ],

      config: {
        data: [
          {
            name: '温度',
            value: 55
          },
          {
            name: '湿度',
            value: 120
          }
        ],
        img: [
          'https://img2.imgtp.com/2024/05/24/ydjvIQao.png',
          'https://img2.imgtp.com/2024/05/24/52LzwaIo.png'
        ],
        fontSize: 20,
        showValue: true
      }
    }
  },
  mounted () {
    this.timer = setInterval(() => {
      this.currentTime = this.getCurrentTime()
    }, 1000)
  },

  methods: {
    getCurrentTime () {
      const now = new Date()
      const year = now.getFullYear()
      const month = (now.getMonth() + 1).toString().padStart(2, '0')
      const day = now.getDate().toString().padStart(2, '0')
      const hours = now.getHours().toString().padStart(2, '0')
      const minutes = now.getMinutes().toString().padStart(2, '0')
      const seconds = now.getSeconds().toString().padStart(2, '0')
      return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`
    }
  },
  beforeDestroy () {
    clearInterval(this.timer)
  }
}
</script>

<style lang="scss" scoped>
.page {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background: linear-gradient(to bottom, #00008b, #030d68, #080130);
  .center {
    height: 80%;
    width: calc(100% - 20px);
    padding: 30px 10px 0 10px;
  }

  .text-wrap{
     display: flex;
    justify-content: space-between;
    color:#fff;
    .text{
      height: 50px;
      line-height: 50px;
      padding: 10px 10px 10px 10px;
      width:400px;
      // text-align: center;
    }
    .text-left{
       padding-left: 2%;
    }
     .text-right{
      text-align:right;
      padding-right: 20px;
    }
  }
  .item-wrap {
    display: flex;
    // justify-content: space-around;
    flex-wrap:wrap;
    .item {
      // flex-grow: 1;
      width:300px;
      height: 500px;
      padding: 40px 10px 40px 10px;
      color: #fff;
      .title {
        width: 100px;
        height: 20px;
        padding: 10px 20px;
        margin: 0 auto;
        text-align: center;
        line-height: 20px;
      }
      .cont {
        width: 80%;
        height: 40px;
        padding: 10px 15px;
        margin: 0 auto;
        text-align: center;
        line-height: 40px;
        margin-top: 40px;
      }
      .img-box {

      }
    }
  }
}
</style>
