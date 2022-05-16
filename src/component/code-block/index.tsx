import React, { useState } from 'react'

import { CopyOutlined } from '@ant-design/icons'
import { message } from 'antd'
import copy from 'copy-to-clipboard'

import files from '@/constant/file'

import HighLight from './highlight'
import { Code } from './icons'
import styles from './styles/index.module.less'
function CodeBlock(props: CodeBlockProps) {
  const { component } = props
  const [visible, setVisible] = useState(false)
  // 复制到剪切板
  const onCopy = () => {
    copy(files[component])
    message.success('代码复制成功')
  }

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
          {files[component]}
        </HighLight>
      ) : null}
    </div>
  )
}

export default CodeBlock
