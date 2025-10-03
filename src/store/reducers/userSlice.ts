import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserState } from "./ReducerModel/UserModel";

const initialState : UserState= {
    userData : {}
}

const userSlice = createSlice({
    name : "userData",
    initialState : initialState,
    reducers : {

        setUserData : (state,action) => {
            state.userData = action.payload
        }
    }
})

export const { setUserData } = userSlice.actions

export default userSlice.reducer