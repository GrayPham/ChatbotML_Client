import { configureStore } from '@reduxjs/toolkit';
import  chatSlice  from './chatbotSlice';
import messSlice from './messSlice';
export default configureStore({
  reducer:{
    mess: messSlice,
    chat: chatSlice
  }
})