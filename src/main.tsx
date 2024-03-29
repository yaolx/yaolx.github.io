import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom'

import { Provider } from 'mobx-react'

import Router from '@/routes'
import { genMdxRouters } from '@/service/mdx-service'
import globalStore from '@/store/global'
import { startDebug } from '@/utils/debug'
import '@/utils/setFonSize'
import './asset/styles/index.less'
const stores = {
  globalStore
}
genMdxRouters()
startDebug()
ReactDOM.render(
  <StrictMode>
    <Provider stores={stores}>
      <HashRouter>
        <Router />
      </HashRouter>
    </Provider>
  </StrictMode>,
  document.getElementById('root')
)
