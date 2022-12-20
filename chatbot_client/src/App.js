import React  from 'react';

import { Provider } from "react-redux";
import './App.css';
import ChatShell from './chat/shell/Chat-Shell';
import store from './reducers/store';
import { BrowserRouter, Route,Switch, Routes, Router } from 'react-router-dom';
import {PayPalScriptProvider} from "@paypal/react-paypal-js"




import Login from './page/Login/Login';
import CoverProfile from './component/profile/components/Cover';
import MainProfile from './component/profile/components/Main';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from './theme';

function App() {
  //const [inactive, setInactive] = useState(false);

  return (
    <PayPalScriptProvider options={{"client-id": "AQqeyAy_q2XNF_CXieKGIbWLVKudTmvGQy77XjjR0zynwI8ByZf17YeoLBZYUoexosXJSqbcGhJ7O5Zp" }}>
      <Provider store={store}>
      <ChakraProvider theme={theme}>
        <BrowserRouter>

          {/* <Routes>
            <Route path="" element={<ChatShell/>}/>
            <Route path="/login" element={<Login/>}/>
            <Switch>
              <Route path="/profile" element exact>
                <CoverProfile />
                <MainProfile />
              </Route>
            </Switch>
          </Routes>  */}
          
          
          <Routes>
                <Route path="" element={<ChatShell/>}/>
                <Route path="/profile" element={<MainProfile />}/>
                <Route path="/login" element={<Login/>}/>

          </Routes>
        </BrowserRouter>
        </ChakraProvider>
      </Provider>
    </PayPalScriptProvider>
  );
}

export default App;
