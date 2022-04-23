import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Layout, Menu } from 'antd'
import { first, map } from 'lodash'
import MdxRouters from '@/component/mdx-menus'
import { useNavigate } from 'react-router-dom'
import Header from './header'
import { sliderWidth } from '@/constant/global'
import styles from './styles/index.module.less'

const { Content, Sider } = Layout

interface Props {
  type: string
}

export default function MdLayout(props: Props) {
  const mdxRouters = MdxRouters(props.type)
  const [active, setActive] = useState(first(mdxRouters)?.path || '')
  const navigate = useNavigate()
  const onSelectMenu = ({ key }) => {
    setActive(key)
    navigate(key)
  }
  return (
    <Layout>
      <Header />
      <Layout className={styles.layout}>
        <Sider
          className={styles.sider}
          width={sliderWidth}
          breakpoint="md"
          collapsedWidth="0"
          onBreakpoint={(broken) => {
            console.log(broken)
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type)
          }}
        >
          <Menu mode="inline" onClick={onSelectMenu} defaultSelectedKeys={[active]} defaultOpenKeys={[active]} style={{ height: '100%', borderRight: 0 }}>
            {map(mdxRouters, (mdx) => {
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
