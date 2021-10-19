import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { Provider } from 'mobx-react'
import globalStore from '@/store/global'
import routes from '@/routes'
import './index.less'

const stores = {
  globalStore
}
ReactDOM.render(
  <React.StrictMode>
    <Provider stores={stores}>
      <HashRouter>{renderRoutes(routes)}</HashRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
