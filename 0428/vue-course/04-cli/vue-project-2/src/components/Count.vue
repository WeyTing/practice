<!--我想製作一個計數器元件-->
<!--怎麼導入App.vue-->

<script>
export default {
  data() {
    return {
      counter: 0,
    }
  },
}
</script>

<template>
  <div>
    <h2>計數器</h2>
    <span>目前計數: {{ counter }}</span>
    <button @click="counter++">+1</button>
    <button @click="counter--">-1</button>
  </div>
</template>
