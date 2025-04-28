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
        setToken : (state, action) => {
            state.token = action.payload;
            console.log('Token set in Redux:', state.token);
        },
        clearToken : (state) => {
            state.token = null;
        },
    }
})

export const {setUid, clearUid, setToken, clearToken} = userSlice.actions;
export default userSlice.reducer;