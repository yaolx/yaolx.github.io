import React from 'react'

import { LikeOutlined } from '@ant-design/icons'
import { MDXProvider } from '@mdx-js/react'
import { observer } from 'mobx-react'

import { addPraise } from '@/api/issue-api'
import { useStores } from '@/hooks'
import { CodeBlock } from '@/ui-component'

import styles from './styles/index.module.less'
const components = {
  CodeBlock
}

interface MdxProps {
  children: JSX.Element
}

function Mdx(props: MdxProps) {
  const globalStore = useStores('globalStore')
  const { curMdx } = globalStore
  const { children } = props
  const onPraise = () => {
    addPraise(curMdx.id, {
      content: `+${curMdx.reactions}`
    })
  }
  console.log('like', curMdx)
  return (
    <MDXProvider components={components}>
      {children}
      <div className={styles.reactions} onClick={onPraise}>
        <LikeOutlined className={styles.like} />
        {curMdx.reactions}
      </div>
    </MDXProvider>
  )
}

export default observer(Mdx)
