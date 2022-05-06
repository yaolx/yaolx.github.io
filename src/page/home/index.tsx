import React from 'react'

import { Divider, Layout } from 'antd'
import { map } from 'lodash'

import { homeSiderWidth } from '@/constant/global'

import styles from './style/index.module.less'

const { Content, Sider } = Layout
const description = [
  'vite + typescript + mobx',
  '纵享vite构建带来的丝滑开发体验',
  'MDX 实现 markdown 和 jsx 的无缝结合，适用组件库文档生成',
  '解析md目录及文件，动态生成菜单',
  '实现md文件全局搜索功能',
  '利用gitHub Actions进行静态站构建发布'
]

function Home(): JSX.Element {
  return (
    <Layout className={styles.layout}>
      <Sider className={styles.sider} width={homeSiderWidth}>
        <div className={styles.avatar} />
        <h1>千禮之行</h1>
        <h5>实迷途其未远，觉今是而昨非</h5>
        <Divider orientation="center">本站说明</Divider>
        {map(description, (desc, index) => (
          <div className={styles.dot} key={index}>
            {index + 1}. {desc}
          </div>
        ))}
      </Sider>
      <Content className={styles.body}>
        <div className={styles.card}>
          <Divider orientation="left">
            <span className={styles.title}>Left Text</span>
            <span className={styles.date}>2022-02-23</span>
          </Divider>
          <div className={styles.content}>的水立方的说了句法</div>
        </div>
        <div className={styles.card}>
          <Divider orientation="left">
            <span className={styles.title}>Left Text</span>
            <span className={styles.date}>2022-02-23</span>
          </Divider>
          <div className={styles.content}>保罗上篮得分记录数据</div>
        </div>
        <div className={styles.card}>
          <Divider orientation="left">
            <span className={styles.title}>Left Text</span>
            <span className={styles.date}>2022-02-23</span>
          </Divider>
          <div className={styles.content}>上篮得分历史交锋</div>
        </div>
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

export default Home
