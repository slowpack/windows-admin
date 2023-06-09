import WindowExample from './modules/windowExample'
import chatAi from './modules/chatAi'
import businessModel from './modules/businessModel'

const menu = [{
  title: '文本生成',
  icon: 'icons8-goodnotes',
  children: [chatAi, businessModel],
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
