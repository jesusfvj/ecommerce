import './App.css';
import { NavBar, MainImage, Body, Animation, Footer } from './components/index.js';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Animation />
      <MainImage />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
