export function setResizeFire(fire) {
  window.localStorage.setItem('resize_fire', fire)
}

export function getResizeFire() {
  // 获取search中的参数
  return window.localStorage.getItem('resize_fire') || 1
}
