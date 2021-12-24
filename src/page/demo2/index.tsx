import React, { useState } from 'react'
import { Button } from 'antd'
import styles from './style/index.module.less'

const Counter = () => {
  console.log('counter render')
  const [count, addCount] = useState({ num: 0, time: Date.now() })
  const clickHandler = () => {
    count.num++
    count.time = Date.now()
    addCount(count)
  }
  return (
    <div className={styles.App}>
      <div className="counter-num">
        {count.num}, {count.time}
      </div>
      <Button onClick={clickHandler}>add</Button>
    </div>
  )
}

export default Counter
