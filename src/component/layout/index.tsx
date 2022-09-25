import React, { useEffect, useState, useRef } from 'react'

import { Layout } from 'antd'
import { debounce } from 'lodash'
import { observer } from 'mobx-react'

import { useStores } from '@/hooks'

import Header from './header'
import HomeLayout from './homeLayout'
import MdLayout from './mdLayout'

interface Props {
  isMd?: boolean
  type?: string
}

function LayoutIndex(props: Props) {
  const globalStore = useStores('globalStore')
  const [isInit, setIsInit] = useState(false)
  const clientHeight = useRef(document.body.clientHeight)
  const { isMd, type } = props
  useEffect(() => {
    globalStore.initMdx().then(() => {
      setIsInit(true)
    })
    // 窗口大小调整，重新渲染
    const onResize = () => {
      if (clientHeight.current !== document.body.clientHeight) {
        window.location.reload()
      }
    }
    window.addEventListener('resize', debounce(onResize, 100))
    return () => {
      window.removeEventListener('resize', onResize)
    }
  }, [])

  if (!isInit) {
    return <></>
  }
  return (
    <Layout>
      <Header />
      {type ? <MdLayout type={type} /> : <HomeLayout isMd={isMd} />}
    </Layout>
  )
}

export default observer(LayoutIndex)
