import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';

function App() {
  return (
    <div className="App">
      <div id="header"><Header /></div>
      <Main />
      <div id="footer"><Footer /></div>
    </div>
  );
}

export default App;
