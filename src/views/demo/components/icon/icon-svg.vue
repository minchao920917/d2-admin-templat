<!--
 * @Author: minchao
 * @Date: 2023-11-20 08:35:07
 * @LastEditors: minchao
 * @LastEditTime: 2024-03-07 09:21:49
 * @Description: 请填写简介
-->
<template>
  <d2-container>
    <template slot="header">SVG图标组件</template>
    <el-row>
      <el-col class="icon-card" :span="4" v-for="(icon, index) in $IconSvg" :key="index">
        <d2-icon-svg class="icon" :name="icon" :currentColor="'#f60'"/>
        {{icon}}
        <div class="icon-title">
          <span>{{icon}}</span>
        </div>
      </el-col>
    </el-row>
  </d2-container>
</template>

<style lang="scss" scoped>
.icon-card {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 150px;
  &:hover {
    .icon {
      transform: scale(1.1);
      color:#f60;
    }
    .icon-title {
      color: $color-text-main;
    }
  }
}
.icon {
  height: 80px;
  width: 80px;
  transition: all .3s;
  cursor: pointer;
}
.icon-title {
  font-size: 12px;
  margin-top: 10px;
  color: $color-text-normal;
}
</style>
