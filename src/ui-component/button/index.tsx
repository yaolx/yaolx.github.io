import React from 'react'

import cs from 'classnames'

import styles from './styles/index.module.less'

interface ButtonProps {
  children: JSX.Element | string
  className: string
}
const Button = (props: ButtonProps) => {
  const { children, className } = props
  return <div className={cs(styles.button, className)}>{children}</div>
}

export default Button
