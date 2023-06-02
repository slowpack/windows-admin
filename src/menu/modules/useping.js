const ping = require('ping')

const websites
  = [
    {
      href: 'Jinshutuan.com',
    },
    {
      href: 'Ai-node.com',
    },
    {
      href: 'Newstop.asia',
    },
    {
      href: 'Xjai.cc',
    },
    {
      href: '20200.cn',
    },
    {
      href: 'Aiyunos.top',
    },
    {
      href: 'Aidutu.cn',
    },
    {
      href: 'Xiami.monster',
    },
    {
      href: '154.12.55.27',
    },
    {
      href: 'Gpt90.com',
    },
    {
      href: 'Cytsee.com',
    },
    {
      href: 'Bnu120.space',
    },
    {
      href: 'Scorpii.net',
    },
    {
      href: 'Cutim.top',
    },
    {
      href: 'Forwardminded.xyz',
    },
    {
      href: 'Nb8.ltd',
    },
    {
      href: 'Hz-it-dev.com',
    },
    {
      href: 'Skybyte.me',
    },
    {
      href: 'Wuguokai.cn',
    },
    {
      href: 'Aieye.bio',
    },
    {
      href: 'Bamboochat.cn',
    },
    {
      href: 'Laicj.cn',
    },
    {
      href: 'Xboat.cc',
    },
    {
      href: 'Kunshanyuxin.com',
    },
    {
      href: 'Lovebaby.today',
    },
    {
      href: '121.201.123.162',
    },
    {
      href: 'Zaiwen.top',
    },
    {
      href: 'Lingdong5.com',
    },
    {
      href: 'Jubianxingqiu.com',
    },
    {
      href: 'Openai999.com',
    },
    {
      href: 'Gptdemo.net',
    },
    {
      href: 'Moeyy.cn',
    },
    {
      href: 'Chat2doc.cn',
    },
    {
      href: 'Toyaml.com',
    },
    {
      href: 'C1ns.cn',
    },
    {
      href: 'Panchuang.net',
    },
    {
      href: 'Wobcw.com',
    },
    {
      href: 'Heimoshuiyu.github.io',
    },
  ]

async function addLatencyToWebsites(websites) {
  const getLatency = async (url) => {
    try {
      const response = await ping.promise.probe(url)
      return response.alive ? response.time : -1
    }
    catch (error) {
      console.error(`Failed to ping ${url}: ${error.message}`)
      return -1
    }
  }

  // 使用 Promise.all 并行执行多个延迟检测请求
  const latencies = await Promise.all(websites.map(website => getLatency(website.href)))

  // 将结果添加到 websites 对象中并输出
  websites.forEach((website, index) => {
    const latency = latencies[index]
    website.latency = latency
    console.log(`${website.href} latency: ${latency === -1 ? 'unknown' : `${latency}ms`}`)
  })
}

addLatencyToWebsites(websites)
