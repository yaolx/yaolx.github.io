import React from 'react'

import { MDXProvider } from '@mdx-js/react'
import { observer } from 'mobx-react'

import MarkMap from '@/component/mark-map'
import { CodeBlock, MdTitle, MdCard } from '@/ui-component'

import styles from './styles/index.module.less'
const components = {
  CodeBlock,
  MdTitle,
  MdCard
}

interface MdxProps {
  children: JSX.Element
  showMindMap?: boolean
  isResum?: boolean
}

function Mdx(props: MdxProps) {
  const { children, isResum, showMindMap = false } = props
  return (
    <MDXProvider components={components}>
      <MarkMap showMindMap={showMindMap} />
      <div id="markdown" className={isResum ? styles.isResum : ''}>
        {children}
      </div>
    </MDXProvider>
  )
}

export default observer(Mdx)
