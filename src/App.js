import "./components/index.js";
import "./pages/index.js";
import './App.css';
import { Router } from './routes/Router.jsx';

function App() {
  return (
    <div className="App">
      <Router />
    </div>
  );
}

export default App;
