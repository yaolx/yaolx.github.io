export const deviceEnv = navigator.userAgent.match(
  /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
)
  ? 'h5'
  : 'pc'
// 设备参数集合，用策略模式，方便以后取值，维护
export const deviceParams = {
  h5: {
    mdSiderWidth: 150,
    homeSiderWidth: '100%'
  },
  pc: {
    mdSiderWidth: 200,
    homeSiderWidth: 300
  }
}

export const mdSiderWidth = deviceParams[deviceEnv].mdSiderWidth
export const homeSiderWidth = deviceParams[deviceEnv].homeSiderWidth
export const isH5 = deviceEnv === 'h5'
export const AUTHOR = import.meta.env.VITE_AUTHOR

export const SITE_CATEGORY: Site[] = [
  {
    title: '教程',
    id: 'course',
    children: [
      {
        id: 'runoob',
        href: 'https://www.runoob.com/',
        icon: 'https://static.runoob.com/images/favicon.ico',
        title: '菜鸟教程'
      },
      {
        id: 'bilibili',
        href: 'https://www.bilibili.com/',
        icon: 'https://www.bilibili.com/favicon.ico?v=1',
        title: '哔哩哔哩'
      }
    ]
  },
  {
    title: '社区',
    id: 'community',
    children: [
      {
        id: 'juejin',
        href: 'https://juejin.cn/',
        icon: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web//static/favicons/favicon-32x32.png',
        title: '掘金'
      },
      {
        id: 'github',
        href: 'http://github.com/',
        icon: 'https://images.frontendjs.com/github.png?imageView2/2/h/30',
        title: 'github'
      },
      {
        id: 'jianshu',
        href: 'https://www.jianshu.com/',
        icon: 'https://www.jianshu.com/favicon.ico',
        title: '简书'
      }
    ]
  },
  {
    title: 'UI框架',
    id: 'uiLib',
    children: [
      {
        id: 'antd-react',
        href: 'https://ant.design/docs/react/introduce-cn',
        icon: 'https://gw.alipayobjects.com/zos/rmsportal/rlpTLlbMzTNYuZGGCVYM.png',
        title: 'antd-react'
      },
      {
        id: 'antd-mobile',
        href: 'https://mobile.ant.design/zh/',
        icon: 'https://gw.alipayobjects.com/zos/bmw-prod/b874caa9-4458-412a-9ac6-a61486180a62.svg',
        title: 'antd-mobile'
      },
      {
        id: 'antd-vue',
        href: 'https://www.antdv.com/docs/vue/introduce-cn/',
        icon: 'https://qn.antdv.com/favicon.ico',
        title: 'antd-vue'
      },
      {
        id: 'element',
        href: 'https://element.eleme.cn/#/zh-CN/component/installation',
        icon: 'https://element.eleme.cn/favicon.ico',
        title: 'element'
      }
    ]
  },
  {
    title: '框架',
    id: 'frame',
    children: [
      {
        id: 'react',
        href: 'https://react.docschina.org/',
        icon: 'https://react.docschina.org/favicon.ico',
        title: 'react'
      },
      {
        id: 'vue2',
        href: 'https://cn.vuejs.org/',
        icon: 'https://cn.vuejs.org/images/logo.svg',
        title: 'vue2'
      },
      {
        id: 'vue3',
        href: 'https://staging-cn.vuejs.org/',
        icon: 'https://cn.vuejs.org/images/logo.svg',
        title: 'vue3'
      },
      {
        id: 'angular',
        href: 'https://angular.cn/',
        icon: 'https://angular.cn/assets/images/favicons/favicon.ico',
        title: 'angular'
      },
      {
        id: 'uniapp',
        href: 'https://uniapp.dcloud.io/',
        icon: 'https://hx.dcloud.net.cn/static/favicon/favicon.png',
        title: 'uniapp'
      },
      {
        id: 'weixin',
        href: 'https://developers.weixin.qq.com/miniprogram/dev/framework/',
        icon: 'https://res.wx.qq.com/a/wx_fed/assets/res/NTI4MWU5.ico',
        title: '微信小程序'
      },
      {
        id: 'tailwindcss',
        href: 'https://www.tailwindcss.cn/',
        icon: 'https://res.wx.qq.com/a/wx_fed/assets/res/NTI4MWU5.ico',
        title: 'tailwindcss'
      },
      {
        id: 'egg',
        href: 'https://www.eggjs.org/zh-CN/',
        icon: 'https://www.eggjs.org/favicon.png',
        title: 'egg'
      },
      {
        id: 'koa',
        href: 'https://www.koajs.com.cn/#introduction',
        icon: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-39734fbc-b241-4d89-ad87-0befd655e266/916e2040-8b90-43e9-9a13-e5d13caca955.svg',
        title: 'koa'
      },
      {
        id: 'nestjs',
        href: 'https://nestjs.bootcss.com/',
        icon: 'https://nestjs.bootcss.com/img/logo.png',
        title: 'nestjs'
      },
      {
        id: 'nextjs',
        href: 'https://www.nextjs.cn/',
        icon: 'https://www.nextjs.cn/static/favicon/favicon.ico',
        title: 'nextjs'
      },
      {
        id: 'qiankun',
        href: 'https://qiankun.umijs.org/zh',
        icon: 'https://gw.alipayobjects.com/mdn/rms_655822/afts/img/A*4sIUQpcos_gAAAAAAAAAAAAAARQnAQ',
        title: 'qiankun'
      },
      {
        id: 'microApp',
        href: 'https://zeroing.jd.com/micro-app/',
        icon: 'https://zeroing.jd.com/micro-app/favicon.ico',
        title: 'microApp'
      }
    ]
  },
  {
    title: '状态管理库',
    id: 'archive',
    children: [
      {
        id: 'usecontext',
        href: 'https://reactjs.org/docs/context.html',
        icon: 'https://react.docschina.org/favicon.ico',
        title: 'usecontext'
      },
      {
        id: 'redux',
        href: 'https://www.redux.org.cn/',
        icon: 'https://react.docschina.org/favicon.ico',
        title: 'redux'
      },
      {
        id: 'mobx',
        href: 'https://cn.mobx.js.org/',
        icon: 'https://cn.mobx.js.org/mobx.png',
        title: 'mobx'
      },
      {
        id: 'recoil',
        href: 'https://recoiljs.org/docs/introduction/installation',
        icon: 'https://recoiljs.org/img/logo.svg',
        title: 'recoil'
      },
      {
        id: 'pinia',
        href: 'https://pinia.vuejs.org/',
        icon: 'https://pinia.vuejs.org/logo.png',
        title: 'pinia'
      },
      {
        id: 'vuex',
        href: 'https://vuex.vuejs.org/zh/',
        icon: 'https://cn.vuejs.org/images/logo.svg',
        title: 'vuex'
      },
      {
        id: 'react-query',
        href: 'https://react-query-v3.tanstack.com/overview',
        icon: 'https://react-query-v3.tanstack.com/_next/static/images/logo-7a7896631260eebffcb031765854375b.svg',
        title: 'react-query'
      }
    ]
  },
  {
    title: '类库',
    id: 'classLib',
    children: [
      {
        id: 'lodash',
        href: 'https://lodash.com/docs/4.17.15',
        icon: 'https://www.lodashjs.com/img/favicon.ico',
        title: 'lodash'
      },
      {
        id: 'jquery',
        href: 'https://jquery.cuishifeng.cn/',
        icon: 'https://jquery.cuishifeng.cn/images/favicon.ico',
        title: 'jquery'
      },
      {
        id: 'axios',
        href: 'http://www.axios-js.com/',
        icon: 'http://www.axios-js.com/logo.svg',
        title: 'axios'
      },
      {
        id: 'dayjs',
        href: 'https://dayjs.fenxianglu.cn/',
        icon: 'https://dayjs.fenxianglu.cn/assets/favicon.png',
        title: 'dayjs'
      },
      {
        id: 'ahooks',
        href: 'https://ahooks.gitee.io/zh-CN',
        icon: 'https://ahooks.gitee.io/simple-logo.svg',
        title: 'ahooks'
      }
    ]
  },
  {
    title: '构建工具',
    id: 'buildTools',
    children: [
      {
        id: 'npmjs',
        href: 'https://www.npmjs.com/',
        icon: 'https://static.npmjs.com/b0f1a8318363185cc2ea6a40ac23eeb2.png',
        title: 'npmjs'
      },
      {
        id: 'yarn',
        href: 'https://www.yarnpkg.cn/',
        icon: 'https://www.yarnpkg.cn/favicon-32x32.png?v=6143f50112ddba9fdb635b0af2f32aff',
        title: 'yarn'
      },
      {
        id: 'pnpm',
        href: 'https://pnpm.io/zh/',
        icon: 'https://7463-tcb-spf487akrqqqcj95dc4b8-17356e-1305313853.tcb.qcloud.la/pnpm.webp',
        title: 'pnpm'
      },
      {
        id: 'webpack',
        href: 'https://www.webpackjs.com/',
        icon: 'https://www.webpackjs.com/assets/favicon.ico',
        title: 'webpack'
      },
      {
        id: 'vite',
        href: 'https://vitejs.cn/',
        icon: 'https://vitejs.cn/logo.svg',
        title: 'vite'
      },
      {
        id: 'rollup',
        href: 'https://www.rollupjs.com/',
        icon: 'https://www.rollupjs.com/img/favicon.png',
        title: 'rollup'
      },
      {
        id: 'gulp',
        href: 'https://www.gulpjs.com.cn/',
        icon: 'https://www.gulpjs.com.cn/img/favicon.png',
        title: 'gulp'
      }
    ]
  },

  {
    title: '可视化图表库',
    id: 'chartFrame',
    children: [
      {
        id: 'echarts',
        href: 'https://echarts.apache.org/zh/index.html',
        icon: 'https://echarts.apache.org/zh/images/favicon.png',
        title: 'echarts'
      },
      {
        id: 'highcharts',
        href: 'https://www.highcharts.com/docs/index',
        icon: 'https://www.highcharts.com/docs/img/favicon.png',
        title: 'highcharts'
      },
      {
        id: 'antv',
        href: 'https://charts.ant.design/zh',
        icon: 'https://gw.alipayobjects.com/zos/antfincdn/FLrTNDvlna/antv.png',
        title: 'antv'
      },
      {
        id: 'd3',
        href: 'https://d3js.org/',
        icon: 'https://camo.githubusercontent.com/586ccf0aad9684edc821658cee04146cf36d1f1d5ec904bbefd72728909ccb2e/68747470733a2f2f64336a732e6f72672f6c6f676f2e737667',
        title: 'd3'
      },
      {
        id: 'threejs',
        href: 'https://threejs.org/',
        icon: 'https://threejs.org/files/favicon.ico',
        title: 'threejs'
      },
      {
        id: 'fabricjs',
        href: 'http://fabricjs.com/',
        icon: 'http://fabricjs.com/favicon.ico',
        title: 'fabricjs'
      }
    ]
  },
  {
    title: '建站工具',
    id: 'siteTools',
    children: [
      {
        id: 'vitepress',
        href: 'https://vitepress.vuejs.org/guide/what-is-vitepress.html',
        icon: 'http://img.alicdn.com/imgextra/i3/O1CN01Mn65HV1FfSEzR6DKv_!!6000000000514-55-tps-228-59.svg',
        title: 'vitepress'
      },
      {
        id: 'vuepress',
        href: 'https://vuepress.vuejs.org/zh/',
        icon: 'https://cn.vuejs.org/images/logo.svg',
        title: 'vuepress'
      }
    ]
  },
  {
    title: '图标',
    id: 'icon',
    children: [
      {
        id: 'iconfont',
        href: 'https://www.iconfont.cn/',
        icon: 'http://img.alicdn.com/imgextra/i3/O1CN01Mn65HV1FfSEzR6DKv_!!6000000000514-55-tps-228-59.svg',
        title: 'iconfont'
      },
      {
        id: 'fontawesome',
        href: 'http://www.fontawesome.com.cn/',
        icon: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-39734fbc-b241-4d89-ad87-0befd655e266/ecd0c0ab-5bea-4d3f-ba7b-443d451407a3.png',
        title: 'fontawesome'
      }
    ]
  },
  {
    title: '语言',
    id: 'language',
    children: [
      {
        id: 'nodejs',
        href: 'http://nodejs.cn/',
        icon: 'http://img.nodejs.cn/favicon.png',
        title: 'nodejs'
      },
      {
        id: 'typescript',
        href: 'https://www.tslang.cn/',
        icon: 'https://www.tslang.cn/assets/images/icons/favicon.ico',
        title: 'typescript'
      },
      {
        id: 'sass',
        href: 'https://www.sass.hk/',
        icon: 'https://www.sass.hk/favicon.ico',
        title: 'sass'
      },
      {
        id: 'less',
        href: 'https://less.bootcss.com/',
        icon: 'https://less.bootcss.com/public/ico/favicon.ico',
        title: 'less'
      },
      {
        id: 'stylus',
        href: 'https://www.stylus-lang.cn/',
        icon: 'https://www.stylus-lang.cn/favicon.ico',
        title: 'stylus'
      }
    ]
  }
]
