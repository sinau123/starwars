<template>
  <div class="container is-max-desktop">
    <div class="block"></div>
    <div class="columns is-multiline is-centered">
      <div
        class="column is-half-tablet"
        v-for="film in films"
        :key="film.title"
      >
        <div
          class="card has-text-centered has-background-dark has-text-white-ter card-film"
        >
          <div class="card-content">
            <div></div>

            <div class="content">
              <p class="title is-4 has-text-white-ter">
                {{ film.title }} ({{ getYear(film.release_date) }})
              </p>
              <p class="subtitle is-6 has-text-white-ter">
                by
                <span class="is-italic has-text-weight-semibold">{{
                  film.director
                }}</span>
              </p>
              <p class="has-text-justified is-italic desc">
                {{ film.opening_crawl }}
              </p>
              <div class="card-footer is-flex-direction-column has-text-left">
                <div class="block"></div>
                <p class="">
                  Release Date:
                  <span class="has-text-weight-semibold">{{
                    film.release_date
                  }}</span>
                </p>
                <p class="">
                  Producer:
                  <span class="has-text-weight-semibold">{{
                    film.producer
                  }}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { reactive, toRefs } from 'vue'
import { getFilms } from '@/service/filmService.js'
export default {
  setup() {
    const state = reactive({ films: [] })

    const getData = async () => {
      const { data } = await getFilms()
      console.log(data)
      state.films = data.results
    }

    getData()

    return { ...toRefs(state) }
  },

  methods: {
    getYear(date) {
      return date.substring(0, 4)
    },
  },
}
</script>

<style lang="sass" scoped>
@media screen and (min-width: 769px )
  .card-film
    min-height: 460px
</style>
