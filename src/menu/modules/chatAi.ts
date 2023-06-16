// import { addLatencyToWebsites, websites } from './useping'

// addLatencyToWebsites(websites)

// console.log(websites)

// const urlList = fetch('https://www.baidu.com').then(res => res.text())
// const children = urlList.map((url, index) => ({ title: `${index}⚡️`, windowName: `OldBaby${index}`, params: { url } }))
const menus: Menu.recordRaw = {
  title: 'some',
  icon: 'icons8-chatgpt',
  children: [
    {
      title: '老北鼻',
      icon: 'icons8-goodnotes',
      windowName: 'gptMirror',
      params: { url: 'https://url-3.ai-node.com/' },
    },
    {
      title: 'AI天蝴',
      icon: 'sidebar-default',
      windowName: 'gptMirror1',
      params: { url: 'http://chat2.aiyunos.top/' },
    },
    {
      title: 'WoChat',
      icon: 'sidebar-default',
      windowName: 'gptMirror2',
      params: { url: 'https://chat1.wobcw.com/' },
    },
    {
      title: '开放猫',
      icon: 'sidebar-default',
      windowName: 'gptMirror3',
      params: { url: 'https://openmao.panchuang.net/#/' },
    },
    {
      title: 'liao.news',
      icon: 'sidebar-default',
      windowName: 'gptMirror4',
      params: { url: 'https://liao.news/zh' },
    },
  ],
}

export default menus
