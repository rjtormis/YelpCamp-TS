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

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route index element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<Main />} />
        <Route path="inbox" element={<Inbox />} />
      </Route>
    </>
  )
);

function App() {
  return (
    <>
      {/* <ThemeProvider> */}
      <RouterProvider router={router} />
      {/* </ThemeProvider> */}
    </>
  );
}

export default App;
