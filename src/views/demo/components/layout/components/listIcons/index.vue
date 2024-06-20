<!-- eslint-disable vue/valid-template-root -->
<!--
 * @Author: minchao
 * @Date: 2024-03-06 15:47:51
 * @LastEditors: minchao
 * @LastEditTime: 2024-05-23 21:53:37
 * @Description: 请填写简介
-->
<!-- eslint-disable vue/valid-v-for -->
<!-- eslint-disable vue/require-v-for-key -->
<template>
  <div class="list-wrap">
    <div class="container"></div>

    <div class="list-item list-header">
      <span class="left"> 设备编号</span>
      <span class="middle">运行时长</span>
    </div>
    <div class="infinite-list-wrapper" style="overflow: auto">
      <ul
        class="list"
        v-infinite-scroll="load"
        infinite-scroll-disabled="disabled"
      >
        <li v-for="(index, i) in count" class="list-item" :key="index">
          <span class="left"> {{ i }} </span>
          <span class="middle">---</span>
        </li>
      </ul>
      <p v-if="loading">加载中...</p>
      <p v-if="noMore">没有更多了</p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      count: 10,
      loading: false
    }
  },
  computed: {
    noMore () {
      return this.count >= 24
    },
    disabled () {
      return this.loading || this.noMore
    }
  },
  methods: {
    load () {
      this.loading = true
      setTimeout(() => {
        this.count += 1
        this.loading = false
      }, 500)
    }
  }
}
</script>
<style lang="scss" scoped>
.infinite-list-wrapper {
  height: 300px;
  padding: 0 5px;
  /* 滚动条的根元素 */
  &::-webkit-scrollbar {
    width: 5px; /* 设置滚动条的宽度 */
  }

  /* 滚动条的滑块（拖动条） */
  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.2); /* 设置滑块的颜色和透明度 */
    border-radius: 5px; /* 设置滑块的圆角 */
  }

  /* 鼠标悬停在滑块上时 */
  &::-webkit-scrollbar-thumb:hover {
    background-color: rgba(0, 0, 0, 0.4); /* 设置悬停时滑块的颜色和透明度 */
  }
  .list {
    padding: 10px 0px;
    list-style: none;

    .list-item {
      border-bottom: 1px solid #eee;
    }
  }
  p {
    font-size: 12px;
    text-align: center;
    color: rgb(116, 114, 114);
  }
}
.list-item {
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-content: center;
  padding: 5px 0;
}
.list-header {
  background: #eee;
  margin: 5px 0;
}
.container {
  display: flex;
  justify-content: space-between;
  .left-side {
    flex: 1;
    p {
      font-size: 14px;
      color: rgb(116, 114, 114);
    }
  }

  .right-side {
    width: 150px;
  }
}
</style>
