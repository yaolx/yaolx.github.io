import React from 'react'
import { observer } from 'mobx-react'
import { useStores } from '@/hooks'
import homeStore from './model'
import styles from './style/index.module.less'
import logo from './logo.svg'
function Home(): JSX.Element {
  const globalStore = useStores('globalStore')
  return (
    <div className={styles.App}>
      <header className={styles['App-header']}>
        <img src={logo} className={styles['App-logo']} alt="logo" />
        <p>Hello Vite + React + typescript + mobx</p>
        <p>
          <button type="button" onClick={homeStore.add}>
            count is: {homeStore.count}
          </button>
        </p>
        <div>
          <button type="button" onClick={globalStore.success}>
            登录
          </button>
          <button type="button" onClick={globalStore.fail}>
            注销
          </button>
          <div>{globalStore.isLogin ? '3已登录' : '2未登录'}</div>
        </div>
        <p></p>
        <p>
          <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            Learn React
          </a>
          {' | '}
          <a className={styles['App-link']} href="https://vitejs.dev/guide/features.html" target="_blank" rel="noopener noreferrer">
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}

export default observer(Home)
