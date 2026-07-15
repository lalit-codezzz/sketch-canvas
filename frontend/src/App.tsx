import { BrowserRouter, Route, Routes } from "react-router";
import RootLayout from "./layouts/RootLayout"
import Hero from "./components/Hero";
import PageNotFound from "./features/PageNotFound";
import Signup from "./features/Signup";
import Signin from "./features/Signin";
import PrivateRoute from "./components/PrivateRoute";
import { AuthProvider } from "./context/AuthContext";
import UserLayout from "./layouts/private/UserLayout";
import Dashboard from "./features/protected/Dashboard";
import AllCanvases from "./features/protected/AllCanvases";
import UserProfile from "./components/private/UserProfile";

function App() {

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RootLayout />}>

            <Route index path="" element={<Hero />} />

            <Route path="signup" element={<Signup />} />

            <Route path="signin" element={<Signin />} />

            <Route path="user/" element={<PrivateRoute><UserLayout /></PrivateRoute>}>
              <Route index path="dashboard" element={<Dashboard />} />
              <Route path="canvases" element={<AllCanvases />} />
              <Route path="profile" element={<UserProfile />} />
            </Route>

            <Route path="*" element={<PageNotFound />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
