import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Movies from "../../presentational/movies/Movies"
import { searchMovie, generateRequestUrl } from '../../../coreAPI/themoviedbAPI'

import style from "./Home.css"

export default class Home extends Component {
  static propTypes = {
    stringSearch: PropTypes.string,
    searchResult: PropTypes.array,
  }

  constructor(props) {
    super(props)
    this.state = {
      isLoading: false,
      movies: [],
    }
  }

  componentDidMount() {
    if (!this.props.searchResult.length) {
      // no search, we looking for a trending movies
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
  }

  render() {
    const { searchResult } = this.props
    const { isLoading, movies } = this.state

    const movieList = searchResult.length ? searchResult : movies

    return (
      <div className="HomeContainer">
        { isLoading ?
          <div>
            Loading ...
          </div> :
          <section className="movies">

            { movieList.map((movie) => {
              return(
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
