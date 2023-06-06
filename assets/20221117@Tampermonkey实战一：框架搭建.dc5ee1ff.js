import"./react.207e1340.js";import{X as u}from"./index.7fa81305.js";import"./lodash.b2cd96a7.js";import"./markmap.34840b8b.js";const o={},t="wrapper";function a({components:e,...n}){return u(t,{...o,...n,components:e,mdxType:"MDXLayout"},u("h1",null,u("center",null,"Tampermonkey \u5B9E\u6218\u4E00\uFF1A\u6846\u67B6\u642D\u5EFA")),u("h2",null,"\u524D\u8A00"),u("p",null,"\u524D\u7AEF\u5DE5\u7A0B\u5E08\uFF0C\u4E0D\u4F1A\u70B9\u9ED1\u8272\u79D1\u6280\u600E\u4E48\u884C\uFF1F\u6BD4\u5982\u770B\u7535\u5F71\uFF0C\u6709\u5E7F\u544A\uFF1B\u6BD4\u5982\u60F3\u590D\u5236\u6587\u6863\uFF0C\u9875\u9762\u88AB\u7981\u7528\uFF0C\u590D\u5236\u4E0D\u4E86\uFF0C\u7B49\u7B49"),u("p",null,"\u8FD9\u65F6\u5019\uFF0C\u6CB9\u7334\u811A\u672C\u5C31\u6D3E\u4E0A\u7528\u573A\u4E86\u3002"),u("h2",null,"\u4EC0\u4E48\u662F\u6CB9\u7334\u811A\u672C"),u("p",null,u("inlineCode",{parentName:"p"},"Tampermonkey")," \u662F\u4E00\u6B3E\u514D\u8D39\u7684\u6D4F\u89C8\u5668\u6269\u5C55\u548C\u6700\u4E3A\u6D41\u884C\u7684\u7528\u6237\u811A\u672C\u7BA1\u7406\u5668\uFF0C\u5B83\u9002\u7528\u4E8E Chrome, Microsoft Edge, Safari, Opera Next, \u548C Firefox\u3002"),u("p",null,"\u53EF\u4EE5\u8BF4\u6CB9\u7334\u811A\u672C\u662F\u6D4F\u89C8\u5668\u7684\u8F85\u52A9\u795E\u5947\uFF01"),u("h2",null,"\u5B89\u88C5",u("inlineCode",{parentName:"h2"},"Tampermonkey")),u("p",null,"\u7FFB\u5899\uFF0C\u5728 chrome \u5E94\u7528\u5546\u5E97\u4E2D\u641C",u("inlineCode",{parentName:"p"},"Tampermonkey"),"\uFF0C\u70B9\u51FB\u5B89\u88C5\u5373\u53EF"),u("h2",null,"\u6784\u5EFA react \u811A\u624B\u67B6"),u("p",null,u("inlineCode",{parentName:"p"},"npx create-react-app my-app --template react-boat")),u("h2",null,"\u5B89\u88C5\u4F9D\u8D56",u("inlineCode",{parentName:"h2"},"vite-plugin-monkey")),u("p",null,u("inlineCode",{parentName:"p"},"yarn add vite-plugin-monkey")),u("h2",null,"\u589E\u52A0 monkey \u63D2\u4EF6"),u("pre",null,u("code",{parentName:"pre",className:"language-js"},`monkey({
  entry: 'src/main.tsx',
  userscript: {
    icon: 'https://vitejs.dev/logo.svg',
    namespace: 'yaolx/vite-monkey',
    match: ['https://www.google.com/']
  },
  build: {
    externalGlobals: {
      react: cdn.jsdelivr('React', 'umd/react.production.min.js'),
      'react-dom': cdn.jsdelivr('ReactDOM', 'umd/react-dom.production.min.js')
    }
  }
})
`)),u("p",null,"\u8BBE\u7F6E entry \u5165\u53E3\u4E3A",u("inlineCode",{parentName:"p"},"src/main.tsx")),u("p",null,"userscript \u4E2D\uFF1A"),u("p",null,"match\uFF1A\u6839\u636E\u5339\u914D\u7684\u57DF\u540D\uFF0C\u6DFB\u52A0\u811A\u672C"),u("h2",null,"\u8C03\u6574 main.tsx"),u("p",null,"\u5C06\u4E4B\u524D\u7528 app \u7684\u8282\u70B9\u6539\u6210 div\uFF0C\u5E76 append \u5230 body \u4E2D\uFF0C\u5E76\u8BBE\u7F6E\u5B83\u7684 class \u4E3A",u("inlineCode",{parentName:"p"},"monkey")),u("h2",null,"\u8BBE\u7F6E Tampermonkey \u7684 ts"),u("p",null,"\u5728 vite-env.d.ts \u4E2D\u52A0\u5165"),u("pre",null,u("code",{parentName:"pre",className:"language-js"},`/**
 * alias of vite-plugin-monkey/dist/client
 */
declare module 'monkey' {
  export * from 'vite-plugin-monkey/dist/client'
}

// if set mountGmApi=true
// type MonkeyWindow = import('vite-plugin-monkey/dist/client').MonkeyWindow;
// declare const unsafeWindow: MonkeyWindow['unsafeWindow'];
// declare const GM_addStyle: MonkeyWindow['GM_addStyle'];
// declare const GM_addElement: MonkeyWindow['GM_addElement'];
// declare const GM_deleteValue: MonkeyWindow['GM_deleteValue'];
// declare const GM_listValues: MonkeyWindow['GM_listValues'];
// declare const GM_addValueChangeListener: MonkeyWindow['GM_addValueChangeListener'];
// declare const GM_removeValueChangeListener: MonkeyWindow['GM_removeValueChangeListener'];
// declare const GM_setValue: MonkeyWindow['GM_setValue'];
// declare const GM_getValue: MonkeyWindow['GM_getValue'];
// declare const GM_log: MonkeyWindow['GM_log'];
// declare const GM_getResourceText: MonkeyWindow['GM_getResourceText'];
// declare const GM_getResourceURL: MonkeyWindow['GM_getResourceURL'];
// declare const GM_registerMenuCommand: MonkeyWindow['GM_registerMenuCommand'];
// declare const GM_unregisterMenuCommand: MonkeyWindow['GM_unregisterMenuCommand'];
// declare const GM_openInTab: MonkeyWindow['GM_openInTab'];
// declare const GM_xmlhttpRequest: MonkeyWindow['GM_xmlhttpRequest'];
// declare const GM_download: MonkeyWindow['GM_download'];
// declare const GM_getTab: MonkeyWindow['GM_getTab'];
// declare const GM_saveTab: MonkeyWindow['GM_saveTab'];
// declare const GM_getTabs: MonkeyWindow['GM_getTabs'];
// declare const GM_notification: MonkeyWindow['GM_notification'];
// declare const GM_setClipboard: MonkeyWindow['GM_setClipboard'];
// declare const GM_info: MonkeyWindow['GM_info'];
// declare const GM_cookie: MonkeyWindow['GM_cookie'];


`)),u("h2",null,"\u542F\u52A8\u670D\u52A1"),u("p",null,"pnpm run dev"),u("p",null,"\u5C31\u53EF\u4EE5\u8FDB\u884C\u5F00\u53D1\u6211\u4EEC\u81EA\u5DF1\u7684\u811A\u672C\u4E86"))}a.isMDXComponent=!0;export{a as default};
