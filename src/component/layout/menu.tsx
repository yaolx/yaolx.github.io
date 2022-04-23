import React from 'react'
import { useNavigate } from 'react-router-dom'
import cs from 'classnames'
import styles from './styles/index.module.less'
import { map } from 'lodash'
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
interface MenuProps {
  hidePop?: () => void
  className?: string
}
export default function MenuLayout(props: MenuProps) {
  const { hidePop, className } = props
  const navigate = useNavigate()
  const onSelectMenu = (key: string) => {
    navigate(`/${key}`)
    hidePop && hidePop()
  }
  return (
    <div className={cs(styles.menu, className)}>
      {map(menus, (menu) => {
        return (
          <div key={menu.key} onClick={() => onSelectMenu(menu.key)} className={styles.menu_item}>
            {menu.title}
          </div>
        )
      })}
    </div>
  )
}
