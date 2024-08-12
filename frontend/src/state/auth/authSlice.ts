import { createSlice } from "@reduxjs/toolkit";

interface AuthState {
  user: {
    _id: string;
    name: string;
    username: string;
    provider: string;
    emailAddress: string;
    allowNotifications: boolean;
    image: string;
    location: string;
    biography: string;
  };
  access_token: string;
  refresh_token: string;
}

const initialAuthState: AuthState = {
  user: {
    _id: "",
    name: "",
    username: "",
    provider: "",
    emailAddress: "",
    allowNotifications: false,
    image: "",
    location: "",
    biography: "",
  },
  access_token: "",
  refresh_token: "",
};

/**
 * Authenticate
 */
const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    authenticate: (state, action) => {
      state.user = action.payload.user;
      state.access_token = action.payload.access_token;
      state.refresh_token = action.payload.refresh_token;
    },
    logout: (state) => {
      state.user = initialAuthState.user;
      state.access_token = initialAuthState.access_token;
      state.refresh_token = initialAuthState.refresh_token;
    },
  },
});

export const { authenticate } = authSlice.actions;

export default authSlice.reducer;
