import React from 'react'

import { MDXProvider } from '@mdx-js/react'
import { observer } from 'mobx-react'

import MarkMap from '@/component/mark-map'
import { CodeBlock, MdTitle, MdCard } from '@/ui-component'
const components = {
  CodeBlock,
  MdTitle,
  MdCard
}

interface MdxProps {
  children: JSX.Element
  showMindMap?: boolean
}

function Mdx(props: MdxProps) {
  const { children, showMindMap = false } = props

  return (
    <MDXProvider components={components}>
      <MarkMap showMindMap={showMindMap} />
      <div id="markdown">{children}</div>
    </MDXProvider>
  )
}

export default observer(Mdx)
