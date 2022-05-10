import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface GeolocationState {
  geolocation: {
    latitude?: number;
    longitude?: number;
  };
}

const initialState: GeolocationState = {
  geolocation: {
    latitude: undefined,
    longitude: undefined,
  },
};

export const GeolocationStore = createSlice({
  name: "geolocation",
  initialState,
  reducers: {
    setGeolocation: (
      state,
      action: PayloadAction<{ latitude: number; longitude: number }>
    ) => {
      state.geolocation.latitude = action.payload.latitude;
      state.geolocation.longitude = action.payload.longitude;
    },
    resetGeolocation: (state) => {
      state.geolocation.latitude = undefined;
      state.geolocation.longitude = undefined;
    },
  },
  extraReducers: (builder) => {},
});

export const { setGeolocation, resetGeolocation } = GeolocationStore.actions;

export const GeolocationReducer = GeolocationStore.reducer;
