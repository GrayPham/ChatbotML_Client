import {createSlice} from '@reduxjs/toolkit';
export const chatSlice = createSlice({
    name: 'chatbot',
    initialState:{
        id: "63a5de891f45485cc78a0098",
        linkAvatar: "https://www.shutterstock.com/image-vector/cute-robot-character-mascot-vector-600w-2028708701.jpg",
        title: "Chat Bot Free",
        price: 0
        
    },
    reducers:{
        updateChatbotCurrent:(state,message)=>{
            state.id = message.payload.id;
            state.linkAvatar = message.payload.linkAvatar;
            state.title = message.payload.title;
            state.price = message.payload.price;
            return state;
        },

    }
})

export const {updateChatbotCurrent} = chatSlice.actions;
export default chatSlice.reducer;