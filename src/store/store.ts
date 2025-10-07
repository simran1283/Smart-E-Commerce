import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./reducers/cartSlice"
import userSlice from "./reducers/userSlice"
import { PersistedCartSlice } from "./persisted/cartPersistConfig";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'


export const store = configureStore({
    reducer: {
        cartSlice: PersistedCartSlice,
        userSlice
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})

export const Persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>;