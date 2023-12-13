export const BASE_URL = 'https://api.themoviedb.org/3'
export const MOVIE_DETAIL_URL = `${BASE_URL}/movie`
export const MOVIE_LIST_URL = `${BASE_URL}/discover/movie`
export const MOVIE_SEARCH_URL = `${BASE_URL}/search/movie`

export const IMAGE_URL = `https://image.tmdb.org/t/p/`
export const ACCESS_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMzRhY2Y1Y2JkMDgxZDBhZWJiNzllODYwMTlhNGQ1OCIsInN1YiI6IjYyN2Y0N2FlMGQ1ZDg1MDA1MGE0NmFhNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KlP0J7uytsf86zkKzbBvEdQgnl9C0F6ZUT3XcUkp4Yw'

export const GET_MOVIE_SEARCH_URL = (search : string, pageNo : number) : string => `${BASE_URL}/search/movie?include_adult=false&&sort_by=popularity.desc&query=${search}&page=${pageNo}`

export const GET_MOVIE_LIST_URL = (pageNo : number) : string => `${BASE_URL}/discover/movie?include_adult=false&&sort_by=popularity.desc&page=${pageNo}`
