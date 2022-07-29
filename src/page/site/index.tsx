import React, { useRef } from 'react'

import { Divider, Anchor } from 'antd'
import { map } from 'lodash'

import LoadImage from '@/component/load-image'
import { SITE_CATEGORY } from '@/constant/global'

import styles from './style/index.module.less'

const { Link } = Anchor
function Site(): JSX.Element {
  const contentRef = useRef<HTMLDivElement>(null)
  const handleClick = (
    e: React.MouseEvent<HTMLElement>,
    link: {
      title: React.ReactNode
      href: string
    }
  ) => {
    e.preventDefault()
    const contentDom = contentRef.current
    const cateDom = document.querySelector(`#${link.href}`) as HTMLDivElement
    if (contentDom && cateDom) {
      contentDom.scrollTop = cateDom.offsetTop
    }
  }
  return (
    <div className={styles.site} ref={contentRef}>
      <div className={styles.left}>
        {map(SITE_CATEGORY, (cate) => (
          <div className={styles.category} key={cate.id} id={cate.id}>
            <Divider orientation="left">{cate.title}</Divider>
            <div className={styles.content}>
              {map(cate.children, (child) => (
                <a
                  href={child.href}
                  key={child.id}
                  className={styles.item}
                  target="_blank"
                  rel="noreferrer"
                >
                  <LoadImage src={child.icon || ''} className={styles.img} />
                  <div className={styles.title}>{child.title}</div>
                </a>
              ))}
            </div>
          </div>
        ))}
        <Anchor affix={false} onClick={handleClick} className={styles.anchor}>
          {map(SITE_CATEGORY, (cate) => {
            return <Link href={`${cate.id}`} title={cate.title} key={cate.id} />
          })}
        </Anchor>
      </div>
    </div>
  )
}

export default Site
