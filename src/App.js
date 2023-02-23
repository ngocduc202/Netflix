
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Intro from './components/Intro/Intro';
import Contents from './components/contents/Contents';
import Menus from './components/Menu/Menus';
import MovieDetail from './components/MovieDetail/MovieDetail';
import { useSelector } from 'react-redux';

function App() {

  const {MoviesDetail} = useSelector(state => state.infoMovies)

  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Contents />
      <Menus />
      <MovieDetail movie={MoviesDetail} showModal={MoviesDetail ? true : false} />
    </div>
  );
}

export default App;
