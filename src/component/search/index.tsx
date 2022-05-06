import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Select } from 'antd'
import cs from 'classnames'
import { map } from 'lodash'
import { observer } from 'mobx-react'

import { useStores } from '@/hooks'

import styles from './styles/index.module.less'
const { Option } = Select

interface SearchProps {
  handleClassSearch: (activeClass: string) => void
  activeClass: string
}

function SearchIndex(props: SearchProps) {
  const globalStore = useStores('globalStore')
  const { activeClass, handleClassSearch } = props
  const [text, setText] = useState(null)
  const navigate = useNavigate()
  const [result, setResult] = useState<RouterPops[]>([])
  /**
   * 查询
   * @param value
   */
  const handleSearch = (value) => {
    const searchMdx = globalStore.search(value)
    setResult(searchMdx)
  }
  /**
   * 选中
   * @param value
   * @param option
   */
  const handleChange = (value, option) => {
    navigate(option.path)
    setText(value)
  }
  /**
   * 聚焦
   */
  const handleFocus = () => {
    handleClassSearch('focus_active')
  }
  const handleBlur = () => {
    handleClassSearch('')
  }
  return (
    <div className={cs(styles.search, activeClass)}>
      <Select
        showSearch
        value={text}
        placeholder={'搜索文章'}
        defaultActiveFirstOption={false}
        showArrow={true}
        filterOption={false}
        onSearch={handleSearch}
        onChange={handleChange}
        notFoundContent={null}
        onFocus={handleFocus}
        onBlur={handleBlur}
        style={{ width: '100%' }}
      >
        {map(result, (mdx) => {
          return (
            <Option key={mdx.key} path={mdx.path}>
              {mdx.name}
            </Option>
          )
        })}
      </Select>
    </div>
  )
}

export default observer(SearchIndex)
