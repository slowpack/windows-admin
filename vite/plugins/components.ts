import components from 'unplugin-vue-components/vite'

export default function createComponents() {
  return components({
    dirs: ['src/components'],
    dts: './src/types/components.d.ts',
  })
}
