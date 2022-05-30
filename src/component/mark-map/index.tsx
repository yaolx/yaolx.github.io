import React, { useEffect, useState } from 'react'

import { CloseOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import { Transformer } from 'markmap-lib'
import * as markmap from 'markmap-view'

import files from '@/constant/file'

import styles from './styles/index.module.less'

interface MapProps {
  showMindMap?: boolean
}
function genMap() {
  const transformer = new Transformer()
  const { root, features } = transformer.transform(files.techmdx)
  const { styles, scripts } = transformer.getUsedAssets(features)
  const { Markmap, loadCSS, loadJS } = markmap
  if (styles) loadCSS(styles)
  if (scripts) loadJS(scripts, { getMarkmap: () => markmap })
  Markmap.create('#markmap', undefined, root)
}

function MarkMap(props: MapProps) {
  const { showMindMap } = props
  const [visible, setVisible] = useState(false)
  const showMarkMap = () => {
    setVisible(!visible)
  }
  useEffect(() => {
    if (visible) {
      genMap()
    }
  }, [visible])
  return (
    <>
      {showMindMap ? (
        <Button onClick={showMarkMap}>{visible ? '关闭' : '打开'}思维导图</Button>
      ) : null}
      {visible ? (
        <div className={styles.mind}>
          <CloseOutlined onClick={showMarkMap} className={styles.button} />
          <svg id="markmap" className={styles.map}></svg>
        </div>
      ) : null}
    </>
  )
}
export default MarkMap
