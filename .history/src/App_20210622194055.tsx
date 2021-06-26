import { createContext, useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { NewRoom } from './pages/NewRoom';
import { Home } from './pages/Home';

export const TestContext = createContext('');

function App() {
  const [ value, setValue ] = useState('Teste');
  return (
    <BrowserRouter> 
      <TestContext.Provider value={value}>
        <Route path="/" exact component={Home}/>
        <Route path="/rooms/new" component={NewRoom}/>
      </TestContext.Provider>
    </BrowserRouter>
  );
}

export default App;