import React, { useEffect } from 'react';

import { Provider } from "react-redux";
import './App.css';
import ChatShell from './chat/shell/Chat-Shell';
import store from './reducers/store';


function App() {

  return (
    <Provider store={store}>
          <ChatShell />
    </Provider>

  );
}

export default App;
