import request from '@/config/request'

/**
 * @returns
 */
export async function getIssues(): Promise<Issue[]> {
  const result = await request({
    url: '/issues',
    method: 'get'
  })
  return result
}

/**
 * @returns
 */
export async function addPraise(id, data): Promise<Issue> {
  const result = await request({
    url: `/issues/${id}/reactions`,
    method: 'post',
    data
  })
  return result
}
