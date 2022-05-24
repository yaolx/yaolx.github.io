import React from 'react'
import { Outlet } from 'react-router-dom'

import { Layout } from 'antd'

const { Content } = Layout
interface Props {
  isMd?: boolean
}
export default function HomeLayout(props: Props) {
  const { isMd } = props
  return (
    <Content className={isMd ? 'markdown-body' : 'home'}>
      <Outlet />
    </Content>
  )
}
