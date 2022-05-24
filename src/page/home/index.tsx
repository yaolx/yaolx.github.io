import React from 'react'
import { useNavigate, Link } from 'react-router-dom'

import { Divider, Layout } from 'antd'
import { map } from 'lodash'
import { observer } from 'mobx-react'

import { AUTHOR, homeSiderWidth } from '@/constant/global'
import { useStores } from '@/hooks'

import styles from './style/index.module.less'

const { Content, Sider } = Layout
const scene = ['博客网站', '组件库或产品的文档站点', 'React 组件的 Demo 演示']
function Home(): JSX.Element {
  const globalStore = useStores('globalStore')
  const navigate = useNavigate()
  const mdxFiles = globalStore.getMdxByGroup()
  const onClick = (file) => {
    navigate(file.path)
  }
  return (
    <Layout className={styles.layout}>
      <Sider className={styles.sider} width={homeSiderWidth}>
        <div className={styles.avatar} />
        <h1>{AUTHOR}</h1>
        <h5>实迷途其未远，觉今是而昨非</h5>
        <Divider orientation="center"> 技术栈</Divider>
        vite + typescript + mdx + mobx，纵享vite构建带来的丝滑开发体验。
        <Divider orientation="center">适用场景</Divider>
        {map(scene, (desc, index) => (
          <div className={styles.dot} key={index}>
            {index + 1}. {desc}
          </div>
        ))}
        <Divider orientation="center">
          <Link to="/md/resume">我的简历</Link>
        </Divider>
      </Sider>
      <Content className={styles.body}>
        {map(mdxFiles, (mdx, index) => {
          return (
            <div className={styles.card} key={index}>
              <span className={styles.tag}>{mdx.category}</span>
              {map(mdx.files, (file) => {
                return (
                  <div className={styles.file} key={file.path} onClick={() => onClick(file)}>
                    <Divider orientation="left">
                      <span className={styles.date}>{file.date}</span>
                    </Divider>
                    <div>{file.name}</div>
                  </div>
                )
              })}
            </div>
          )
        })}
      </Content>
      <Sider className={styles.sider} width={homeSiderWidth}>
        <Divider orientation="center">
          <Link to="/md/about">本站更多说明</Link>
        </Divider>
        <Divider orientation="center">每日警言</Divider>
      </Sider>
    </Layout>
  )
}

export default observer(Home)
