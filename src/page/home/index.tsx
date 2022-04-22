import React from 'react'
import { observer } from 'mobx-react'
import { Button } from 'antd'
import styles from './style/index.module.less'
function Home(): JSX.Element {
  return <div className={styles.App}>web前端技术栈，补充ing</div>
}

export default observer(Home)
