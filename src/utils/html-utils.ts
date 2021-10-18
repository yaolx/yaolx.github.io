import { replace } from 'lodash'
export function genDangerouslySetInnerHTML(html: string) {
  return {
    __html: html
  }
}
/**
 * textarea换行显示问题转义
 * @export
 * @param {string} html
 * @returns
 */
export function genTextAreaSetInnerHTML(html: string) {
  // textArea 有换行，显示的时候需要转成<br />
  if (html.indexOf('\n') > -1 || html.indexOf('\r') > -1) {
    html = replace(html, /\r?\n/g, '<br />')
  }
  return {
    __html: html
  }
}
