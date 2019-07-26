# Dazn Test (Movies Search Web App)
>This is a small react app for search movies/tv series and read descriptions/details about it.
  - React 16
  - Webpack 4
  - Jest unit test
  - responsive css
  - TheMovieDbAPI (https://www.themoviedb.org)
  
![mobile](https://github.com/aethiss/dazn-test/blob/master/assets/mobile.png)
![desktop](https://github.com/aethiss/dazn-test/blob/master/assets/desktop.png)

### How to install and start !
  - Clone locally this repo
  - cd dazn-test (or your cloned folder)
  - npm install (or yarn.). Npm 6+, node 10X+ (should work also with node 8x)
  - npm start
  - Open Browser : http://localhost:8080/ (webpack should open automatic after "npm start")

### Usage
   - Search (min 4 characters) a movie or tv show
   - click on the movie list to read the details

# --- Documentations ---

### React 16
[React Facebook](https://reactjs.org/) 
> The application is a SPA, designed using react library (no server-side-render)
> The structure of the app is the basic/common with src folder.

- src
  - components
    - containers (react component with logic)
    - common (here all the reusable components)
    - presentational (functional component only for render content)
  - constants (constant and some defined paths from TheMovieDbAPI)
  - coreAPI (logic to interface with the TheMovieDbAPI rest service)
- assets (images)

The libraries used :

- react-router-dom : Just for add a **very small example** of routing
- babel: transpile ES6 code (https://babeljs.io/)
- babel/plugin-proposal-class-properties (babel plugin)

- TODO : avoid re-render home page after routing redirect @ /
- TODO : create a reusable/common component for loader
 
---------------

### Tests (Jest + Enzyme)
**Usage: npm run test**

> all the components/functions are covered by unit test, follow the good practise of TDD.
> Every folder include a __ tests __ folder with a xxx.spec.js file. 
> Jest is configured to run all test and apply some basic option reusable foreach test

- src/setupTests.js (test config file)

libraries :

jest (https://jestjs.io)

enzyme (https://airbnb.io/enzyme/docs/api/)

---------------

### WebPack

> I used webpack in order to compile JavaScript module and a mini-server for run (with hot-reloading)
> the app on localhost.

The WebPack Configuration on the root folder : ./webpack.config.js

The rules compile the javascript and the css on src/ folder

The plugins used is "html-webpack-plugin", in order to use a root html page (./src/index.html)

The React root is : src/index.js

commands via package.json

- npm start : run develop version
- npm run build : build app for production, create a dist folder (in .gitIgnore)

--------------

### Css and Design

> The web app is full responsive, and adapt the view based on the viewport (considering 720px the common mobile view)

WebPack parse each .css file on the ./src folders.

The react components includes the css files in order to apply a dedicated style foreach component design.

Home (the main page) style include some global rules also for the responsive design

The Movie cards position are styled using the Flex css rules (https://developer.mozilla.org/it/docs/Web/CSS/flex)

The Design is tested on Chrome/Safari and Ios/Android mobile devices.


-------------

### Movies database API

> I used TheMovieDbAPI (https://www.themoviedb.org) in order to search movies/tv Show. 
> Search based on string and details of movies

Link to API : https://developers.themoviedb.org/3/getting-started/introduction

API used :

- search : https://developers.themoviedb.org/3/movies/get-movie-lists (GET)
- details : https://developers.themoviedb.org/3/movies/get-movie-details (GET)
- trending : https://developers.themoviedb.org/3/trending/get-trending (GET)

All the requests require a API_KEY. The amount of request per hour is limited on free tier.

TODO : the api_key is saved as a constant (just for save time), on real app should be saved as a Environment Variable 

The api request are managed by: src/coreAPI/themoviedbAPI.js

searchMovie : return a promise with a list of movies using Fetch (https://developer.mozilla.org/it/docs/Web/API/Fetch_API/Using_Fetch)

generateRequestUrl : helper function in order to create the correct get request string.

TODO: add design/style if error or timeout


-------------

### Git Strategy

I created with the firsts commits the base app.

All of the milestone are tagged (https://git-scm.com/book/en/v2/Git-Basics-Tagging)

Each new pieces is a new pull request, tested and then merged into the master branch. (https://help.github.com/en/articles/about-pull-requests)

Merged pull requests list: https://github.com/aethiss/dazn-test/pulls?q=is%3Apr+is%3Aclosed


--------------
Author: Enzo D'Onofrio - Time spent about 3h something.
