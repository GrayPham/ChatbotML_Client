import {
    createAsyncThunk,
    createSlice,
    isAnyOf
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
        signOut: (state) => {
          state.user = null;
          state.access_token = null;
          state.cart = null;
          localStorage.removeItem("user");
          localStorage.removeItem("access_token");
        }
    },
    extraReducers: (builder) => {
        builder.addMatcher(isAnyOf(login.fulfilled), (state, action) => {
          state.current = action.payload;
        });
        builder.addMatcher(isAnyOf(login.rejected), (state, action) => {
          console.log(action.payload);
        });
    }
});
export default userSlice;
export const {
  signOut
} = userSlice.actions;