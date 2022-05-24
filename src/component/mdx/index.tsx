import React from 'react'

import { MDXProvider } from '@mdx-js/react'
import { observer } from 'mobx-react'

import { CodeBlock, MdTitle, MdCard } from '@/ui-component'

const components = {
  CodeBlock,
  MdTitle,
  MdCard
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
