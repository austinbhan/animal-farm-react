import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import { animals } from './animalArray.js';

function App() {
  return (
    <div className="App">
      <div id="header"><Header /></div>
      <Main animals = { animals }/>
      <div id="footer"><Footer /></div>
    </div>
  );
}

export default App;
