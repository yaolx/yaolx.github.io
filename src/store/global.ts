import { makeAutoObservable } from 'mobx'

class GlobalStore {
  constructor() {
    makeAutoObservable(this)
  }

  isLogin = false

  fail = () => {
    this.isLogin = false
  }
  
  success = () => {
    this.isLogin = true
  }

}

export default new GlobalStore()
