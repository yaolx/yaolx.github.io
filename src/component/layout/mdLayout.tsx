import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

import { Layout, Menu } from 'antd'
import { map, find } from 'lodash'

import { mdSiderWidth, isH5 } from '@/constant/global'
import { useStores } from '@/hooks'
import { genSubMdxRouters } from '@/service/mdx-service'

import styles from './styles/index.module.less'
const { Content, Sider } = Layout

interface Props {
  type: string
}

export default function MdLayout(props: Props) {
  const globalStore = useStores('globalStore')
  const mdxRouters = genSubMdxRouters(props.type)
  const [active, setActive] = useState('')
  const [collapsed, setCollapsed] = useState(true)
  const navigate = useNavigate()
  const onSelectMenu = ({ key }) => {
    setActive(key)
    navigate(key)
    if (isH5) {
      setCollapsed(true)
    }
  }

  useEffect(() => {
    const curActive = window.location.hash.slice(1)
    setActive(curActive)
    const menu = find(mdxRouters, {
      path: curActive
    })
    globalStore.setCurMdx(menu?.key)
  }, [location.hash])
  return (
    <Layout className={styles.layout}>
      <Sider
        className={styles.sider}
        width={mdSiderWidth}
        breakpoint="md"
        collapsedWidth="0"
        collapsed={collapsed}
        onBreakpoint={(broken) => {
          console.log(broken)
        }}
        onCollapse={(collapsed) => {
          setCollapsed(collapsed)
        }}
      >
        <Menu
          mode="inline"
          onClick={onSelectMenu}
          selectedKeys={[active]}
          style={{ height: '100%', borderRight: 0 }}
        >
          {map(mdxRouters, (mdx) => {
            return <Menu.Item key={mdx.path}>{mdx.name}</Menu.Item>
          })}
        </Menu>
      </Sider>
      <Content>
        <Outlet />
      </Content>
    </Layout>
  )
}
