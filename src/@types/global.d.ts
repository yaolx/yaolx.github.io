interface Window {
  wx: {
    config: (wxConfig: {
      beta?: boolean
      debug?: boolean
      appId: string
      timestamp: string
      nonceStr: string
      signature?: string
      jsApiList: string[]
    }) => void;
    ready: (callback: () => void) => void;
    error: (callback: () => void) => void;
    chooseImage: (option: { success: (res: { localIds: string[] }) => void, sourceType: ['album', 'camera'] | ['album'] | ['camera'], error?: () => void }) => void
    getLocalImgData: (option: { localId: string, success: (res: { localData: string }) => void, error?: () => void }) => void
    previewImage: (option: { current: string, urls: string[] }) => void
    previewFile: (option: { url: string, name: string | undefined, size: number }) => void
    invoke: (command: string, option: any, callback?: () => void) => void
    checkJsApi: (option: { jsApiList: string[], success: (res: { checkResult: Record<string, boolean>, errMsg: string }) => void, error?: () => void }) => void
    scanQRCode: (option: {
      desc: string
      needResult: 1 | 0
      scanType: ['qrCode', 'barCode'] | ['qrCode'] | ['barCode']
      success: (result: string) => void
      error: (error: { errMsg: string } & object) => void
    }) => void
  }
}

/**
 * TODO: T R 反了，应该首位放result的泛型
 */
interface ApiResponseModel<T, R = ApiResponseResult<T>> {
  code: number
  message: string
  result: R
  success: boolean
  timestamp: number
}

type ApiResponseObjectModel<T> = ApiResponseModel<unknown, T>

interface ApiResponseResult<T> {
  current: number
  pages: number
  records: T[]
  searchCount: boolean
  size: number
  total: number
}

interface ApiPagination {
  pageNo: number
  pageSize: number
}

interface Dict {
  key: string
  name: string
}
