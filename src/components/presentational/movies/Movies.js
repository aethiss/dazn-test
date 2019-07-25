import React from 'react'

import { BASE_IMG_URL_200 } from '../../../constants/movieDbUrls'

const Movies = (props) => {

  const { id, poster_path, name, original_title, vote_average } = props

  return (
    <div>
      <div className="movie-image">
        <img src={`${BASE_IMG_URL_200}${poster_path}`} />
      </div>
      <div className="movie-info">
        <span className="movie-title">{name || original_title}</span>
        <span className="movie-rating">Rating : {vote_average}</span>
      </div>
    </div>
  )
}

export default Movies
