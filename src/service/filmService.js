import api from './baseApi'

export const getFilms = () => {
  return api.get('/films')
}

export const getFilmDetail = id => {
  return api.get('/films/' + id)
}
