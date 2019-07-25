import React, { Component } from 'react'

import Movies from "../../presentational/movies/Movies"
import { searchMovie, generateRequestUrl } from '../../../coreAPI/themoviedbAPI'


export default class Home extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isLoading: false,
      movies: [],
    }
  }

  componentDidMount() {
    this.setState({
      isLoading: true
    })
    searchMovie(generateRequestUrl()).then((res) => {
      this.setState({
        isLoading: false,
        movies: res.results
      })
    })
  }

  render() {
    const { isLoading, movies } = this.state

    return (
      <div className="HomeContainer">
        { isLoading ?
          <div>
            Loading ...
          </div> :
          <section className="movies">
            { movies.map((movie) => {
              return (
                <div key={movie.id} className="movie-card">
                  <Movies {...movie} />
                </div>
              )
              })
            }

          </section>
        }
      </div>
    )
  }
}
