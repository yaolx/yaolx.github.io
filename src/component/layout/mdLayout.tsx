import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Layout, Menu } from 'antd'
import { first, map } from 'lodash'
import MdxsRouter from '@/component/mdx-menus'
import { useNavigate } from 'react-router-dom'
import Header from './header'
import styles from './styles/index.module.less'

const { Content, Sider } = Layout

export default function MdLayout() {
  const [active, setActive] = useState(first(MdxsRouter)?.path || '')
  const navigate = useNavigate()
  const onSelectMenu = ({ key }) => {
    setActive(key)
    navigate(key)
  }
  return (
    <Layout>
      <Header />
      <Layout className={styles.layout}>
        <Sider className={styles.sider}>
          <Menu mode="inline" onClick={onSelectMenu} defaultSelectedKeys={[active]} defaultOpenKeys={[active]} style={{ height: '100%', borderRight: 0 }}>
            {map(MdxsRouter, (mdx) => {
              return <Menu.Item key={mdx.path}>{mdx.name}</Menu.Item>
            })}
          </Menu>
        </Sider>
        <Content>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  )
}