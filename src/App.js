import { Routes, Route, useLocation } from "react-router-dom";
import Credentials from "./components/Credentials";
import DashboardLanding from "./components/DashboardLanding";
import Earnings from "./components/Earnings";
import Profile from "./components/Profile";
import Schedule from "./components/Schedule";
import Sessions from "./components/Sessions";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import "animate.css";
import EditSignature from "./components/EditSignature";
import { createContext, useEffect } from "react";

function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route path="/" element={<Dashboard />}>
        <Route index path="overview" element={<DashboardLanding />}></Route>
        <Route path="profile" element={<Profile />}></Route>
        <Route path="schedule" element={<Schedule />}></Route>
        <Route path="credentials" element={<Credentials />}></Route>
        <Route path="sessions" element={<Sessions />}></Route>
        <Route path="earnings" element={<Earnings />}></Route>
        <Route path="edit-signature" element={<EditSignature />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
