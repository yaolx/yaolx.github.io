import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'mobx-react'
import globalStore from '@/store/global'
import Router from '@/routes'
import './index.less'

const stores = {
  globalStore
}
ReactDOM.render(
  <React.StrictMode>
    <Provider stores={stores}>
      <HashRouter>
        <Router />
      </HashRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)