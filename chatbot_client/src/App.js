import React, { useEffect, useState } from 'react';

import { Provider } from "react-redux";
import './App.css';
import ChatShell from './chat/shell/Chat-Shell';
import store from './reducers/store';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './component/login/Login';


import Navbar from './component/header/Navbar.jsx';
import SideMenu from './component/menu/SideMenu';

function App() {
  const [inactive, setInactive] = useState(false);
  return (
    <Provider store={store}>
    
    <BrowserRouter>
      <SideMenu
          onCollapse={(inactive) => {
            console.log(inactive);
            setInactive(inactive);
          }}
      />
      { <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/" element={<ChatShell/>}/>
        <Route path="" element={<ChatShell/>}/>
      </Routes> }
    </BrowserRouter>
          
    </Provider>

  );
}

export default App;
