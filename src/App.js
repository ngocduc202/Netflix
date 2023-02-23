
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Intro from './components/Intro/Intro';
import Contents from './components/contents/Contents';
import Menus from './components/Menu/Menus';
import MovieDetail from './components/MovieDetail/MovieDetail';
import { useSelector } from 'react-redux';
import Home from './components/Pages/Home';
import { BrowserRouter , Routes ,Route} from 'react-router-dom';
import Search from './components/Pages/Search';

function App() {

  const {MoviesDetail} = useSelector(state => state.infoMovies)

  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/search' element={<Search />} />
      </Routes>
      </BrowserRouter>
      {/* <Intro />
      <Contents />
      <Menus />
      <MovieDetail movie={MoviesDetail} showModal={MoviesDetail ? true : false} /> */}
      {/* <SearchMovies /> */}
      {/* <Home /> */}
    </div>
  );
}

export default App;
