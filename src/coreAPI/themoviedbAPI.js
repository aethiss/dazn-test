import {
  BASE_URL,
  APIKEY,
  TRENDING_URL,
  MOVIE_SEARCH,
  MOVIE_URL } from '../constants/movieDbUrls'

export const searchMovie = (getUrl) => {
  return new Promise((resolve, reject) => {
    fetch(getUrl, {
      method: 'GET',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
    })
    .then((resp) => resp.json())
      .then((data) => {
        // console.log('DATA ===> ', data)
        resolve(data)
      })
      .catch((err) => {
        // console.log('error ::::: ', err)
        reject(err)
      })
  })
}

export const generateRequestUrl = (type = 'trending', value = '') => {
  switch(type) {
    case 'search':
      return `${BASE_URL}${MOVIE_SEARCH}?api_key=${APIKEY}&query=${value}`
      break;
    case 'details':
      // code block movie_id
      return `${BASE_URL}${MOVIE_URL}/${value}?api_key=${APIKEY}`
      break;
    default:
    return `${BASE_URL}${TRENDING_URL}?api_key=${APIKEY}`
  }
}
