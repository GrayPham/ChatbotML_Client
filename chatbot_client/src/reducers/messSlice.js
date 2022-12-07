import {createSlice} from '@reduxjs/toolkit';
var currentdate = new Date(); 
var datetime = currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
export const messSlice = createSlice({
    name: 'messages',
    initialState:[{
        message: "Hello, world",
        type: "bot",
        time: datetime
    }],
    reducers:{
        INPUT_SUCCESS:(state,message)=>{
            console.log(state)
            state = [ { message: message.payload, type: "user" , time: datetime},...state];
            return state;
        },
        MESSAGE_SUCCESS:(state,message) =>{
            console.log(state)
            state = [ { message: message.payload, type: "bot" , time: datetime},...state];
            return state;
        },
        MESSAGE_CLEAR:(state,message) =>{
            state = [{
                message: message.payload,
                type: "bot",
                time: datetime
            }];
            return state;
        }
    }
})

export  const {INPUT_SUCCESS,MESSAGE_SUCCESS,MESSAGE_CLEAR} = messSlice.actions;
export default messSlice.reducer;