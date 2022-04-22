import React from 'react'
import styles from './style/index.module.less'
import Header from 'antd/lib/layout/layout'

function Home(): JSX.Element {
  return (
    <div className={styles.App}>
      <Header />
    </div>
  )
}

export default Home
