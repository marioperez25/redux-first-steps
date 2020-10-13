import { createSlice } from '@reduxjs/toolkit';

export const componentTest = createSlice({
    name: 'componentTest',
    initialState: {
        name: 'test name'
    },
    reducers:{
        changeName: (state, action) => {
            state.name = action.payload;
        },
    }
})

export const { changeName } = componentTest.actions;

export const componentTestSelector = state => state.componentTest.name;

export default componentTest.reducer;
