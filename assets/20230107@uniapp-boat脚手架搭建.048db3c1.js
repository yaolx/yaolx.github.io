import"./react.103bb038.js";import{bf as u}from"./index.19a91aa8.js";import"./lodash.97b9911e.js";import"./markmap.86774f21.js";const l={},p="wrapper";function a({components:e,...n}){return u(p,{...l,...n,components:e,mdxType:"MDXLayout"},u("h1",null,u("center",null,"uniapp-boat \u811A\u624B\u67B6\u642D\u5EFA")),u("h2",null,"\u524D\u8A00"),u("p",null,"vite + vue3 + typescript \u7684 uni-app \u811A\u624B\u67B6"),u("p",null,"\u5168\u7AEF\u5F00\u53D1\u811A\u624B\u67B6\u7684\u9009\u578B\uFF0C\u51B3\u5B9A\u4ECE uni-app \u5165\u624B\uFF0C\u800C\u4E14\u7528\u6700\u65B0\u7684\u6784\u5EFA\u5DE5\u5177 vite\uFF0C\u6280\u672F\u6808\u9009\u7528 vue3+typescript \u8FDB\u884C\u5F00\u53D1\u3002"),u("h2",null,"\u5B9E\u73B0\u529F\u80FD"),u("ul",null,u("li",{parentName:"ul"},"\u4F7F\u7528 vue3 \u5F00\u53D1"),u("li",{parentName:"ul"},"\u6784\u5EFA\u5DE5\u5177\uFF1A",u("inlineCode",{parentName:"li"},"vite")),u("li",{parentName:"ul"},"\u96C6\u6210 ",u("inlineCode",{parentName:"li"},"typescript")),u("li",{parentName:"ul"},"\u96C6\u6210 eslint + prettier + husky + lint-staged \u6765\u683C\u5F0F\u5316\u548C\u89C4\u8303\u4EE3\u7801"),u("li",{parentName:"ul"},"\u591A\u73AF\u5883\u914D\u7F6E"),u("li",{parentName:"ul"},"\u4F7F\u7528 ",u("inlineCode",{parentName:"li"},"pinia")),u("li",{parentName:"ul"},"\u5C01\u88C5 ",u("inlineCode",{parentName:"li"},"uni-request")," \u8BF7\u6C42"),u("li",{parentName:"ul"},"\u96C6\u6210 ",u("inlineCode",{parentName:"li"},"json-server")," \u505A\u6A21\u62DF\u5F00\u53D1"),u("li",{parentName:"ul"},"ui \u7EC4\u4EF6\u4F7F\u7528",u("inlineCode",{parentName:"li"},"uni-ui"))),u("h2",null,"\u751F\u6210\u57FA\u7840\u811A\u624B\u67B6"),u("pre",null,u("code",{parentName:"pre"},`npx degit dcloudio/uni-preset-vue#vite-ts uniapp-boat

\u5982\u679C\u4E0D\u80FD\u4E0B\u8F7D\uFF0C\u53EF\u4ECE [gitee](https://gitee.com/dcloud/uni-preset-vue/repository/archive/vite-ts.zip) \u4E0A\u4E0B\u8F7D
`)),u("h2",null,"\u7B80\u5355\u914D\u7F6E"),u("ol",null,u("li",{parentName:"ol"},u("p",{parentName:"li"},"\u89C4\u8303\u76EE\u5F55")),u("li",{parentName:"ol"},u("p",{parentName:"li"},`\u914D\u7F6E\u522B\u540D@ \u8868\u793A src \u76EE\u5F55
`,u("inlineCode",{parentName:"p"},"vite.config.js"),"\u6DFB\u52A0 alias"),u("pre",{parentName:"li"},u("code",{parentName:"pre",className:"language-js"},`
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }

`)),u("p",{parentName:"li"},u("inlineCode",{parentName:"p"},"tsconfig.json"),"\u6DFB\u52A0\u8DEF\u5F84\u914D\u7F6E"),u("pre",{parentName:"li"},u("code",{parentName:"pre",className:"language-json"},`{
  "baseUrl": "./",
  "paths": {
    "@/*": ["src/*"]
  }
}
`))),u("li",{parentName:"ol"},u("p",{parentName:"li"},"\u914D\u7F6E mock \u73AF\u5883\uFF0C\u642D\u914D json-server \u670D\u52A1"))),u("h2",null,"\u96C6\u6210 eslint"),u("p",null,"\u5B89\u88C5",u("inlineCode",{parentName:"p"},"eslint")),u("p",null,u("inlineCode",{parentName:"p"},"pnpm add eslint -D")),u("p",null,"\u914D\u7F6E",u("inlineCode",{parentName:"p"},".eslintrc.js")),u("h2",null,"\u96C6\u6210 prettier"),u("p",null,"\u5B89\u88C5",u("inlineCode",{parentName:"p"},"prettier")),u("p",null,u("inlineCode",{parentName:"p"},"pnpm add prettier -D")),u("p",null,"\u6DFB\u52A0",u("inlineCode",{parentName:"p"},".prettierrrc")),u("h2",null,"\u591A\u73AF\u5883\u914D\u7F6E"),u("pre",null,u("code",{parentName:"pre",className:"language-js"},`envDir: path.resolve(__dirname, 'config/env')
`)),u("h2",null,"\u96C6\u6210 pinia"),u("p",null,u("inlineCode",{parentName:"p"},"pnpm add pinia pinia-plugin-persistedstate")),u("p",null,"\u4F7F\u7528",u("inlineCode",{parentName:"p"},"pinia-plugin-persistedstate"),"\u505A\u6301\u4E45\u5316"),u("h2",null,"\u5C01\u88C5 uni-request"),u("ul",null,u("li",{parentName:"ul"},"\u7EDF\u4E00\u914D\u7F6E\u63A5\u53E3\u5730\u5740"),u("li",{parentName:"ul"},"\u7EDF\u4E00\u8BBE\u7F6E\u8D85\u65F6\u65F6\u95F4/\u62A5\u6587\u683C\u5F0F/\u62A5\u6587\u52A0\u5BC6"),u("li",{parentName:"ul"},"\u7EDF\u4E00\u8EAB\u4EFD\u8BA4\u8BC1"),u("li",{parentName:"ul"},"\u7EDF\u4E00\u5904\u7406\u767B\u5F55\u8D85\u65F6/\u63A5\u53E3\u5F02\u5E38\u63D0\u793A"),u("li",{parentName:"ul"},"\u7EDF\u4E00\u8FD4\u56DE\u63A5\u53E3\u683C\u5F0F")),u("h2",null,"\u96C6\u6210 json-server"),u("ul",null,u("li",{parentName:"ul"},"crud \u6A21\u62DF mock \u6570\u636E"),u("li",{parentName:"ul"},"\u65B9\u4FBF\u670D\u52A1\u7AEF\u63A5\u53E3\u8FD8\u6CA1\u7ED9\u51FA\uFF0C\u524D\u7AEF\u5148\u884C\u5F00\u53D1")),u("h2",null,"\u96C6\u6210 ",u("a",{parentName:"h2",href:"https://uniapp.dcloud.net.cn/component/uniui/uni-ui.html"},"uni-ui")," \u7EC4\u4EF6"),u("p",null,"\u914D\u7F6E easycom"),u("pre",null,u("code",{parentName:"pre",className:"language-json"},`
"easycom": {
        "autoscan": true,
        "custom": {
            // uni-ui \u89C4\u5219\u5982\u4E0B\u914D\u7F6E
            "^uni-(.*)": "@dcloudio/uni-ui/lib/uni-$1/uni-$1.vue"
        }
    },
`)),u("h2",null,"\u652F\u6301 typescript"),u("p",null,u("inlineCode",{parentName:"p"},"uni-ui"),`\u652F\u6301 ts \u7684\u914D\u7F6E\uFF1A
\u5B89\u88C5`,u("inlineCode",{parentName:"p"},"@uni-helper/uni-app-types"),"\uFF0C\u652F\u6301",u("inlineCode",{parentName:"p"},"uni-ui"),"ts\uFF0C\u5426\u5219\u4F1A\u9ED8\u8BA4\u5339\u914D vue3 \u4E0A\u6807\u7B7E\u5143\u7D20\u7684 ts"),u("p",null,"\u5728\u518D tsconfig.json \u4E2D\u589E\u52A0\u4EE5\u4E0B\u914D\u7F6E"),u("pre",null,u("code",{parentName:"pre",className:"language-json"},`
"compilerOptions": {
    "types": ["@dcloudio/types", "@uni-helper/uni-app-types"],
  },
  "vueCompilerOptions": {
    "nativeTags": ["block", "component", "template", "slot"]
  }
`)),u("h2",null,"\u96C6\u6210 actions\u3001pages \u505A\u81EA\u52A8\u53D1\u5E03"),u("p",null,"\u8BBF\u95EE\u7EBF\u4E0A\u5730\u5740",u("a",{parentName:"p",href:"https://yaolx.github.io/uniapp-boat/"},"uniapp-boat")),u("h2",null,"\u8FD0\u884C"),u("ol",null,u("li",{parentName:"ol"},"\u8FD0\u884C mock \u73AF\u5883")),u("p",null,u("inlineCode",{parentName:"p"},"pnpm run dev:mock")),u("ol",{start:2},u("li",{parentName:"ol"},"\u8FD0\u884C h5 \u73AF\u5883")),u("p",null,u("inlineCode",{parentName:"p"},"pnpm run dev:h5")),u("ol",{start:3},u("li",{parentName:"ol"},"\u7F16\u8BD1\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u73AF\u5883")),u("p",null,u("inlineCode",{parentName:"p"},"pnpm run dev:mp-weixin")),u("p",null,"\u7528\u5FAE\u4FE1\u5F00\u53D1\u8005\u5DE5\u5177\u6253\u5F00",u("inlineCode",{parentName:"p"},"dist/dev/mp-weixin"),"\u6587\u4EF6\u5939\uFF0C\u7F16\u8BD1\u540E\u5373\u53EF\u67E5\u770B\u6548\u679C"),u("h2",null,"\u603B\u7ED3"),u("p",null,"\u811A\u624B\u67B6\u642D\u5EFA\u5B8C\u6BD5"))}a.isMDXComponent=!0;export{a as default};
