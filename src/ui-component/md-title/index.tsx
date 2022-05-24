import React from 'react'

import styles from './styles/index.module.less'

interface ButtonProps {
  text: string
}
const Title = (props: ButtonProps) => {
  const { text } = props
  return (
    <div className={styles.title}>
      <div className={styles.text}>{text}</div>
    </div>
  )
}

export default Title
