import {createSlice} from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {uid : null},
    reducers:{
        setUid: (state, action) => {
            state.uid = action.payload;
        },
        clearUid: (state) => {
            state.uid = null;
        },
    }
})

export const {setUid, clearUid} = userSlice.actions;
export default userSlice.reducer;