import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserState } from "./ReducerModel/UserModel";
import AsyncStorage from "@react-native-async-storage/async-storage"

const initialState : UserState= {
    userData : null,
    isLoading : true
}
// user Slice to maintain the use data or credentials while App is running
const userSlice = createSlice({
    name : "userData",
    initialState : initialState,
    reducers : {

        setUserData : (state,action) => {
            state.userData = action.payload
            AsyncStorage.setItem("USER_DATA", JSON.stringify(action.payload))
            state.isLoading = false
        },

        setLoading : (state,action) => {
            state.isLoading = action.payload
        }
    }
})

export const { setUserData, setLoading } = userSlice.actions

export default userSlice.reducer