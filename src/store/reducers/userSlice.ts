import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserState } from "./ReducerModel/UserModel";
import AsyncStorage from "@react-native-async-storage/async-storage"

const initialState : UserState= {
    userData : {}
}
// user Slice to maintain the use data or credentials while App is running
const userSlice = createSlice({
    name : "userData",
    initialState : initialState,
    reducers : {

        setUserData : (state,action) => {
            state.userData = action.payload
            AsyncStorage.setItem("USER_DATA", JSON.stringify(action.payload))
        }
    }
})

export const { setUserData } = userSlice.actions

export default userSlice.reducer