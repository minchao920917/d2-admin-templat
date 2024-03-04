<template>
  <d2-container type="ghost">
    <div class="component-wrapper">
      <zh-map />
    </div>
    <div class="component-wrapper">
       <mc-map />
    </div>
  </d2-container>
</template>

<script>
import zhMap from './components/zhMap/index.vue'
import mcMap from './components/mcMap/index.vue'
export default {
  components: {
    zhMap,
    mcMap
  },
  data () {
    return {

    }
  },
  watch: {
  },
  methods: {
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
