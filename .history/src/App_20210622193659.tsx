import { createContext } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { NewRoom } from './pages/NewRoom';
import { Home } from './pages/Home';

export const TextContext = createContext('');

function App() {
  return (
    <BrowserRouter> 
      <TextContext.Provider value={'Teste'}>
        <Route path="/" exact component={Home}/>
        <Route path="/rooms/new" component={NewRoom}/>
      </TextContext.Provider>
    </BrowserRouter>
  );
}

export default App;
