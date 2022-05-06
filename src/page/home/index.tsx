import React from 'react'
import { useNavigate } from 'react-router-dom'

import { Divider, Layout } from 'antd'
import { map } from 'lodash'
import { observer } from 'mobx-react'

import { homeSiderWidth } from '@/constant/global'
import { useStores } from '@/hooks'

import styles from './style/index.module.less'

const { Content, Sider } = Layout
const description = [
  'vite + typescript + mobx',
  '纵享vite构建带来的丝滑开发体验',
  'MDX 实现 markdown 和 jsx 的无缝结合，快速生成组件库文档',
  '解析md目录及文件，动态生成菜单',
  '实现md文件全局搜索功能',
  '利用gitHub Actions进行静态站构建发布'
]
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
        <h1>千禮之行</h1>
        <h5>实迷途其未远，觉今是而昨非</h5>
        <Divider orientation="center"> 技术栈介绍</Divider>
        {map(description, (desc, index) => (
          <div className={styles.dot} key={index}>
            {index + 1}. {desc}
          </div>
        ))}
        <Divider orientation="center">适用场景</Divider>
        {map(scene, (desc, index) => (
          <div className={styles.dot} key={index}>
            {index + 1}. {desc}
          </div>
        ))}
      </Sider>
      <Content className={styles.body}>
        {map(mdxFiles, (mdx) => {
          return (
            <div className={styles.card}>
              <span className={styles.tag}>{mdx.category}</span>
              {map(mdx.files, (file) => {
                return (
                  <div className={styles.file} onClick={() => onClick(file)}>
                    <Divider orientation="left">
                      <span className={styles.date}>2022-02-23</span>
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
        <Divider orientation="center">快速导航</Divider>
        <h1>千禮之行</h1>
        <h5>实迷途其未远，觉今是而昨非</h5>
        <Divider orientation="center">Left Text</Divider>
        <h1>千禮之行</h1>
        <h5>实迷途其未远，觉今是而昨非</h5>
      </Sider>
    </Layout>
  )
}

export default observer(Home)
