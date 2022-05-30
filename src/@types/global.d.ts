interface Window {
  markmap: any
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
