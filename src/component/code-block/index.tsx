import React, { useEffect, useState } from 'react'

import { CopyOutlined } from '@ant-design/icons'
import { message } from 'antd'
import copy from 'copy-to-clipboard'

import HighLight from './highlight'
import { Code } from './icons'
import styles from './styles/index.module.less'

function CodeBlock(props: CodeBlockProps) {
  const { component } = props
  const [visible, setVisible] = useState(false)
  const [code, setCode] = useState('')
  // 获取文件内容
  const getFileContent = async () => {
    const filePromise = import(`../../ui-component/${component}/demo/index.tsx?raw`)
    const content = await filePromise
    setCode(content.default)
  }
  const onCopy = () => {
    copy(code)
    message.success('代码复制成功')
  }
  useEffect(() => {
    getFileContent()
  }, [])
  return (
    <div className={styles.code_block}>
      <div className={styles.actions}>
        <div className={styles.action} onClick={onCopy} title="显示代码">
          <CopyOutlined />
        </div>
        <div
          className={styles.action}
          onClick={() => {
            setVisible(!visible)
          }}
          title="显示代码"
        >
          <Code />
        </div>
      </div>
      {visible ? (
        <HighLight className="language-tsx" style={{ overflow: 'visible', background: '#f6f8fa' }}>
          {code}
        </HighLight>
      ) : null}
    </div>
  )
}

export default CodeBlock
