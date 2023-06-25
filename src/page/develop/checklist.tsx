import React, { useState } from 'react'

import { MinusCircleTwoTone, PlusCircleTwoTone } from '@ant-design/icons'
import { Table, Row, Col, Button } from 'antd'
import { findIndex, max, map } from 'lodash'

import { setStorage, getStorage } from '@/utils/storage'

import styles from './style/index.module.less'

interface CheckListItem {
  id: number
  title: string
}

const CACHE_KEY = 'checklist'

function CheckList(): JSX.Element {
  const [isEdit, setIsEdit] = useState(false)
  const [checklist, setChecklist] = useState<CheckListItem[]>(getStorage(CACHE_KEY))

  const removeCheckItem = (e, record: CheckListItem) => {
    const data = [...checklist]
    const pos = findIndex(data, {
      id: record.id
    })
    if (pos > -1) {
      data.splice(pos, 1)
      setChecklist(data)
    }
  }

  const setCheckItem = (e, record) => {
    const curChecklist = [...checklist]
    if (record.id) {
      const pos = findIndex(curChecklist, {
        id: record.id
      })
      if (pos > -1) {
        curChecklist[pos].title = e.target.value
      }
    }
    setChecklist(curChecklist)
  }

  const addCheckItem = () => {
    const curChecklist = [...checklist]
    const maxId = max(map(curChecklist, 'id')) || 0
    curChecklist.push({
      id: maxId + 1,
      title: ''
    })
    setChecklist(curChecklist)
  }

  const finish = () => {
    setStorage(CACHE_KEY, checklist)
    setIsEdit(false)
  }
  const columns = [
    {
      title: '序号',
      dataIndex: 'num',
      width: 100,
      key: 'num',
      className: 'check-title',
      render: (text, record) => <div style={{ textAlign: 'center' }}>{record.id}</div>
    },
    {
      title: 'checklist项',
      dataIndex: 'title',
      key: 'title',
      className: 'check-title',
      render: (text, record, index) => (
        <div key={index}>
          {isEdit && (
            <input
              type="text"
              style={{ width: '80%', height: '40px', lineHeight: '40px' }}
              value={text}
              onChange={(e) => setCheckItem(e, record)}
            />
          )}
          {!isEdit && <span>{text}</span>}
          {isEdit && (
            <MinusCircleTwoTone
              style={{ position: 'absolute', right: '15%', lineHeight: '40px' }}
              onClick={(e) => removeCheckItem(e, record)}
            />
          )}
        </div>
      )
    }
  ]
  console.log('###', checklist)
  return (
    <div className={styles.checklist}>
      <Row>
        <Col span={2} offset={16} className={styles.add}>
          {isEdit && (
            <div onClick={() => addCheckItem()}>
              <PlusCircleTwoTone />
              <span>添加check项</span>
            </div>
          )}
        </Col>
        <Col span={2} style={{ textAlign: 'right' }}>
          {!isEdit && (
            <Button type="primary" onClick={() => setIsEdit(true)}>
              编辑
            </Button>
          )}
          {isEdit && (
            <Button type="primary" style={{ marginLeft: '10px' }} onClick={finish}>
              完成
            </Button>
          )}
        </Col>
      </Row>
      <Table
        rowKey={(record) => record.id}
        columns={columns}
        dataSource={checklist}
        style={{ height: '100%', overflow: 'auto' }}
      />
    </div>
  )
}

export default CheckList
