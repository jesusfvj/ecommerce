import { Fetch } from './Fetch/Fetch';
import { Router } from './routes/Router.jsx';
import { FetchProvider } from "./context/FetchContext.jsx";

import UserProvider from './context/UserContext/UserContext';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <UserProvider>
        <BrowserRouter>
            <FetchProvider>
              <Fetch />
              <Router />
            </FetchProvider>
        </BrowserRouter>
      </UserProvider>
    </div>
  );
}

export default App;
