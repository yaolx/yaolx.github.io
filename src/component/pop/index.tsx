import React, { useState, forwardRef, useRef, useImperativeHandle } from 'react'
import { createPortal } from 'react-dom'

import { deviceEnv } from '@/constant/global'

interface PopProps {
  showPopMenu: () => void
  children: JSX.Element
}
// 移动端菜单弹出框
function PopMenu(props: PopProps) {
  const { showPopMenu, children } = props
  return (
    <div className={`popup ${deviceEnv}`}>
      <div className="popup-mask" onClick={showPopMenu} />
      <div className="popup-body">{children}</div>
    </div>
  )
}
interface PopRef {
  children: JSX.Element
}
const Pop = forwardRef((props: PopRef, ref) => {
  const popRef = useRef<any>()
  const [visible, setVisible] = useState(false)
  function showPopMenu() {
    setVisible(!visible)
  }
  useImperativeHandle(
    ref,
    () => ({
      /* ref 打开 */
      show() {
        setVisible(true)
      },
      hide() {
        setVisible(false)
      }
    }),
    [popRef]
  )
  return visible
    ? createPortal(
      <PopMenu showPopMenu={showPopMenu}>{props.children}</PopMenu>,
      document.querySelector('body') as HTMLBodyElement
    )
    : null
})
export default Pop
