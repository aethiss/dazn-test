import React, { Component } from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'

import Header from './common/header/Header'
import Home from './container/home/Home'
import Movie from './container/movie/Movie'

import { searchMovie, generateRequestUrl } from '../coreAPI/themoviedbAPI'

class App extends Component {
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
          this.props.history.push("/") // reset home page in case i'm on movie details
        }
      })
    }
  }

  render() {
    return (
      <div>
        <Header updateSearch={this.updateSearch} />
        <main>
          <Switch>
            <Route exact path='/' render={() => (
              <Home {...this.state}/>
            )}/>
            <Route path='/movie/:movieId' component={Movie}/>
          </Switch>
        </main>
      </div>
    )
  }
}

export default withRouter(App)
