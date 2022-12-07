import {createSlice} from '@reduxjs/toolkit';
export const chatSlice = createSlice({
    name: 'chatbot',
    initialState:{
        id: "637f394aa90bdae5ab96b6dd",
        linkAvatar: "https://image.thanhnien.vn/w1024/Uploaded/2022/juzagt/2022_09_23/2-2190.jpg",
        title: "Chat Bot Free"
    },
    reducers:{
        updateChatbotCurrent:(state,message)=>{
            state.id = message.payload.id;
            state.linkAvatar = message.payload.linkAvatar;
            state.title = message.payload.title;

            return state;
        },

    }
})

export const {updateChatbotCurrent} = chatSlice.actions;
export default chatSlice.reducer;