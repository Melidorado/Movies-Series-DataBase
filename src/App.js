import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import NotFound from './components/NotFound';
import Nav from './views/Nav';
import Search from './views/Search';
import Movies from './views/Movies';
import Series from './views/Series';
import Home from './views/Home';
import MovieDetail from './components/MovieDetail';
import SerieDetail from './components/SerieDetail';
import PersonDetail from './components/PersonDetail';

import EspecificCategory from "./components/EspecificCategory";

import { ThemeProvider, createGlobalStyle } from 'styled-components'

import { theme } from './styles/theme';

const GlobalStyle = createGlobalStyle`
  body, h1, h2, h3, h4, h5, h6, p, ul, li {
    margin: 0
  }
  * {
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
    color: #FFFFFF;
  }
  a:visited{
    color: #FFFFFF;
  }
  body {
    font-family: "Helvetica"
  }
`


function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <ThemeProvider theme={theme}>

      <Router>
        <Nav/>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/movies" component={Movies}></Route>
        <Route exact path="/:media/:category" component={EspecificCategory}></Route>
        <Route exact path="/movie/:movieId/:info" component={MovieDetail}></Route>
        <Route exact path="/series" component={Series}></Route>
        <Route exact path="/serie/:serieId/:info" component={SerieDetail}></Route>
        <Route exact path="/person/:personId/:info" component={PersonDetail}></Route>
        <Route exact path="/search/multi/:query" component={Search}></Route>
        <Route exact path="" component={NotFound}></Route>
      </Router>

      </ThemeProvider>
     
    </div>
  );
}

export default App;
