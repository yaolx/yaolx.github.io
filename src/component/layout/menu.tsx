import React from 'react'
import { useNavigate } from 'react-router-dom'

import { SendOutline } from 'antd-mobile-icons'
import cs from 'classnames'
import { map } from 'lodash'

import styles from './styles/index.module.less'
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
    key: 'github',
    title: 'github',
    url: 'https://github.com/yaolx/yaolx.github.io'
  },
  {
    key: 'md/about',
    title: '关于'
  },
  {
    key: 'md/log',
    title: '更新日志'
  }
]
interface MenuProps {
  hidePop?: () => void
  className?: string
}
export default function MenuLayout(props: MenuProps) {
  const { hidePop, className } = props
  const hash = location.hash
  const navigate = useNavigate()
  const onSelectMenu = (menu) => {
    if (menu.url) {
      window.open(menu.url, '_blank')
    } else {
      navigate(`/${menu.key}`)
      hidePop && hidePop()
    }
  }
  const active = hash.slice(2)
  return (
    <div className={cs(styles.menu, className)}>
      {map(menus, (menu) => {
        const activeClass = active === menu.key ? styles.active : ''
        return (
          <div
            key={menu.key}
            onClick={() => onSelectMenu(menu)}
            className={cs(styles.menu_item, activeClass)}
          >
            {menu.title}
            {menu.url ? <SendOutline className={styles.github_btn} /> : null}
          </div>
        )
      })}
    </div>
  )
}
