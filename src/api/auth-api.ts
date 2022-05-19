import request from '@/config/request'
// 需要服务端开发，不然会有跨域问题
const url = 'http://github.com/login/oauth/access_token'
/**
 * @returns
 */
export async function getToken(code): Promise<Issue[]> {
  const result = await request({
    url: `${url}`,
    method: 'post',
    params: {
      // OAuth Apps对应的client_id，client_secret
      client_id: 'xxx',
      client_secret: 'xxx',
      code
    }
  })
  return result
}
