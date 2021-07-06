<template>
  <section class="hero is-dark is-fullheight">
    <!-- Hero content: will be in the middle -->
    <div class="hero-body">
      <div class="container has-text-centered">
        <h1 class="title is-1">STARWARS Encyclopedia</h1>
      </div>
    </div>
  </section>

  <div ref="reveal" class="container is-max-desktop has-text-centered">
    <div class="block"></div>
    <div class="columns is-multiline is-centered">
      <div v-for="item in data" :key="item" class="column is-half-tablet">
        <router-link :to="{ name: item }">
          <div class="card">
            <div class="card-image">
              <figure class="image is-4by3">
                <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image" />
              </figure>
            </div>
            <div class="card-content">
              <div class="content">
                <p class="title is-capitalized">
                  {{ item }}
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
                  <a>@bulmaio</a>.
                  <a href="#">#css</a>
                </p>
                <a href="#">#responsive</a>
                <br />
              </div>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
import scrollreveal from 'scrollreveal'

export default {
  setup() {
    const state = reactive({
      data: ['people', 'planets', 'films', 'starships', 'vehicles', 'species'],
    })

    return { ...toRefs(state) }
  },
  mounted() {
    scrollreveal().reveal(this.$refs.reveal, {
    scale: 0.85,
    duration: 1000,
    reset: true
})
  }
}
</script>

<style></style>
