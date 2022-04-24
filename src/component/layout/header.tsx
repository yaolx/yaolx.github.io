import React, { useRef } from 'react'

import { Layout } from 'antd'
import { LeftOutline } from 'antd-mobile-icons'

import Pop from '@/component/pop'

import Menu from './menu'
import styles from './styles/index.module.less'
const { Header } = Layout
export default function HeaderLayout() {
  const ref = useRef<any>()
  const showPop = () => {
    ref.current?.show()
  }
  const hidePop = () => {
    ref.current?.hide()
  }
  return (
    <Header className={styles.header}>
      <div className={styles.logo} />
      <div className={styles.name}>千禮之行</div>
      <div>
        <Menu className={styles.pc_menu} />
        <LeftOutline className={styles.h5_menu} onClick={showPop} />
        <Pop ref={ref}>
          <Menu hidePop={hidePop} />
        </Pop>
      </div>
    </Header>
  )
}
