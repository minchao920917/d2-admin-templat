<template>
  <d2-container type="ghost">
    <McOrgTree id="first-tree" :label-class-name="labelClassName" :data="data" @on-node-mouseover="onMouseover1"
      @on-node-mouseout="onMouseout" />

    <!-- 创建浮窗盒子 -->
    <div v-show="BasicSwich" class="floating">
      <p>ID:{{ BasicInfo.id }}</p>
      <p>Name:{{ BasicInfo.label }}</p>
    </div>

  </d2-container>
</template>

<script>
import McOrgTree from "./components/mc-org-tree/index.vue";
export default {
  components: {
    McOrgTree,
  },
  data() {
    return {
      labelClassName: "bg-color-orange",
      BasicSwich: false,
      BasicInfo: { id: null, label: null },
      // 定义数据
      data: {
        id: 0,
        label: "XXX科技有限公司",
        children: [
          {
            id: 2,
            label: "产品研发部",
            children: [
              {
                id: 5,
                label: "研发-前端"
              },
              {
                id: 6,
                label: "研发-后端"
              },
              {
                id: 9,
                label: "UI设计"
              },
              {
                id: 10,
                label: "产品经理"
              }
            ]
          },
          {
            id: 3,
            label: "销售部",
            children: [
              {
                id: 7,
                label: "销售一部"
              },
              {
                id: 8,
                label: "销售二部"
              }
            ]
          },
          {
            id: 4,
            label: "财务部"
          },
          {
            id: 9,
            label: "HR人事"
          }
        ]
      }


    }
  },
  methods: {
    traverseUpwards(element) {
      // 检查是否遇到 id 是 'a' 的元素，如果是，则暂停遍历
      if (element.id === 'first-tree') {
        return;
      }
      // 添加 ff className
      element.classList.add('father');

      // 获取父元素
      const parent = element.parentNode;

      // 如果存在父元素，则继续向上遍历
      if (parent) {
        this.traverseUpwards(parent); // 递归调用遍历父元素
      }
    },
    removeUpwards(element) {
      // 检查是否遇到 id 是 'a' 的元素，如果是，则暂停遍历
      if (element.id === 'first-tree') {
        return;
      }
      // 添加 ff className
      element.classList.remove('father');

      // 获取父元素
      const parent = element.parentNode;

      // 如果存在父元素，则继续向上遍历
      if (parent) {
        this.removeUpwards(parent); // 递归调用遍历父元素
      }
    },
    // 方法
    onMouseout(e, data) {
      // this.removeUpwards(e.target)
      const classNames = e.currentTarget.className.split(" ")
      e.currentTarget.className = classNames.filter(item => item !== 'active-bg').join(' ')
      this.BasicSwich = false
    },
    onMouseover1(e, data) {
      console.log(e.target)
      this.traverseUpwards(e.target)
      const classNames = e.currentTarget.className.split(" ")
      console.log('classNames', classNames)
      e.currentTarget.className = [...classNames, 'active-bg'].join(' ')
      this.BasicInfo = { ...data, id: data.id };
      this.BasicSwich = true;
      var floating = document.getElementsByClassName('floating')[0];
      floating.style.left = e.clientX + 'px';
      floating.style.top = e.clientY + 'px';

    },

  },
}
</script>
<style>
/* 盒子css */
.floating {
  background: rgba(0, 0, 0, 0.7);
  width: 160px;
  height: 100px;
  position: fixed;
  color: #fff;
  padding-top: 15px;
  border-radius: 15px;
  padding-left: 15px;
  box-sizing: border-box;
  left: 0;
  top: 0;
  transition: all 0.3s;
  z-index: 999;
  text-align: left;
  font-size: 12px;
}

#first-tree {




  .bg-color-orange1 {
    color: #fff;
    background-color: red;
  }

  .bg-color-orange2 {
    color: #fff;
    background-color: blue;
  }

  .bg-color-orange3 {
    color: #fff;
    background-color: orange;
  }

  .active-bg {
    background: rgba(76, 121, 180, .6);
    color: rgb(23, 7, 240);
  }

  .org-tree-node.father {
    &::after {
      border-top-color: rgb(222, 12, 110);
      border-left-color: rgb(222, 12, 110);
    }
  }

  .org-tree-node-children.father {
    &::before {
      border-top-color: rgb(222, 12, 110);
      border-left-color: rgb(222, 12, 110);
    }
  }





}
</style>
