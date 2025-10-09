import AsyncStorage from "@react-native-async-storage/async-storage"
import cartSlice from "../reducers/cartSlice"
import { persistReducer } from "redux-persist"

const cartPersistConfig = {
    key: "cart",
    storage: AsyncStorage,
    whitelist: ["itemsByUser", "currentUserId"]
}

export const PersistedCartSlice = persistReducer(cartPersistConfig, cartSlice)