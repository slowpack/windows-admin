<script setup lang='ts'>
const chat = ref('')
const messages = reactive<string[]>([])
const prompt = ref('')
function sendMessage() {
  messages.push(chat.value)
  fetch('http://localhost:3000/post', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ messages: chat.value, prompt: prompt.value }),
  })
    .then(response => response.text())
    .then((data) => {
    // 处理响应
      // console.log(data)
      messages.push(data)
    })
    .catch((error) => {
    // 处理错误
      console.error(error)
    })
  chat.value = ''
}
</script>

<template>
  <div>
    prompt:<input v-model="prompt" type="text">
    chat:<input v-model="chat" type="text" @keyup.enter="sendMessage">
    <ul>
      <li v-for="(message, index) in messages" :key="index">
        {{ message }}
      </li>
    </ul>
  </div>
</template>
