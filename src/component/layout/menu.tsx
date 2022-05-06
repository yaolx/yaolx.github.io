import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { ExportOutlined } from '@ant-design/icons'
import cs from 'classnames'
import { map } from 'lodash'
import { observer } from 'mobx-react'

import { useStores } from '@/hooks'

import styles from './styles/index.module.less'
interface MenuProps {
  hidePop?: () => void
  className?: string
}
function MenuLayout(props: MenuProps) {
  const globalStore = useStores('globalStore')
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
  useEffect(() => {
    globalStore.initMdx()
  }, [])
  const active = hash.slice(2)
  const menus = globalStore.mdxMenus
  return (
    <div className={cs(styles.menu, className)}>
      {map(menus, (menu) => {
        const activeClass =
          menu.key === active || (active.includes(menu.key) && menu.key !== '') ? styles.active : ''
        return (
          <div
            key={menu.key}
            onClick={() => onSelectMenu(menu)}
            className={cs(styles.menu_item, activeClass)}
          >
            {menu.title}
            {menu.url ? <ExportOutlined className={styles.github_btn} /> : null}
          </div>
        )
      })}
    </div>
  )
}

export default observer(MenuLayout)
