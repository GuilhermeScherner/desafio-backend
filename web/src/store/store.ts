import {
  Action,
  combineReducers,
  configureStore,
  getDefaultMiddleware,
  ThunkAction,
} from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { encryptTransform } from "redux-persist-transform-encrypt";

import { GeolocationReducer, SuggestionReducer } from "./reducers";

const reducers = combineReducers({
  suggestion: SuggestionReducer,
  geolocation: GeolocationReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"],
  transforms: process.env.REACT_APP_IS_DEVELOPMENT
    ? undefined
    : [
        encryptTransform({
          secretKey: "Ke5CmEDdtCaS2FmLn2aRhwKJE7BmBARu",
        }),
      ],
};

const persistedReducer: typeof reducers = persistReducer(
  persistConfig,
  reducers
);

export const store = configureStore({
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoreState: true,
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  reducer: persistedReducer,
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export type RootState = ReturnType<typeof store.getState>;
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
