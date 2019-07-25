import React from 'react'
import style from './SearchBox.css'

const SearchBox = (props) => {
  return (
      <input
        type="search"
        placeholder="Search"
        onKeyDownCapture={(ele) => props.updateSearch(ele)}
      />
  )
}

export default SearchBox
