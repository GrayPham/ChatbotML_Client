import {
    createAsyncThunk,
    createSlice,
  } from "@reduxjs/toolkit";
import userAPI from "../api/user";

export const login = createAsyncThunk("user/login", async (payload) => {
    const data = await userAPI.Login(payload);
      //save data to local storage
  localStorage.setItem("access_token", data.token.access_token);
  localStorage.setItem("user", JSON.stringify(data.data));
  return data.data;
});
const userSlice = createSlice({
    name: "user",
    initialState: {
        current: {},
        settings: {},
    },
    reducers: {
        signOut: (state,action) => {
          console.log('logged out');
          state.user = null;
          state.access_token = null;

          localStorage.removeItem("user");
          localStorage.removeItem("access_token");
        }
    },

});

export const {
  signOut
} = userSlice.actions;
export default userSlice;