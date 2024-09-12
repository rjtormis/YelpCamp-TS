import { configureStore } from "@reduxjs/toolkit";
import authReducer from "@/state/auth/authSlice";
import { persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import persistStore from "redux-persist/es/persistStore";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  whitelist: ["auth"],
};

const reducer = combineReducers({
  auth: authReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
