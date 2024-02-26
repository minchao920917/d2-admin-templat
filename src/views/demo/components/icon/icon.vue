<template>
  <d2-container>
    <template slot="header">图标组件</template>
    <d2-icon class="d2-mr-10"/>
    <d2-icon name="github" class="d2-mr-10"/>
    <d2-icon name="github" style="font-size: 100px;" class="d2-mr-10"/>
    <d2-icon name="github" class="icon-demo"/>
  </d2-container>
</template>

<style lang="scss" scoped>
.icon-demo {
  transition: all .3s;
  font-size: 100px;
  color: #409EFF;
  @extend %unable-select;
  &:hover{
    color: #f6f6f6;
    transform: scale(1.2) rotate(30deg);
  }
}

//  "#ffffff";
// export const black = "#000000";
// export const orange = "#fc6b02";
// export const yellow = "#ffd700";

// export const gray = "#e9e9e9";
// export const lightGray = "#f0f0f0";
// export const darkGray = "#a1a1a4";

// export const transparent = "transparent";

// export const freeze = "#f6f6f6";
// export const blue = "#8190a5";
// export const darkBlue = "#47525e";
// export const pink = "#f95f62";
// export const lightRed = "#ff7f7f";
// export const lightYellow = "#eab079";
// export const lightGreen = "#82c596";
</style>
