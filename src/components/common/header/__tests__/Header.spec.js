import React from 'react'
import { shallow } from 'enzyme'

import Header from '../Header'

describe('@Header', () => {
  describe('render', () => {
    it('should render defaultheader', () => {
      const component = shallow(<Header />)
      expect(component).toMatchSnapshot()
    })
  })
})
