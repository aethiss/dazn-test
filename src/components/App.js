import React, { Component } from 'react'

import Home from './container/home/Home'
import Header from "./common/header/Header"

export default class App extends Component {

  render() {
    return (
      <div>
        <Header />
        <main>
          <Home />
        </main>
      </div>
    )
  }
}
