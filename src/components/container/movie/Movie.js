import React, { Component } from 'react'
import {generateRequestUrl, searchMovie} from "../../../coreAPI/themoviedbAPI"
import { BASE_IMG_URL_500 } from "../../../constants/movieDbUrls"

import Style from './Movie.css'

export default class Movie extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movie: false
    }
  }

  componentDidMount() {
    const { match } = this.props
    const movieId = match.params ? match.params.movieId : false

    searchMovie(generateRequestUrl('details', movieId)).then((res) => {
      this.setState({
        movie: res
      })
    })
  }

  render() {
    const { movie } = this.state
    return (
      <div>
        { !this.state.movie ?
          <div>...Loading</div> :
          <div className="movie-containe">
            <div className="box movie-title">
              <p>{movie.original_title}</p>
            </div>
            <div className="box">
              <img src={`${BASE_IMG_URL_500}${movie.poster_path}`} />
            </div>
            <div className="box movie-description">
              <p>{movie.overview}</p>
            </div>
            <div className="box movie-rating">
              {
                movie.genres && movie.genres.map((genre, key) => {
                  return <p key={key}>{genre.name}</p>
                })
              }
            </div>
          </div>
        }
      </div>
    )
  }

}
