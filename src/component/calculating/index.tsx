import React, { useEffect, useState } from 'react'

import { Input, Button, Select } from 'antd'
import copy from 'copy-to-clipboard'

import styles from './styles/index.module.less'

// vw转px简单计算器
function Calculating() {
  const [a, setA] = useState(0)
  const [b, setB] = useState('')
  const [totalText, setTotalText] = useState('')
  const [unit, setUnit] = useState('vw')
  const [targetUnit, setTargetUnit] = useState('px')
  const onChange = (type, e) => {
    const value = e.target.value
    switch (type) {
      case 'a':
        setA(parseFloat(value))
        break
      case 'b':
        setB(value)
        break
      default:
        break
    }
  }
  useEffect(() => {
    setTotalText(b ? (a * parseFloat(b.replace(unit, ''))).toFixed(0) + targetUnit : '')
  }, [a, b])
  // 复制
  const onCopy = () => {
    copy(totalText)
  }
  const onClear = () => {
    setB('')
  }
  //切换单位
  const onSelectUnit = (value) => {
    setUnit(value)
  }
  //切换单位
  const onSelectTargetUnit = (value) => {
    setTargetUnit(value)
  }
  return (
    <>
      <Input
        onChange={(value) => onChange('a', value)}
        value={a}
        type="number"
        addonBefore="换算率"
      />
      <Input
        onChange={(value) => onChange('b', value)}
        value={b}
        type="text"
        className={styles.unit}
        addonBefore="单位"
        addonAfter={
          <Select onChange={onSelectUnit} value={unit}>
            <Select.Option value="vw">vw</Select.Option>
            <Select.Option value="rem">rem</Select.Option>
            <Select.Option value="px">px</Select.Option>
          </Select>
        }
      />
      <Input.Group>
        <Button className={styles.target_unit}>目标单位</Button>
        <Select
          onChange={onSelectTargetUnit}
          value={targetUnit}
          style={{ width: 'calc(100% - 100px)' }}
        >
          <Select.Option value="vw">vw</Select.Option>
          <Select.Option value="rem">rem</Select.Option>
          <Select.Option value="px">px</Select.Option>
        </Select>
      </Input.Group>
      <div className={styles.total}>
        {totalText}
        <Button type="primary" onClick={onCopy} className={styles.copy}>
          复制
        </Button>
        <Button type="primary" onClick={onClear} className={styles.copy}>
          清除
        </Button>
      </div>
    </>
  )
}

export default Calculating
