import { addLatencyToWebsites, websites } from './useping'

addLatencyToWebsites(websites)

// eslint-disable-next-line no-console
console.log(websites)

const urlList = fetch('https://www.baidu.com').then(res => res.text())
const children = urlList.map((url, index) => ({ title: `${index}⚡️`, windowName: `OldBaby${index}`, params: { url } }))
const menus: Menu.recordRaw = {
  title: 'some',
  icon: 'icons8-chatgpt',
  children,
}

export default menus
