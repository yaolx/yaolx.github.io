import"./react-vendor.354bfc68.js";import{q as u}from"./vendor.7b08bbb4.js";import"./__commonjsHelpers__.be7665b8.js";import"./lodash.b4f4b5bf.js";const n={},a="wrapper";function l({components:e,...F}){return u(a,{...n,...F,components:e,mdxType:"MDXLayout"},u("h1",null,u("center",null,"electron \u5F00\u53D1\u4E4B\u56DB\uFF1A\u7CFB\u7EDF\u6258\u76D8\u3001\u6D88\u606F\u95EA\u52A8\u63D0\u793A\u53CA\u5355\u5E94\u7528\u5B9E\u4F8B")),u("h2",null,"\u524D\u8A00"),u("p",null,"\u4E3B\u8981\u5B9E\u73B0\u7CFB\u7EDF\u6258\u76D8\uFF0C\u6D88\u606F\u95EA\u52A8\u63D0\u793A\u7684\u529F\u80FD\uFF0C\u8FD8\u6709\u5355\u5E94\u7528\u5B9E\u4F8B\u7684\u63A7\u5236"),u("h2",null,"\u7CFB\u7EDF\u6258\u76D8"),u("p",null,"\u5B9E\u73B0\u529F\u80FD\uFF1A\u5173\u95ED\u7A97\u53E3\u7684\u65F6\u5019\uFF0C\u5C06\u684C\u9762\u5E94\u7528\u653E\u5165\u7CFB\u7EDF\u6258\u76D8\uFF0C\u5DE6\u952E\u70B9\u51FB\uFF0C\u5219\u6253\u5F00\u7A97\u53E3\uFF1B\u53F3\u952E\u70B9\u51FB\uFF0C\u5219\u663E\u793A\u53F3\u952E\u83DC\u5355"),u("p",null,"\u8BBE\u7F6E\u6258\u76D8\u5FC5\u987B\u5728\u7A0B\u5E8F ready \u4E4B\u540E"),u("ul",null,u("li",{parentName:"ul"},u("p",{parentName:"li"},"\u4E3B\u8FDB\u7A0B\uFF1A"),u("pre",{parentName:"li"},u("code",{parentName:"pre",className:"language-js"},`export function trayInit(win) {
  // \u53F3\u952E\u83DC\u5355
  const trayContextMenu = Menu.buildFromTemplate([
    {
      label: '\u663E\u793A\u7A97\u53E3',
      click: () => {
        win.show()
        win.center()
        win.focus()
      }
    },
    {
      label: '\u9000\u51FA',
      role: 'quit'
    }
  ])
  // \u8BBE\u7F6E\u6258\u76D8\uFF0C\u6700\u597D\u5728\u6839\u76EE\u5F55\u5EFA\u4E00\u4E2A\u6587\u4EF6\u5939\u7528\u6765\u5B58\u653E\u7CFB\u7EDF\u8D44\u6E90
  const tray = new Tray('resources/images/icon.png')
  // \u8BBE\u7F6Ehover\u540E\u7684\u4FE1\u606F
  ipcMain.on('songPlay', async (_e, data) => {
    tray.setToolTip(data)
  })
  // \u8BBE\u7F6E\u9F20\u6807\u5DE6\u952E\u4E8B\u4EF6
  tray.on('click', () => {
    win.show()
  })
  // \u8BBE\u7F6E\u9F20\u6807\u53F3\u952E\u952E\u4E8B\u4EF6
  tray.on('right-click', () => {
    tray.popUpContextMenu(trayContextMenu)
  })
}
`)),u("p",{parentName:"li"},u("inlineCode",{parentName:"p"},"trayContextMenu"),"\u91CC\u7684\u5C5E\u6027\u6709 label\u3001icon\u3001click\u3001type\u3001role"),u("pre",{parentName:"li"},u("code",{parentName:"pre",className:"language-js"},`role \u5C5E\u6027\u53EF\u4EE5\u5177\u6709\u4EE5\u4E0B\u503C\uFF1A
undo: \u64A4\u6D88
redo: \u91CD\u505A
cut: \u526A\u5207
copy\uFF1A\u590D\u5236
paste\uFF1A \u7C98\u8D34
pasteAndMatchStyle\uFF1A\u7C98\u8D34\u548C\u5339\u914D\u6837\u5F0F
selectAll\uFF1A \u5168\u9009
delete\uFF1A \u5220\u9664
minimize - \u6700\u5C0F\u5316\u5F53\u524D\u7A97\u53E3\u3002
close - \u5173\u95ED\u5F53\u524D\u7A97\u53E3.
quit - \u9000\u51FA\u5F53\u524D\u5E94\u7528.
reload - \u91CD\u65B0\u52A0\u8F7D\u5F53\u524D\u7A97\u53E3\u3002
forcereload - \u5FFD\u7565\u7F13\u5B58\uFF0C\u91CD\u65B0\u52A0\u8F7D\u5F53\u524D\u7A97\u53E3\u3002
toggledevtools - \u5728\u5F53\u524D\u7A97\u53E3\u4E2D\u9690\u85CF/\u663E\u793A\u5F00\u53D1\u8005\u5DE5\u5177\u3002
toggleFullScreen - Toggle full screen mode on the current window.
resetzoom - \u5C06\u4E3B\u9875\u7684\u7F29\u653E\u7EA7\u522B\u91CD\u7F6E\u4E3A\u521D\u59CB\u5927\u5C0F.
zoomin - \u4E3B\u9875\u9762\u653E\u5927 10%.
zoomout -\u4E3B\u9875\u9762\u7F29\u5C0F 10%.
fileMenu - Whole default "File" menu (Close / Quit)
editMenu-\u9ED8\u8BA4\u7684 "\u7F16\u8F91" \u83DC\u5355 (\u5305\u62EC\u64A4\u6D88\u3001\u590D\u5236\u7B49)
viewMenu - Whole default "View" menu (Reload, Toggle Developer Tools, etc.)
windowMenu - Whole default "Window" menu (Minimize, Zoom, etc.)
`))),u("li",{parentName:"ul"},u("p",{parentName:"li"},"preload.js"),u("pre",{parentName:"li"},u("code",{parentName:"pre",className:"language-js"},`onPlay: (val) => {
  ipcRenderer.send('songPlay', val)
}
`))),u("li",{parentName:"ul"},u("p",{parentName:"li"},"\u6E32\u67D3\u8FDB\u7A0B"),u("p",{parentName:"li"},"\u70B9\u51FB\u64AD\u653E\uFF0C\u4F20\u53C2\u5230\u4E3B\u8FDB\u7A0B\u4E2D\uFF0C\u9F20\u6807\u5230\u7CFB\u7EDF\u6258\u76D8\uFF0Chover\uFF0C\u5373\u53EF\u770B\u5230\u76F8\u5E94\u7684\u6587\u672C\u63D0\u793A"),u("pre",{parentName:"li"},u("code",{parentName:"pre",className:"language-js"},`mainView.onPlay(text)
`)))),u("h2",null,"\u6D88\u606F\u95EA\u52A8\u63D0\u793A"),u("ul",null,u("li",{parentName:"ul"},u("p",{parentName:"li"},"\u901A\u8FC7",u("inlineCode",{parentName:"p"},"tray setImage"),"\u8BBE\u7F6E\u6D88\u606F\u95EA\u52A8"),u("p",{parentName:"li"},"\u901A\u8FC7 setTimeout\uFF0C\u8BBE\u7F6E\u7A7A\u56FE\u7247\u3001\u9ED8\u8BA4\u56FE\u7247"),u("pre",{parentName:"li"},u("code",{parentName:"pre",className:"language-js"},`setTimeout(() => {
  tray.setImage(nativeImage.createEmpty())
  tray.setImage(defaultIcon)
})
`))),u("li",{parentName:"ul"},u("p",{parentName:"li"},"\u8C03\u7528\u65B9\u6CD5",u("inlineCode",{parentName:"p"},"displayBalloon"),"\uFF0C\u8BBE\u7F6E\u6C14\u6CE1\u63D0\u793A\u6D88\u606F"),u("pre",{parentName:"li"},u("code",{parentName:"pre",className:"language-js"},`tray.displayBalloon({
  title: '\u901A\u77E5',
  content,
  iconType: 'info',
  largeIcon: false
})
`)))),u("h2",null,"\u5E94\u7528\u5355\u5B9E\u4F8B"),u("p",null,"\u4ECE\u5B98\u65B9\u6587\u6863\u6765\u770B\uFF0C\u53EA\u9700\u8C03\u7528",u("inlineCode",{parentName:"p"},"requestSingleInstanceLock"),"\uFF0C\u505A\u5224\u65AD\u5373\u53EF"),u("pre",null,u("code",{parentName:"pre",className:"language-js"},`// \u8BF7\u6C42\u83B7\u53D6\u5B9E\u4F8B\u9501\uFF0C\u82E5\u6210\u529F\u5219\u8FD4\u56DEtrue\uFF0C\u5426\u5219\u8868\u793A\u5DF2\u5B58\u5728\u6253\u5F00\u7684\u5E94\u7528\u5B9E\u4F8B
const gotTheLock = app.requestSingleInstanceLock()
if (!gotTheLock) {
  app.quit()
} else {
  // \u76D1\u542C\u7B2C\u4E8C\u4E2A\u5B9E\u4F8B\uFF0C\u5982\u679C\u4E3B\u5B9E\u4F8B\u5B58\u5728\uFF0C\u5219\u663E\u793A\u4E3B\u5B9E\u4F8B
  app.on('second-instance', () => {
    // Someone tried to run a second instance, we should focus our window.
    if (mainWindow) {
      if (mainWindow.isMinimized()) {
        mainWindow.restore()
      }
      mainWindow.show()
      mainWindow.center()
      mainWindow.focus()
    }
  })
}
`)),u("h2",null,"\u603B\u7ED3"),u("p",null,"\u6D88\u606F\u901A\u77E5\u8FD9\u5757\uFF0C\u8FD8\u9700\u8981\u66F4\u6DF1\u5165\u7684\u7814\u7A76\u4E0B"))}l.isMDXComponent=!0;export{l as default};
