const fs = require('node:fs')
const path = require('node:path')

// 循环创建文件夹
for (let i = 1; i <= 20; i++) {
  const folderName = `GptMirror${i}`
  const folderPath = path.join(__dirname, folderName)

  // 检查文件夹是否存在
  if (fs.existsSync(folderPath)) {
    console.log(`文件夹 ${folderName} 已存在，跳过创建。`)
    continue
  }

  // 创建文件夹
  fs.mkdirSync(folderPath)
  console.log(`创建文件夹 ${folderName} 成功。`)

  const indexVuePath = path.join(__dirname, 'tem.vue')

  // 检查 index.vue 是否存在
  if (!fs.existsSync(indexVuePath)) {
    console.log('无法找到 tem.vue 文件。')
    continue
  }

  const destinationPath = path.join(folderPath, 'index.vue')

  // 复制 tem.vue 到目标文件夹
  fs.copyFileSync(indexVuePath, destinationPath)
  console.log(`复制 tem.vue 到文件夹 ${folderName} 成功。`)
}
