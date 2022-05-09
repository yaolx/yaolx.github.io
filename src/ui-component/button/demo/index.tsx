import React from 'react'

import Button from '@/ui-component/button'

import styles from './index.module.less'
const Demo = () => {
  return (
    <div>
      <Button className={styles.button1}>测试1</Button>
      <Button className={styles.button2}>测试2</Button>
    </div>
  )
}

export default Demo
