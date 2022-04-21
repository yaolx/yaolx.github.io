import React from 'react'
import { observer } from 'mobx-react'
import { Button } from 'antd'
import { useStores } from '@/hooks'
import request from '@/config/request'
import homeStore from './model'
import styles from './style/index.module.less'
import logo from './logo.svg'
function Home(): JSX.Element {
  const globalStore = useStores('globalStore')
  /**
   * @param {number} id
   */
  const onHandler = () => {
    request(
      {
        url: '/api/user',
        method: 'get'
      },
      {
        loading: true
      }
    ).then((data) => {
      console.log('EEEE111', data)
    })
  }
  const config = import.meta.env
  return (
    <div className={styles.App}>
      <header className={styles['App-header']}>
        <img src={logo} className={styles['App-logo']} alt="logo" />
        <p>{config.VITE_TITLE}test</p>
        <p>
          <Button type="primary" onClick={homeStore.add}>
            count is: {homeStore.count}
          </Button>
        </p>
        <div>
          <Button type="primary" onClick={onHandler}>
            请求数据
          </Button>
        </div>
        <div>
          <Button type="primary" onClick={globalStore.success}>
            登录
          </Button>
          <Button type="primary" onClick={globalStore.fail}>
            注销
          </Button>
          <div>{globalStore.isLogin ? '3已登录' : '2未登录'}</div>
        </div>
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
