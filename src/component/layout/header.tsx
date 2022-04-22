import React from 'react'
import { Layout, Menu } from 'antd'
import { useNavigate } from 'react-router-dom'
import styles from './styles/index.module.less'
import { map } from 'lodash'
const { Header } = Layout
const menus = [
  {
    key: '',
    title: '首页'
  },
  {
    key: 'front',
    title: '前端'
  },
  {
    key: 'end',
    title: '后端'
  },
  {
    key: 'about',
    title: '关于'
  },
  {
    key: 'log',
    title: '更新日志'
  }
]
export default function HeaderLayout() {
  const navigate = useNavigate()
  const onSelectMenu = ({ key }) => {
    navigate(`/${key}`)
  }
  return (
    <Header className={styles.header}>
      <div className={styles.logo} />
      <div className={styles.name}>千禮之行</div>
      <Menu className={styles.menu} mode="horizontal" onClick={onSelectMenu}>
        {map(menus, (menu) => {
          return <Menu.Item key={menu.key}>{menu.title}</Menu.Item>
        })}
      </Menu>
    </Header>
  )
}
