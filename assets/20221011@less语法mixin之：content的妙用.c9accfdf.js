import"./react.96fb3fa0.js";import{X as u}from"./index.884e5560.js";import"./lodash.2667a9b6.js";import"./markmap.f7526f2f.js";const n={},C="wrapper";function E({components:F,...e}){return u(C,{...n,...e,components:F,mdxType:"MDXLayout"},u("h1",null,u("center",null,"less \u8BED\u6CD5 mixin \u4E4B\uFF1A@content \u7684\u5999\u7528")),u("h2",null,"\u80CC\u666F"),u("p",null,"\u5728\u5927\u90E8\u5206\u5DE5\u7A0B\u4E2D\uFF0C\u6211\u4EEC\u90FD\u7528\u5230\u4E86 less\uFF0C\u4E3A\u4E86\u591A\u7AEF\u6837\u5F0F\u7684\u9002\u914D\uFF0C\u6211\u4EEC\u901A\u5E38\u7528\u5A92\u4F53\u67E5\u8BE2@media \u505A\u4E0D\u540C\u5C3A\u5BF8\u7684\u54CD\u5E94\u5F0F\u5E03\u5C40\u3002"),u("p",null,"\u9488\u5BF9\u591A\u7AEF\u6837\u5F0F\u9002\u914D\u65B9\u6848\uFF0C\u4E00\u822C\u90FD\u91C7\u7528 flex + media\u3002"),u("h2",null,"@media \u7684 minxin \u5C01\u88C5"),u("p",null,"\u4E3A\u4E86\u907F\u514D\u5728\u5404\u4E2A less \u4E2D\u5230\u5904\u5199 media\uFF0C\u901A\u8FC7@content \u5BF9@media \u8FDB\u884C\u5C01\u88C5\uFF0C\u6700\u7EC8 less \u7684\u4E66\u5199\u8DDF js \u65B9\u6CD5\u7C7B\u4F3C\uFF0C\u53EA\u8981\u4F20\u5165\u9700\u8981\u9002\u914D\u7684\u6837\u5F0F\u5373\u53EF\u3002"),u("pre",null,u("code",{parentName:"pre",className:"language-code"},`
media\u65B9\u6CD5\u5C01\u88C5\uFF1A\u4F20\u5165width\uFF0C\u53EF\u9002\u914D\u4E0D\u540C\u5C3A\u5BF8\u7684\u6837\u5F0F
.mediaScreen(@content, @width: 1000) {
  @media only screen and (min-width: ~'@{width}px') {
    @content();
  }
}

\u8C03\u7528\uFF1A
.mediaScreen({
  .empty {
    img {
      height: 100px;
    }
  }
});


\u7F16\u8BD1\u540E\uFF1A
@media only screen and (min-width: 1000px) {
  .empty {
    img {
      height: 100px;
    }
  }
}
`)),u("p",null,"\u76F8\u5173\u77E5\u8BC6\u70B9\uFF1A"),u("ol",null,u("li",{parentName:"ol"},"@media\uFF1A\u5A92\u4F53\u67E5\u8BE2"),u("li",{parentName:"ol"},"@content\uFF1A\u5C06\u5185\u5BB9\u533A\u4EE3\u7801\u4F20\u5165"),u("li",{parentName:"ol"},"~\uFF1A\u5BF9 less \u65E0\u6CD5\u8BC6\u522B\u7684\u8BED\u6CD5\u4E0D\u8FDB\u884C\u7F16\u8BD1")),u("h2",null,"\u603B\u7ED3"),u("ol",null,u("li",{parentName:"ol"},"\u901A\u8FC7 minxin \u505A\u5230\u4E86\u6837\u5F0F\u65B9\u6CD5\u5C01\u88C5\uFF0C\u4FBF\u4E8E\u7EF4\u62A4"),u("li",{parentName:"ol"},"\u65B9\u4FBF\u7EDF\u4E00\u7BA1\u7406\uFF0C\u505A\u4E0D\u540C\u5206\u8FA8\u7387\u7684\u54CD\u5E94\u5F0F\u5F00\u53D1")))}E.isMDXComponent=!0;export{E as default};
