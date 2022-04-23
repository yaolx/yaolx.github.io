import React from 'react'
import { Layout, Divider } from 'antd'
import { homeSiderWidth } from '@/constant/global'
import styles from './style/index.module.less'

const { Content, Sider } = Layout
function Home(): JSX.Element {
  return (
    <Layout className={styles.layout}>
      <Sider className={styles.sider} width={homeSiderWidth}>
        <div className={styles.avatar} />
        <h1>千禮之行</h1>
        <h5>实迷途其未远，觉今是而昨非</h5>
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
