import React  from 'react';

import { Provider } from "react-redux";
import './App.css';
import ChatShell from './chat/shell/Chat-Shell';
import store from './reducers/store';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {PayPalScriptProvider} from "@paypal/react-paypal-js"




import Login from './page/Login/Login';

function App() {
  //const [inactive, setInactive] = useState(false);

  return (
    <PayPalScriptProvider options={{"client-id": "AQqeyAy_q2XNF_CXieKGIbWLVKudTmvGQy77XjjR0zynwI8ByZf17YeoLBZYUoexosXJSqbcGhJ7O5Zp" }}>
      <Provider store={store}>

        <BrowserRouter>

          <Routes>
            <Route path="" element={<ChatShell/>}/>
            <Route path="/login" element={<Login/>}/>
          </Routes> 
        </BrowserRouter>

      </Provider>
    </PayPalScriptProvider>
  );
}

export default App;
