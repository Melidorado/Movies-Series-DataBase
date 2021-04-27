import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Link} from "react-router-dom";

import NotFound from './components/NotFound';
import Nav from './components/Nav';
import Search from './components/Search';
import Movies from './components/Movies';
import Series from './components/Series';
import Home from './components/Home';
import MoviesEspecificCategory from './components/MoviesEspecificCategory';
import SeriesEspecificCategory from './components/SeriesEspecificCategory';
import MovieDetail from './components/MovieDetail';
import SerieDetail from './components/SerieDetail';
import PersonDetail from './components/PersonDetail';


function App() {
  return (
    <div className="App">
      <Router>
        <Nav/>
        <Route exact path="/home" component={Home}></Route>
        <Route exact path="/movies" component={Movies}></Route>
        <Route exact path="/movies/:category/page/:pageNumber" component={MoviesEspecificCategory}></Route>
        <Route exact path="/movie/:movieId/:info" component={MovieDetail}></Route>
        <Route exact path="/series" component={Series}></Route>
        <Route exact path="/series/:category/page/:pageNumber" component={SeriesEspecificCategory}></Route>
        <Route exact path="/serie/:serieId/:info" component={SerieDetail}></Route>
        <Route exact path="/person/:personId/:info" component={PersonDetail}></Route>
        <Route exact path="/search/:search/page/:pageNumber" component={Search}></Route>
        <Route exact path="" component={NotFound}></Route>
      </Router>
     
    </div>
  );
}

export default App;
