export function getStorage(key) {
  const data = window.localStorage.getItem(key)
  return data ? JSON.parse(data) : ''
}

export function setStorage(key, data) {
  window.localStorage.setItem(key, JSON.stringify(data))
}
