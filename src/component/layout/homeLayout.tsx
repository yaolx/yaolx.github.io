import React from 'react'
import { Outlet } from 'react-router-dom'

import { Layout } from 'antd'

import Header from './header'
const { Content } = Layout
interface Props {
  isMd?: boolean
}
export default function HomeLayout(props: Props) {
  const { isMd } = props
  return (
    <Layout>
      <Header />
      <Content className={isMd ? 'markdown-body' : ''}>
        <Outlet />
      </Content>
    </Layout>
  )
}
