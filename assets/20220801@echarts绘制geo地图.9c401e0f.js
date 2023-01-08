import"./react.96fb3fa0.js";import{X as u}from"./index.0e2b126b.js";import"./lodash.2667a9b6.js";import"./markmap.f7526f2f.js";const o={},t="wrapper";function E({components:e,...a}){return u(t,{...o,...a,components:e,mdxType:"MDXLayout"},u("h1",null,u("center",null,"echarts \u7ED8\u5236 geo \u5730\u56FE")),u("h2",null,"\u80CC\u666F"),u("p",null,"\u9700\u8981\u5C06 2 \u4E2A\u5730\u7EA7\u5E02\uFF0C\u5408\u5E76\u6210\u4E00\u4E2A\u5E02\u5C40\u673A\u5173\uFF0C\u9700\u8981\u5408\u5E76 2 \u4E2A\u5730\u7EA7\u5E02\u7684\u5730\u56FE\u5750\u6807\uFF0C\u5E76\u62B9\u9664\u91CD\u53E0\u90E8\u5206\u7684\u8F68\u8FF9"),u("h2",null,"echarts \u5982\u4F55\u7ED8\u5236 geo \u5730\u56FE"),u("ol",null,u("li",{parentName:"ol"},u("p",{parentName:"li"},"\u8BBF\u95EE\u963F\u91CC\u4E91\u7684",u("a",{parentName:"p",href:"http://datav.aliyun.com/portal/school/atlas/area_selector"},"\u6570\u636E\u53EF\u89C6\u5316\u5E73\u53F0"),"\uFF0C\u4E0B\u8F7D geojson \u6570\u636E")),u("li",{parentName:"ol"},u("p",{parentName:"li"},`\u4EE5\u4E0B\u8F7D\u90F4\u5DDE\u5E02\u6570\u636E\u4E3A\u4F8B
`,u("img",{parentName:"p",src:"https://cdn.jsdelivr.net/gh/yaolx/picBed@main/blogs/pics/20220906214631.png",alt:"20220906214631"})),u("p",{parentName:"li"},"\u5728\u5DE6\u4FA7\u70B9\u51FB\u6240\u9009\u62E9\u7684\u533A\u57DF\uFF0C\u52FE\u9009\u662F\u5426\u5305\u542B\u5B50\u533A\u57DF\uFF08\u662F\u5426\u663E\u793A\u5404\u4E2A\u5E02\u533A\u57DF\uFF09\uFF0C\u7136\u540E\u76F4\u63A5\u4E0B\u8F7D\u5373\u53EF")),u("li",{parentName:"ol"},u("p",{parentName:"li"},"\u4EE3\u7801\u4E2D\u5F15\u5165"))),u("pre",null,u("code",{parentName:"pre",className:"language-tsx"},`import React from 'react'
import ReactEChartsCore from 'echarts-for-react/lib/core'
import echarts from '@/util/echarts-loader'
import { echartsConfigForMap } from '@/util/echarts'
const geoJson = require('@/asset/json/chenzhoushi.json')
const data = [
  { name: '\u5B89\u4EC1\u53BF', value: 1, adcode: 431028 },
  { name: '\u6C38\u5174\u53BF', value: 5, adcode: 431023 },
  { name: '\u8D44\u5174\u5E02', value: 11, adcode: 431081 },
  { name: '\u6842\u4E1C\u53BF', value: 5, adcode: 431027 },
  { name: '\u6C5D\u57CE\u53BF', value: 44, adcode: 431026 },
  { name: '\u6842\u9633\u53BF', value: 17, adcode: 431021 },
  { name: '\u5609\u79BE\u53BF', value: 25, adcode: 431024 },
  { name: '\u4E34\u6B66\u53BF', value: 52, adcode: 431025 },
  { name: '\u5B9C\u7AE0\u53BF', value: 77, adcode: 431022 },
  { name: '\u5317\u6E56\u533A', value: 33, adcode: 431002 },
  { name: '\u82CF\u4ED9\u533A', value: 22, adcode: 431003 },
  { name: '\u5E02\u5C40\u673A\u5173', value: 77, adcode: 431099 }
]
export default function mapChart(): JSX.Element {
  echarts.registerMap('chenzhou', geoJson)
  return <ReactEChartsCore echarts={echarts} option={echartsConfigForMap(data)} />
}
`)),u("ol",{start:4},u("li",{parentName:"ol"},`\u5448\u73B0\u7ED3\u679C
`,u("img",{parentName:"li",src:"https://cdn.jsdelivr.net/gh/yaolx/picBed@main/blogs/pics/20220906214722.png",alt:"20220906214722"}))),u("h2",null,"\u7ED8\u5236\u5408\u5E76\u5730\u56FE"),u("p",null,`\u524D\u9762\u53EA\u662F\u5C06\u5DF2\u7ECF\u73B0\u6210\u7684 geojson \u6570\u636E\u7ED8\u5236\u51FA\u6765
\u5982\u679C\u9047\u5230\u4E00\u4E2A\u9700\u6C42\uFF0C\u9700\u8981\u5C06\u5730\u56FE\u5408\u5E76\uFF0C\u8BE5\u5982\u4F55\u5904\u7406\u5462\uFF1F
\u4F8B\u5982\uFF0C\u9700\u8981\u5C06\u5317\u6E56\u533A\u548C\u82CF\u4ED9\u533A\u5408\u5E76\u6210\u5E02\u5C40\u673A\u5173\uFF0Cgeojson \u6570\u636E\u8981\u5982\u4F55\u5904\u7406\u5462\uFF1F`),u("h2",null,"\u89E3\u51B3\u65B9\u6848"),u("ol",null,u("li",{parentName:"ol"},"\u8BBF\u95EE\u963F\u91CC\u4E91\u7684",u("a",{parentName:"li",href:"http://datav.aliyun.com/portal/school/atlas/area_selector"},"\u6570\u636E\u53EF\u89C6\u5316\u5E73\u53F0"),"\uFF0C\u4E0B\u8F7D\u90F4\u5DDE\u5E02\u7684\u6240\u6709\u53BF\u7EA7\u5E02 geojson"),u("li",{parentName:"ol"},"\u8BBF\u95EE",u("a",{parentName:"li",href:"http://geojson.io/"},"http://geojson.io/"),`
\u5C06\u82CF\u4ED9\u533A\u548C\u6E56\u5317\u533A\u5408\u5E76\uFF0C\u5E76\u5BFC\u51FA new.geojson`),u("li",{parentName:"ol"},`\u7528 mapshaper \u5DE5\u5177\u6765\u5904\u7406\u5730\u56FE\u5408\u5E76\uFF0C\u5E76\u53BB\u9664\u91CD\u53E0\u7684\u70B9
npm install -g mapshaper
\u53EF\u4EE5\u53C2\u8003`,u("a",{parentName:"li",href:"https://echarts-maps.github.io/echarts-geomapping-book-zh/howtos/split-and-merge/"},"\u5730\u56FE\u5DE5\u5320\u79D8\u7C4D")),u("li",{parentName:"ol"},`\u6267\u884C\u547D\u4EE4
mapshaper new.geojson -dissolve2 -o result.geojson
\u5B8C\u6210`),u("li",{parentName:"ol"},"\u518D\u6B21\u7528",u("a",{parentName:"li",href:"http://geojson.io/"},"http://geojson.io/")),u("li",{parentName:"ol"},`\u628A\u90F4\u5DDE\u5E02\u4E0B\u7684\u5730\u7EA7\u5E02\uFF08\u5254\u9664\u5317\u6E56\u533A\u548C\u82CF\u4ED9\u533A\uFF09\uFF0Cresult.geojson \u5408\u5E76
\u6700\u540E\u5BFC\u51FA`),u("li",{parentName:"ol"},`\u5448\u73B0\u7ED3\u679C
`,u("img",{parentName:"li",src:"https://cdn.jsdelivr.net/gh/yaolx/picBed@main/blogs/pics/20220906214755.png",alt:"20220906214755"}))))}E.isMDXComponent=!0;export{E as default};
