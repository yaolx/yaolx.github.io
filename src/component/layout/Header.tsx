import React from 'react'
import { Outlet } from 'react-router-dom'
import styles from './styles/index.module.less'

export default function Header() {
  return (
    <div>
      头部
      <Outlet />
    </div>
  )
}
