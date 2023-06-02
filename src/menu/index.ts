import WindowExample from './modules/windowExample'
import chatAi from './modules/chatAi'

const menu = [{
  title: '文本生成',
  icon: 'icons8-goodnotes',
  children: [chatAi],
},
{
  title: '演示',
  icon: 'sidebar-default',
  children: [
    WindowExample,
  ],
},

]

export default menu
