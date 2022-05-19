import React from 'react'

import { MDXProvider } from '@mdx-js/react'
import { observer } from 'mobx-react'

import { CodeBlock } from '@/ui-component'

import styles from './styles/index.module.less'
const components = {
  CodeBlock
}

interface MdxProps {
  children: JSX.Element
}

function Mdx(props: MdxProps) {
  const { children } = props
  /* const onPraise = () => {
    addPraise(curMdx.id, {
      content: `+${curMdx.reactions}`
    })
  } */
  return <MDXProvider components={components}>{children}</MDXProvider>
}

export default observer(Mdx)
