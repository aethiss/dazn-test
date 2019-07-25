export const BASE_URL = 'http://api.themoviedb.org/3'

/**
 ** TODO: this should be on ENV variable,
 ** TODO: we leave here just for speed on this test
 **/
export const APIKEY = 'f70db02dd395f7b2f0e354374b13d4ca'

export const TRENDING_URL = '/trending/all/day'
export const MOVIE_URL = '/movie'

/** movie search example
// api.themoviedb.org/3/search/movie?
// api_key=f70db02dd395f7b2f0e354374b13d4ca
// &query=fight
**/
export const MOVIE_SEARCH = '/search/movie'


/** This is the link we can use for remote image, according with the API docs
 * BASE_URL + SIZE (200 || 500) + DYNAMIC_IMAGE
 * **/
// Example https://image.tmdb.org/t/p/w200/xRWht48C2V8XNfzvPehyClOvDni.jpg
export const BASE_IMG_URL_200 = 'http://image.tmdb.org/t/p/w200'
export const BASE_IMG_URL_500 = 'http://image.tmdb.org/t/p/w500'
