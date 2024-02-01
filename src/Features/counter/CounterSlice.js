import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    count: 0
}


const sliceCounter = createSlice({
    name: 'counter', 
    initialState,
    reducers: {
        incrementcount: (state, action) => {
        console.log(action);
        console.log(state);
            state.count = state.count + action.payload
        },
        decrementCount: (state, action) => {
            state.count = state.count - 1
        }
    }
})


export const {incrementcount , decrementCount } = sliceCounter.actions

export default sliceCounter.reducer