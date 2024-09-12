import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Landing from "./pages/Landing";
// import ThemeProvider from "./context/ThemeProvider";
import Login from "./pages/Login";
import DashboardLayout from "./layouts/DashboardLayout";
import Main from "./pages/Dashboard/Main";
import Inbox from "./pages/Dashboard/Inbox";
import Profile from "./pages/Dashboard/Profile";
import Listing from "./pages/Dashboard/Listing/Listing";
// import Campground from "./pages/Dashboard/Campground";
import ListingLayout from "./layouts/ListingLayout";
import Campground from "./pages/Dashboard/Campground";
import { Provider } from "react-redux";
import { persistor, store } from "@/state/store";
import { PersistGate } from "redux-persist/integration/react";
import NewCampground from "./pages/Dashboard/NewCampground";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route index element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<Main />} />
        <Route path="inbox" element={<Inbox />} />
        <Route path="profile" element={<Profile />} />
        <Route path="listings" element={<ListingLayout />}>
          <Route index element={<Listing />} />
          <Route path=":id" element={<Campground />} />
          <Route path="new" element={<NewCampground />} />
        </Route>
      </Route>
    </>
  )
);

function App() {
  return (
    <>
      {/* <ThemeProvider> */}
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <RouterProvider router={router} />
        </PersistGate>
      </Provider>
      {/* </ThemeProvider> */}
    </>
  );
}

export default App;
