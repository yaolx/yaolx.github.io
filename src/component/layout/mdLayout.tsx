import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

import { ForwardOutlined, BackwardOutlined } from '@ant-design/icons'
import { Layout, Menu } from 'antd'
import classNames from 'classnames'
import { map } from 'lodash'

import { genSubMdxRouters } from '@/service/mdx-service'

import styles from './styles/index.module.less'

const { Content, Sider } = Layout

interface Props {
  type: string
}

export default function MdLayout(props: Props) {
  const mdxRouters = genSubMdxRouters(props.type)
  const [active, setActive] = useState('')
  const [collapsed, setCollapsed] = useState(false)
  const navigate = useNavigate()
  const onSelectMenu = ({ key }) => {
    setActive(key)
    navigate(key)
  }

  useEffect(() => {
    setActive(window.location.hash.slice(1))
  }, [location.hash])
  return (
    <Layout className={styles.layout}>
      <Sider
        className={classNames(styles.sider, collapsed ? '' : styles.mdSiderWidth)}
        collapsedWidth="0"
        trigger={null}
        collapsed={collapsed}
      >
        <div className={classNames(styles.folder, collapsed ? styles.collapsed : '')}>
          {collapsed ? (
            <ForwardOutlined onClick={() => setCollapsed(!collapsed)} />
          ) : (
            <BackwardOutlined onClick={() => setCollapsed(!collapsed)} />
          )}
        </div>
        <Menu
          mode="inline"
          onClick={onSelectMenu}
          selectedKeys={[active]}
          style={{ height: '100%', borderRight: 0, overflowX: 'hidden', overflowY: 'auto' }}
        >
          {map(mdxRouters, (mdx) => {
            return (
              <Menu.Item key={mdx.path} title={mdx.name}>
                {mdx.name}
              </Menu.Item>
            )
          })}
        </Menu>
      </Sider>
      <Content>
        <Outlet />
      </Content>
    </Layout>
  )
}
