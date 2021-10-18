import React from 'react'
import { MobXProviderContext } from 'mobx-react'
import globalStore from '@/store/global'

const _store = {
  globalStore
}

export type StoreType = typeof _store

// 声明 store 类型
interface ContextType {
  stores: StoreType
}

// 这两个是函数声明，重载
function useStores(): StoreType
function useStores<T extends keyof StoreType>(storeName: T): StoreType[T]

/**
 * 获取根 store 或者指定 store 名称数据
 * @param storeName 指定子 store 名称
 * @returns typeof StoreType[storeName]
 */
function useStores<T extends keyof StoreType>(storeName?: T) {
  // 这里的 MobXProviderContext 就是上面 mobx-react 提供的
  const rootStore = React.useContext(MobXProviderContext)
  const { stores } = rootStore as ContextType
  return storeName ? stores[storeName] : stores
}

export { useStores }
