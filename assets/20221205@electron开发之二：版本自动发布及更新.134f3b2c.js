import"./react-vendor.a6bb11e6.js";import{J as u}from"./vendor.2ee69e25.js";import"./__commonjsHelpers__.be7665b8.js";import"./lodash.95eb4f05.js";const E={},F="wrapper";function l({components:e,...n}){return u(F,{...E,...n,components:e,mdxType:"MDXLayout"},u("h1",null,u("center",null,"electron \u5F00\u53D1\u4E4B\u4E8C\uFF1A\u7248\u672C\u81EA\u52A8\u53D1\u5E03\u53CA\u66F4\u65B0")),u("h2",null,"\u524D\u8A00"),u("p",null,"\u4E0A\u4E00\u7BC7\u4E3B\u8981\u8BB2\u5230\u4E86\u901A\u8FC7 electron-vite \u642D\u5EFA\u811A\u624B\u67B6\uFF0C\u8FD9\u6B21\u5B66\u4E60\u4E0B\u57FA\u4E8E Github Actions \u5B8C\u6210 electron \u7684\u81EA\u52A8\u6253\u5305\u3001\u53D1\u5E03\u53CA\u7248\u672C\u66F4\u65B0\u3002"),u("h2",null,"\u914D\u7F6E",u("a",{parentName:"h2",href:"https://yaolx.github.io/#/front"},"gitHub actions")),u("p",null,"github actions \u7684\u914D\u7F6E\u5728\u4E4B\u524D\u7684\u6587\u7AE0\u4E2D\u6709\u4ECB\u7ECD\u5230\uFF0C\u8FD9\u6B21\u6765\u8BF4\u8BF4 electron \u90E8\u7F72 \u7684 workflows"),u("pre",null,u("code",{parentName:"pre",className:"language-yml"},`name: electron deploy
on:
  push:
    branches:
      - main
jobs:
  release:
    name: build and release electron app
    # \u6D41\u6C34\u7EBF\u4F1A\u8DD1\u5728\u54EA\u4E9B\u64CD\u4F5C\u7CFB\u7EDF\u4E2D
    runs-on: \${{ matrix.os }}
    strategy:
      fail-fast: false
      matrix:
        # \u6D41\u6C34\u7EBF\u5C06\u5206\u522B\u89E6\u53D1\u5728 windows\u7CFB\u7EDF\u4E2D
        os: [windows-latest]
    steps:
      # \u68C0\u51FA\u4EE3\u7801
      - name: check out
        uses: actions/checkout@v3.0.0
      # \u5B89\u88C5node
      - name: install node.js
        uses: actions/setup-node@v3.0.0
        with:
          node-version: '16'
      # \u5B89\u88C5\u4F9D\u8D56
      - name: install
        run: yarn install
      # \u6253\u5305,\u53D1\u5E03
      - name: build and publish
        env:
          GITHUB_TOKEN: \${{ secrets.ACCESS_TOKEN }}
        run: yarn publish:win
`)),u("p",null,"\u6D41\u7A0B\u6BD4\u8F83\u7B80\u5355\uFF0C",u("inlineCode",{parentName:"p"},"publish:win"),"\u5BF9\u5E94\u5230 package.json \u4E2D\u7684 scripts \u547D\u4EE4\uFF0C\u4E3B\u8981\u662F\u505A\u4E86\u6253\u5305\u548C\u53D1\u5E03\u7684\u5DE5\u4F5C\u3002",u("inlineCode",{parentName:"p"},"electron-builder"),"\u4F1A\u5E2E\u6211\u4EEC\u628A\u53D1\u5E03\u7684\u6D41\u7A0B\u505A\u597D,\u53EA\u9700\u5728",u("inlineCode",{parentName:"p"},"electron-builder.yml"),"\u4E2D\u914D\u7F6E\u597D publish \u53C2\u6570"),u("pre",null,u("code",{parentName:"pre",className:"language-yml"},`publish:
  provider: github
  repo: electron-boat
  owner: yaolx
  private: false
  releaseType: release
`)),u("p",null,"\u67E5\u770B node_modules/electron-publish \u4E2D\u7684\u6E90\u7801\uFF1A",u("inlineCode",{parentName:"p"},"gitHubPublisher"),"\u4E3B\u8981\u505A\u4E86\u521B\u5EFA github \u5206\u652F\u3001\u6253 tag \u548C\u4E0A\u4F20\u6587\u4EF6\u7684\u5DE5\u4F5C"),u("h2",null,"\u7248\u672C\u66F4\u65B0\u673A\u5236"),u("p",null,"\u4E3B\u8981\u662F",u("inlineCode",{parentName:"p"},"electron-updater"),"\u5728\u5904\u7406\u8FD9\u5757\u6D41\u7A0B\uFF0C\u5206\u6790\u7EBF\u4E0A",u("inlineCode",{parentName:"p"},"latest.yml"),"\u7684\u7248\u672C\u53F7\u548C\u672C\u5730\u5BA2\u6237\u7AEF\u7248\u672C\u53F7\u54EA\u4E2A\u6BD4\u8F83\u65B0\uFF0C\u8FDB\u800C\u89E6\u53D1\u66F4\u65B0\u673A\u5236\u3002"),u("h2",null,"electron \u901A\u8BAF\u673A\u5236"),u("p",null,"\u5229\u7528",u("inlineCode",{parentName:"p"},"on"),"\u548C",u("inlineCode",{parentName:"p"},"send"),`\u5904\u7406\u4E3B\u8FDB\u7A0B\u548C\u6E32\u67D3\u8FDB\u7A0B\u4E4B\u95F4\u7684\u901A\u8BAF\u3002
\u5728\u4E3B\u8FDB\u7A0B\u4E2D\u5B9A\u4E49\u7248\u672C\u66F4\u65B0\u7684\u673A\u5236\uFF0C\u7136\u540E\u901A\u8FC7 send \u5C06\u4FE1\u606F\u53D1\u5E03\u5230\u6E32\u67D3\u8FDB\u7A0B\u4E2D\uFF0C\u6E32\u67D3\u8FDB\u7A0B\u4E2D\u901A\u8FC7 on \u63A5\u6536\u66F4\u65B0\u6570\u636E\uFF0C\u7136\u540E\u89E6\u53D1\u524D\u7AEF\u9875\u9762\u7684\u66F4\u65B0`),u("p",null,"\u5229\u7528",u("inlineCode",{parentName:"p"},"handle"),"\u548C",u("inlineCode",{parentName:"p"},"invoke"),"\uFF0C\u53EF\u4EE5\u8BA9\u6E32\u67D3\u8FDB\u7A0B\u89E6\u53D1\u65B9\u6CD5\uFF0C\u901A\u8FC7\u5F02\u6B65\u56DE\u8C03\u83B7\u53D6\u4E3B\u8FDB\u7A0B\u7684\u6570\u636E"),u("h2",null,"\u603B\u7ED3"),u("p",null,"\u901A\u8FC7\u4E0A\u8FF0\u7684\u51E0\u4E2A\u6B65\u9AA4\uFF0C\u5B8C\u6210\u4E86 electron \u7248\u672C\u81EA\u52A8\u53D1\u5E03\uFF0C\u66F4\u65B0\u529F\u80FD\u7684\u5F00\u53D1"))}l.isMDXComponent=!0;export{l as default};
