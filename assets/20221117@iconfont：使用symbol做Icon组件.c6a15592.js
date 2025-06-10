import"./react.103bb038.js";import{bf as u}from"./index.19a91aa8.js";import"./lodash.97b9911e.js";import"./markmap.86774f21.js";const a={},n="wrapper";function t({components:e,...F}){return u(n,{...a,...F,components:e,mdxType:"MDXLayout"},u("h1",null,u("center",null,"iconfont\uFF1A\u4F7F\u7528 symbol \u505A Icon \u7EC4\u4EF6")),u("h2",null,"\u80CC\u666F"),u("p",null,`\u4F7F\u7528 symbol \u6765\u505A iconfont \u56FE\u6807\uFF0C\u76F8\u6BD4\u4F20\u7EDF\u7528 png\uFF0C\u6027\u80FD\u66F4\u4F18\u3001\u4E5F\u66F4\u65B9\u4FBF\uFF0C\u6613\u4E8E\u7BA1\u7406\uFF0C\u4E5F\u51CF\u5C11\u4E86\u8BF7\u6C42\u6570\uFF0C\u6709\u6548\u51CF\u5C11\u8BF7\u6C42\u4F53\u79EF\u3002
\u53EF\u4EE5\u590D\u7528\u5728\u5F88\u591A\u5730\u65B9\uFF0C\u51CF\u5C11\u4E8C\u6B21\u5F00\u53D1\u9648\u672C\u3002`),u("h2",null,"\u4F7F\u7528",u("inlineCode",{parentName:"h2"},"Symbol"),"\u505A\u7EC4\u4EF6\u5316 Icon"),u("ol",null,u("li",{parentName:"ol"},u("p",{parentName:"li"},"\u52A8\u6001\u52A0\u8F7D iconfont.js"),u("pre",{parentName:"li"},u("code",{parentName:"pre",className:"language-js"},`const fetchScript = new FetchScript({
  v: config.fontsVersion,
  urls: [\`\${CDN_HOST}/iconfont/iconfont.js\`]
})
`)),u("p",{parentName:"li"},"\u6839\u636E\u914D\u7F6E\uFF0C\u52A8\u6001\u5F02\u6B65\u52A0\u8F7D iconfont\uFF0C\u5E76\u8BBE\u7F6E\u7248\u672C\u53F7\uFF0C\u653E\u5230 cdn \u4E0A")),u("li",{parentName:"ol"},u("p",{parentName:"li"},"\u8BBE\u7F6E\u901A\u7528 css"),u("pre",{parentName:"li"},u("code",{parentName:"pre",className:"language-css"},`.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
`))),u("li",{parentName:"ol"},u("p",{parentName:"li"},"\u81EA\u5B9A\u4E49 react Icon \u7EC4\u4EF6"),u("pre",{parentName:"li"},u("code",{parentName:"pre",className:"language-js"},`import React from 'react'
import classNames from 'classnames'
import styles from './styles.css'
export default (props) => {
  let { type, className, ...other } = props
  return (
    <svg className={classNames(styles.icon, className)} {...other} aria-hidden="true">
      <use xlinkHref={\`#icon\${type}\`}></use>
    </svg>
  )
}
`))),u("li",{parentName:"ol"},u("p",{parentName:"li"},"\u8C03\u7528"),u("pre",{parentName:"li"},u("code",{parentName:"pre",className:"language-js"},`<Icon type="filter-line" className={styles['filter-line']} />
`))),u("li",{parentName:"ol"},u("p",{parentName:"li"},"\u65B0\u589E\u5B57\u4F53\u56FE\u6807"),u("p",{parentName:"li"},"\u53EA\u9700\u5728",u("a",{parentName:"p",href:"https://www.iconfont.cn/"},"iconfont"),"\u4E0A\uFF0C\u4E0A\u4F20\u76F8\u5E94\u7684\u56FE\u6807\uFF0C\u7136\u540E\u4E0B\u8F7D",u("inlineCode",{parentName:"p"},"Symbol"),"\u4EE3\u7801\uFF0C\u653E\u5230 cdn \u4E0A")),u("li",{parentName:"ol"},u("p",{parentName:"li"},"\u5BF9\u6BD4 ",u("inlineCode",{parentName:"p"},"WebFont")))),u("ul",null,u("li",{parentName:"ul"},u("p",{parentName:"li"},u("inlineCode",{parentName:"p"},"WebFont")," \u5982\u679C\u628A woff \u683C\u5F0F\u7684\u6587\u4EF6\u653E\u5230 cdn \u4E0A\uFF0C\u4E0D\u597D\u63A7\u5236\u7F13\u5B58\u7684\u66F4\u65B0\uFF0C\u4E0D\u4EC5\u8981\u4E0A\u4F20 fonts \u5B57\u4F53\u6587\u4EF6\uFF0C\u8FD8\u5F97\u4FEE\u6539\u5F15\u5165 font-face \u4E2D url \u7684\u7248\u672C\u53F7\uFF0C\u624D\u4F1A\u66F4\u65B0\uFF0C\u6BD4\u8F83\u9EBB\u70E6")),u("li",{parentName:"ul"},u("p",{parentName:"li"},"Symbol \u652F\u6301\u591A\u8272\u56FE\u6807")),u("li",{parentName:"ul"},u("p",{parentName:"li"},"\u5B8C\u5168\u79BB\u7EBF\u5316\u4F7F\u7528\uFF0C\u4E0D\u9700\u8981\u4ECE CDN \u4E0B\u8F7D\u5B57\u4F53\u6587\u4EF6\uFF0C\u56FE\u6807\u4E0D\u4F1A\u56E0\u4E3A\u7F51\u7EDC\u95EE\u9898\u5448\u73B0\u65B9\u5757\uFF0C\u4E5F\u65E0\u9700\u5B57\u4F53\u6587\u4EF6\u672C\u5730\u90E8\u7F72")),u("li",{parentName:"ul"},u("p",{parentName:"li"},"\u5728\u4F4E\u7AEF\u8BBE\u5907\u4E0A SVG \u6709\u66F4\u597D\u7684\u6E05\u6670\u5EA6")),u("li",{parentName:"ul"},u("p",{parentName:"li"},"\u652F\u6301\u52A8\u753B"))))}t.isMDXComponent=!0;export{t as default};
