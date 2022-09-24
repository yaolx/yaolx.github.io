import React, { useEffect, useState } from 'react'

import { Layout } from 'antd'
import { observer } from 'mobx-react'

import { useStores } from '@/hooks'
import { getResizeFire, setResizeFire } from '@/service/resize-service'

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
  const { isMd, type } = props
  useEffect(() => {
    globalStore.initMdx().then(() => {
      setIsInit(true)
    })
    // 窗口大小调整，重新渲染
    const onResize = () => {
      let firstFire = getResizeFire()
      if (+firstFire === 1) {
        firstFire = setTimeout(() => {
          setResizeFire(1)
          window.location.reload()
        }, 100)
      }
    }
    window.addEventListener('resize', onResize)
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
