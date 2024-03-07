<!--
 * @Author: minchao
 * @Date: 2024-03-06 15:47:51
 * @LastEditors: minchao
 * @LastEditTime: 2024-03-07 09:19:18
 * @Description: 请填写简介
-->

<template>
<div class="list-wrap">
  <div class="container">
    <div class="left-side">
      <p>消息</p>
           <d2-icon-svg name="time"/>
    </div>
  </div>
   <div class="item-center">
              <div class="gitee-traffic traffic-box">
                <el-badge :value="12" class="item">
                <div class="traffic-img">

                </div>
                </el-badge>
                <d2-count-up  class="item-value" :start="0" :end="2222"/>
                <span class="traffic-name sle">Gitee 访问量</span>
              </div>
              <div class="gitHub-traffic traffic-box">
                <div class="traffic-img">

                </div>
                 <d2-count-up  class="item-value" :start="0" :end="2222"/>
                <span class="traffic-name sle">GitHub 访问量</span>
              </div>
              <div class="today-traffic traffic-box">
                <div class="traffic-img">

                </div>
                 <d2-count-up  class="item-value" :start="0" :end="4567"/>
                <span class="traffic-name sle">今日访问量</span>
              </div>
              <div class="yesterday-traffic traffic-box">
                <div class="traffic-img">

                </div>
                <d2-count-up  class="item-value" :start="0" :end="1234"/>
                <span class="traffic-name sle">昨日访问量</span>
              </div>
   </div>
</div>
</template>

<script>
export default {
  data () {
    return {}
  },
  computed: {},
  methods: {}
}
</script>
<style lang="scss" scoped>
.item-center {
  display: flex;
  flex-wrap: wrap;
  place-content: space-between space-between;
  height: 100%;
  text-align: center;
  .traffic-box {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 20%;
    height: 48%;
    padding: 25px;
    border-radius: 30px;

    .traffic-img {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 70px;
      height: 70px;
      margin: 0 auto;
      margin-bottom: 10px;
      background-color: #ffffff;
      border-radius: 19px;
    }
  }
  img {
    width: 33px;
    height: 33px;
  }
  .item-value {
    margin-bottom: 4px;
    font-family: DIN;
    font-size: 28px;
    font-weight: bold;
    color: #1a1a37;
  }
  .traffic-name {
    overflow: hidden;
    font-family: DIN;
    font-size: 15px;
    color: #1a1a37;
    white-space: nowrap;
  }
  .gitee-traffic {
    // background: url("./images/1-bg.png");
    background-color: #e8faea;
    background-size: 100% 100%;
  }
  .gitHub-traffic {
    // background: url("./images/2-bg.png");
    background-color: #e7e1fb;
    background-size: 100% 100%;
  }
  .today-traffic {
    // background: url("./images/3-bg.png");
    background-color: #fdf3e9;
    background-size: 100% 100%;
  }
  .yesterday-traffic {
    // background: url("./images/4-bg.png");
    background-color: #f0f5fb;
    background-size: 100% 100%;
  }
}
</style>
