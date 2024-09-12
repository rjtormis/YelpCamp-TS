import { createSlice } from "@reduxjs/toolkit";

export interface AuthState {
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
    createdAt: string;
    reviews: string[];
    campgrounds: string[];
    visitedCampsites: string[];
    favoriteCampsites: string[];
    updatedAt: string;
    __v: number;
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
    allowNotifications: true,
    image: "",
    location: "",
    biography: "",
    createdAt: "",
    reviews: [],
    favoriteCampsites: [],
    visitedCampsites: [],
    campgrounds: [],
    updatedAt: "",
    __v: 0,
  },
  access_token: "",
  refresh_token: "",
};

// {
//   _id: '66e2ebb0d7e705c05a3e3e79',
//   name: 'test1234',
//   username: 'test1234',
//   provider: 'DEFAULT',
//   emailAddress: 'test@example.us',
//   allowNotifications: true,
//   image: '',
//   reviews: [],
//   campgrounds: [],
//   favoriteCampsites: [],
//   visitedCampsites: [],
//   createdAt: '2024-09-12T13:25:04.454Z',
//   updatedAt: '2024-09-12T13:25:04.454Z',
//   __v: 0
// }

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

export const { authenticate, logout } = authSlice.actions;

export default authSlice.reducer;
