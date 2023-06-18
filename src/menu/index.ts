import chatAi from './modules/chatAi'
import businessModels from './modules/businessModel'
import openSourceModels from './modules/openSourceModels'
import paintingAI from './modules/paintingAI'
import modelsApi from './modules/modelsApi'

const menu = [{
  title: '文本生成',
  icon: 'icons8-goodnotes',
  children: [chatAi, businessModels, modelsApi, openSourceModels],
},
{
  title: '绘画',
  icon: 'sidebar-default',
  children: [
    paintingAI,
  ],
},

]

export default menu
