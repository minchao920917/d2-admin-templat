<template>
  <d2-container type="ghost">
    <vue2-org-tree :data="data" />

  </d2-container>
</template>

<script>
import menu from '@/menu/modules/demo-components'
export default {
  data() {
    return {
      menu,
      banner: {
        title: 'COMPONENTS',
        subTitle: 'D2Admin 为你提供了一些上手即用的组件'
      },
      // 定义数据
      data: {
        label: '江苏XX',
        value: '-1',
        children: [
          {
            value: 'reqjfxqfzr',
            label: '需求室负责人',
            children: [
              {
                label: '任通',
                value: '1000035939'
              },
              {
                label: '林萍',
                value: '23000068'
              },
              {
                label: '王庆安',
                value: '23000079'
              }
            ]
          },
          {
            value: 'req_fzr_kf',
            label: '开发室负责人',
            children: [
              {
                label: '任通',
                value: '1000035939'
              },
              {
                label: '林萍',
                value: '23000068'
              },
              {
                label: '王庆安',
                value: '23000079'
              }
            ]
          },
          {
            value: 'req_fzr_dsj',
            label: '大数据室负责人',
            children: [
              {
                label: '任通',
                value: '1000035939'
              },
              {
                label: '林萍',
                value: '23000068'
              },
              {
                label: '王庆安',
                value: '23000079'
              }
            ]
          },
          {
            value: 'req_fzr_bas',
            label: '经分室负责人',
            children: [
              {
                label: '任通',
                value: '1000035939'
              },
              {
                label: '林萍',
                value: '23000068'
              },
              {
                label: '王庆安',
                value: '23000079'
              }
            ]
          },
          {
            value: 'reqownerinfo',
            label: '信息化室负责人',
            children: [
              {
                label: '任通',
                value: '1000035939'
              },
              {
                label: '林萍',
                value: '23000068'
              },
              {
                label: '王庆安',
                value: '23000079'
              }
            ]
          },
          {
            value: 'reqownerinfo-aq',
            label: '安全室负责人',
            children: [
              {
                label: '任通',
                value: '1000035939'
              },
              {
                label: '林萍',
                value: '23000068'
              },
              {
                label: '王庆安',
                value: '23000079'
              }
            ]
          }
        ]

      }

    }
  }
}
</script>
