import React from 'react'

import { map } from 'lodash'

import styles from './styles/index.module.less'

interface ButtonProps {
  content: {
    title: string
    desc: string[]
  }[]
}
const Card = (props: ButtonProps) => {
  const { content } = props

  return (
    <div className={styles.card}>
      {map(content, (item, n) => (
        <div key={n}>
          {item.title}
          <ul>
            {map(item.desc, (desc, m) => (
              <li key={m}>{desc}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default Card
