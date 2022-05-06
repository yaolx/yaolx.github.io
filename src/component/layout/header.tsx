import React, { useState, useRef } from 'react'

import { MenuFoldOutlined } from '@ant-design/icons'
import { Layout } from 'antd'

import Pop from '@/component/pop'
import Search from '@/component/search'

import Menu from './menu'
import styles from './styles/index.module.less'

type RefProps = HTMLInputElement & {
  show: () => void
  hide: () => void
}

const { Header } = Layout
function HeaderLayout() {
  const [activeClass, setActiveClass] = useState('')
  const ref = useRef<RefProps>(null)
  const showPop = () => {
    ref.current?.show()
  }
  const hidePop = () => {
    ref.current?.hide()
  }
  const handleClassSearch = (activeClass: string) => {
    setActiveClass(activeClass)
  }
  return (
    <Header className={styles.header}>
      <div className={styles.logo} />
      <div className={styles.name}>千禮之行</div>
      <Search handleClassSearch={handleClassSearch} activeClass={activeClass} />
      <div className={activeClass}>
        <Menu className={styles.pc_menu} />
        <MenuFoldOutlined className={styles.h5_menu} onClick={showPop} />
        <Pop ref={ref}>
          <Menu hidePop={hidePop} />
        </Pop>
      </div>
    </Header>
  )
}

export default React.memo(HeaderLayout)
