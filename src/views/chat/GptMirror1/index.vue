<script setup lang='ts'>
defineProps({
  params: {
    type: Object as PropType<{ url: string }>,
    required: true,
  },
})
</script>

<template>
  <div>
    <iframe :src="params.url" width="100%" height="100%" frameborder="0" />
  </div>
</template>

<style lang="scss" scoped>
.el-scrollbar__view {
  height: 100vh !important;

  div {
    height: 100vh !important;
  }
}
</style>
