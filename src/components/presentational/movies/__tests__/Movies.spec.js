import React from 'react'
import { shallow, mount } from 'enzyme'

import Movies from '../Movies'

jest.mock('react-router-dom')

const props = {
  id: 1234,
  poster_path: 'path_image.png',
  name: 'title',
  original_title: 'original title',
  vote_average: 'vote_average'
}

describe('@Movies', () => {
  describe('render', () => {
    it('should render default Movie list detail', () => {
      const component = shallow(<Movies {...props} />)
      expect(component).toMatchSnapshot()
    })
  })
})
