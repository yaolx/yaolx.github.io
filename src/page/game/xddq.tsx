import React, { useState } from 'react'

import { InputNumber, Select, Button, Space, Tabs, Card } from 'antd'
import { map } from 'lodash'

const cityEnum = [
  {
    label: '1级城池',
    value: 432
  },
  {
    label: '2级城池',
    value: 720
  },
  {
    label: '3级城池',
    value: 1200
  },
  {
    label: '4级城池',
    value: 1680
  },
  {
    label: '5级城池',
    value: 2160
  },
  {
    label: '6级城池',
    value: 3000
  },
  {
    label: '7级城池',
    value: 4800
  },
  {
    label: '8级城池',
    value: 7200
  },
  {
    label: '9级城池',
    value: 14400
  },
  {
    label: '10级城池',
    value: 19200
  }
]

const homeLevel = [
  {
    label: '1级',
    value: 100
  },
  {
    label: '2级',
    value: 120
  },
  {
    label: '3级',
    value: 140
  },
  {
    label: '4级',
    value: 170
  },
  {
    label: '5级',
    value: 200
  },
  {
    label: '6级',
    value: 230
  },
  {
    label: '7级',
    value: 270
  },
  {
    label: '8级',
    value: 310
  },
  {
    label: '9级',
    value: 350
  },
  {
    label: '10级',
    value: 400
  },
  {
    label: '11级',
    value: 450
  },
  {
    label: '12级',
    value: 500
  },
  {
    label: '13级',
    value: 560
  },
  {
    label: '14级',
    value: 620
  },
  {
    label: '15级',
    value: 700
  }
]

function Times({ params, onUpdate }) {
  return (
    <Space direction="vertical">
      <InputNumber
        onChange={(value) => onUpdate(value, 'blood')}
        value={params.blood}
        type="text"
        addonBefore="血量（万）"
        addonAfter={
          <Select
            onChange={(value) => {
              onUpdate(value, 'blood')
            }}
            defaultValue={2160}
            style={{ width: 100 }}
          >
            {map(cityEnum, (item) => {
              return <Select.Option value={item.value}>{item.label}</Select.Option>
            })}
          </Select>
        }
      />
      <InputNumber
        onChange={(value) => onUpdate(value, 'bodyNum')}
        value={params.bodyNum}
        type="text"
        addonBefore="分身数量"
      />
    </Space>
  )
}

function Body({ params, onUpdate }) {
  return (
    <Space direction="vertical">
      <InputNumber
        onChange={(value) => onUpdate(value, 'blood')}
        value={params.blood}
        type="text"
        addonBefore="剩余血量（万）"
      />
      <InputNumber
        onChange={(value) => onUpdate(value, 'times')}
        value={params.times}
        type="text"
        addonBefore="剩余时间"
      />
    </Space>
  )
}

// vw转px简单计算器
function Calculating() {
  const [tab, setTab] = useState('1')
  const [result, setResult] = useState(0)
  const [params, setParams] = useState({
    level: 270,
    damage: 270 * 1.2,
    times: 60,
    blood: 2160,
    bodyNum: 0
  })
  const onChangeTab = (tab) => {
    setTab(tab)
  }

  const onUpdate = (value, type) => {
    setParams({ ...params, [type]: value })
  }

  const onSubmit = () => {
    let target = 0
    const damage = params.damage
    switch (tab) {
      case '1':
        target = Math.round((params.blood * 10000) / (params.bodyNum * damage * 40))
        break
      case '2':
        target = Math.round((params.blood * 10000) / (params.times * damage * 40))
        break
      default:
        break
    }
    setResult(target)
  }

  return (
    <>
      <InputNumber
        onChange={(value) => onUpdate(value, 'damage')}
        value={params.damage}
        type="text"
        addonBefore="伤害值"
        addonAfter={
          <>
            主城等级
            <Select
              onChange={(value) => {
                let curDamage = value
                if (value >= 450) {
                  curDamage = value * 1.4
                } else if (value >= 170) {
                  curDamage = value * 1.2
                }
                onUpdate(curDamage, 'damage')
              }}
              defaultValue={270}
              style={{ width: 100 }}
            >
              {map(homeLevel, (item) => {
                return <Select.Option value={item.value}>{item.label}</Select.Option>
              })}
            </Select>
          </>
        }
      />
      <Tabs
        activeKey={tab}
        onChange={onChangeTab}
        centered
        items={[
          {
            label: '计算剩余时间',
            key: '1',
            children: <Times params={params} onUpdate={onUpdate} />
          },
          {
            label: '计算所需分身',
            key: '2',
            children: <Body params={params} onUpdate={onUpdate} />
          }
        ]}
      />
      <Card>
        <Space direction="vertical">
          <Button onClick={onSubmit} type="primary">
            计算
          </Button>
          {`需${result}${tab === '1' ? '分钟' : '分身'}`}
        </Space>
      </Card>
    </>
  )
}

export default Calculating
