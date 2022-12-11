import { configureStore } from '@reduxjs/toolkit';
import  chatSlice  from './chatbotSlice';
import messSlice from './messSlice';
import userSlice from './userSlice';
export default configureStore({
  reducer:{
    mess: messSlice,
    chat: chatSlice,
    user: userSlice
  }
})