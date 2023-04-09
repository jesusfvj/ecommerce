import { Fetch } from './Fetch/Fetch';
import { Router } from './routes/Router.jsx';
import { FetchProvider } from "./context/FetchContext.jsx";
import { AuthContextProvider } from "./context/AuthContext.jsx";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
      <FetchProvider>
        <Fetch />
        <Router />
      </FetchProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
