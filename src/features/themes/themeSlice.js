import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        value:'b',
    },
    reducers:{
        changerTheme:(state,action)=>{
            state.value = action.payload;
        },
    }
})

export const { changerTheme } = themeSlice.actions
export default themeSlice.reducer