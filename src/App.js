
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Intro from './components/Intro/Intro';
import Contents from './components/contents/Contents';
import Menus from './components/Menu/Menus';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Contents />
      <Menus />
    </div>
  );
}

export default App;
