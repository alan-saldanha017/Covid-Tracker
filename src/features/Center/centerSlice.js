import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    centers:[]
};

const centerSlice= createSlice({
    name:"center",
    initialState,
    reducers:{
        setCenterDetails:(state,action)=>{
            state.centers = action.payload;
        }
    }
})

export const {setCenterDetails}= centerSlice.actions;
export const selectCenter =(state) => state.center.centers;
export default centerSlice.reducer;
