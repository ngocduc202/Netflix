
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Intro from './components/Intro/Intro';
import Contents from './components/contents/Contents';
import Menus from './components/Menu/Menus';
import MovieDetail from './components/MovieDetail/MovieDetail';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Contents />
      <Menus />
      <MovieDetail />
    </div>
  );
}

export default App;
