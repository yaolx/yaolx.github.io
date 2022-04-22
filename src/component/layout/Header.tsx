import React, { useState } from 'react'
import { Layout, Menu } from 'antd'
import { useNavigate } from 'react-router-dom'
import styles from './styles/index.module.less'
const { Header } = Layout

export default function HeaderLayout() {
  const navigate = useNavigate()
  const onSelectMenu = ({ key }) => {
    navigate(key)
  }
  return (
    <Layout>
      <Header className={styles.header}>
        <div className="logo" />
        <Menu mode="horizontal" onClick={onSelectMenu}>
          <Menu.Item key="/md">前端开发</Menu.Item>
          <Menu.Item key="/">后端开发</Menu.Item>
          <Menu.Item key="/md1">工具</Menu.Item>
          <Menu.Item key="/md2">关于我</Menu.Item>
        </Menu>
      </Header>
    </Layout>
  )
}
