import { searchMovie } from '../themoviedbAPI'

jest.mock('../themoviedbAPI', () => ({
  searchMovie: () => {
   return new Promise((resolve) => {
     resolve({ Id: 1 })
   })
  },
}))

describe('@searchMovied', () => {
  it("should work", async () => {
    const response = await searchMovie()
    expect(response.Id).toBe(1)
  })
})

describe('@generateRequestUrl', () => {
  // Get the unmocked generateRequestUrl method.
  const { generateRequestUrl } = require.requireActual('../themoviedbAPI')
  it('should generate a trending url', () => {
    expect(generateRequestUrl())
      .toBe('http://api.themoviedb.org/3/trending/all/day?api_key=f70db02dd395f7b2f0e354374b13d4ca')
  })
  it('should generate a movie search url', () => {
    expect(generateRequestUrl('search', 'fight'))
      .toBe('http://api.themoviedb.org/3/search/movie?api_key=f70db02dd395f7b2f0e354374b13d4ca&query=fight')
  })
  it('should generate a movie detail url', () => {
    expect(generateRequestUrl('details', '1234'))
      .toBe('http://api.themoviedb.org/3/movie/1234?api_key=f70db02dd395f7b2f0e354374b13d4ca')
  })
})
