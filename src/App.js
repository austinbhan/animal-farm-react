import './App.css';
import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';
import Main from './components/Main/Main.js';
import { animals } from './animalArray.js';

function App() {
  return (
    <div className="App">
      <div id="Header"><Header /></div>
      <Main animal={ animals }/>
      <div id="Footer"><Footer /></div>
    </div>
  );
}

export default App;
