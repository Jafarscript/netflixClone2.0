import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: 'jafar',
};
const userSlice = createSlice({
  name: 'user',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
   login: (state, action) => {
    console.log('login reducer called');
    state.user = action.payload
   },
   logout: (state) =>{
    state.user = null
   }
  },
});

export const { login, logout} = userSlice.actions;

export const selectUser = (state) => state.counter.user;

export default userSlice.reducer;
