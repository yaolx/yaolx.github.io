import React from 'react'
import PropTypes from 'prop-types'

type IProps = {
  name: string
  onClick: () => void
}

const Hello = (props: IProps) => {
  console.log('hello render')
  return <div onClick={props.onClick}>hello {props.name}</div>
}

export default Hello
