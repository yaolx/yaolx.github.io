import React, { useState } from 'react'
import { Button } from 'antd'
import Hello from './hello'
import styles from './style/index.module.less'

const Counter = () => {
  console.log('counter render')
  const [count, addCount] = useState(0)
  /* const clickHandler = () => {
    console.log('hello click')
  } */

  const clickHandler = React.useCallback(() => {
    console.log('hello click')
    console.log('count', count)
  }, [count])
  return (
    <div className={styles.App}>
      <Hello name="hello" onClick={clickHandler} />
      <div className="counter-num">{count}</div>
      <Button
        onClick={() => {
          addCount(count + 1)
        }}
      >
        add
      </Button>
    </div>
  )
}

export default Counter
