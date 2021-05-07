<template>
  <h1>{{ msg }}</h1>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank"> Vite Documentation </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
  </p>

  <button @click="count++">count is: {{ count }}</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
  <p v-for="film in films" :key="film.title">{{ film.title }}</p>
</template>

<script>
import { reactive, toRefs } from 'vue'
import { getFilms } from '@/service/filmService.js'

export default {
  setup(props) {
    const { msg } = toRefs(props)
    const state = reactive({ count: 0, films: [] })

    const getData = async () => {
      const { data } = await getFilms()
      console.log(data)
      state.films = data.results
    }

    getData()

    return { ...toRefs(state), msg }
  },
}
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
