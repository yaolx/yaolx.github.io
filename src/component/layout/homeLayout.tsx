import React from 'react'
import { Outlet } from 'react-router-dom'
import { Layout } from 'antd'
import Header from './header'
const { Content } = Layout

export default function HomeLayout() {
  return (
    <Layout>
      <Header />
      <Content className="markdown-body">
        <Outlet />
      </Content>
    </Layout>
  )
}
