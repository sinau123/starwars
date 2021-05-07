import { defineStore } from 'pinia'
import { getFilms } from '@/service/filmService.js'

export default defineStore({
  id: 'film',
  // can also be defined with an arrow function if you prefer that syntax
  state() {
    return {
      // all these properties will have their type inferred automatically
      list: [],
    }
  },
  actions: {
    setList(newList) {
      this.list = newList
    },
    async setListFromAPI() {
      const getAPIData = async () => {
        try {
          const { data } = await getFilms()
          const films = data.results
          this.setList(films)
        } catch (e) {
          console.error(e)
        }
      }

      if (this.list.length > 0) {
        getAPIData()
        return
      }

      await getAPIData()
    },
  },
})
