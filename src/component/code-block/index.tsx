import React from 'react'

import { CopyOutlined } from '@ant-design/icons'
import { message } from 'antd'
import copy from 'copy-to-clipboard'

import HighLight from './highlight'
import styles from './styles/index.module.less'
function CodeBlock(props: CodeBlockProps) {
  const { children, className = 'language-tsx', component } = props
  // 复制到剪切板
  const onCopy = () => {
    copy(children)
    message.success('代码复制成功')
  }
  return (
    <div className={styles.code_block}>
      <div className={styles.actions}>
        <div className={styles.action} onClick={onCopy} title="复制代码">
          <CopyOutlined />
        </div>
        {/* <div
          className={styles.action}
          onClick={() => {
            setVisible(!visible)
          }}
          title="显示代码"
        >
          <Code />
        </div> */}
      </div>
      <HighLight className={className} style={{ overflow: 'visible', background: '#f6f8fa' }}>
        {component || children}
      </HighLight>
    </div>
  )
}

export default CodeBlock
