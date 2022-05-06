import React from 'react'

import { Layout } from 'antd'

import Header from './header'
import HomeLayout from './homeLayout'
import MdLayout from './mdLayout'
interface Props {
  isMd?: boolean
  type?: string
}
export default function LayoutIndex(props: Props) {
  const { isMd, type } = props

  return (
    <Layout>
      <Header />
      {type ? <MdLayout type={type} /> : <HomeLayout isMd={isMd} />}
    </Layout>
  )
}
