import { createSlice } from '@reduxjs/toolkit';

export const componentTest = createSlice({
    name: 'componentTest',
    initialState: {
        name: '',
        lastName: ''
    },
    reducers:{
        changeName: (state, action) => {
            console.log(action.payload[1])
            state.name = action.payload[0]
            state.lastName = action.payload[1]
        },
    }
})

export const { changeName } = componentTest.actions;

export const componentTestSelector = state => state.componentTest;

export default componentTest.reducer;
