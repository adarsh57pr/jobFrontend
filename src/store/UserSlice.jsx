import { createSlice } from '@reduxjs/toolkit'

let userDetails = JSON.parse(localStorage.getItem('jobPortal'))
const initialState = {
    login: userDetails? userDetails.login : false,
    token:userDetails ? userDetails.token : '',
    role:userDetails ? userDetails. role : ''
}

export const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUser: (state , action) => {
        // console.log(action.payload) //--> {msg:"", success:, token ,role} 

        state.login=true;
        state.token = action.payload.token;
        state.role = action.payload.role
    },

    logoutUser:(state,action)=>{
        localStorage.removeItem('jobPortal');
        state.login = false;
        state.role = '';
        state.token = ''
    }
  
  },
})

// Action creators are generated for each case reducer function
export const { loginUser ,logoutUser } = UserSlice.actions

export default UserSlice.reducer