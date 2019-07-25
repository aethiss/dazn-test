import React, { Component } from 'react'

import Home from './container/home/Home'
import Header from "./common/header/Header"

import { searchMovie, generateRequestUrl } from '../coreAPI/themoviedbAPI'

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      stringSearch: '',
      searchResult: []
    }
  }

  updateSearch = (ele) => {
    const strFromSearch = ele.target.value
    if (ele.keyCode === 13 && strFromSearch.length >= 3) {

      searchMovie(generateRequestUrl('search', strFromSearch)).then((res) => {
        if (res.results) {
          this.setState({
            stringSearch: strFromSearch,
            searchResult: res.results || []
          })
        }
      })
    }
  }

  render() {
    return (
      <div>
        <Header updateSearch={this.updateSearch} />
        <main>
          <Home {...this.state}/>
        </main>
      </div>
    )
  }
}
