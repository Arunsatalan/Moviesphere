import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import BaseHome from "./Screens/BaseHome/BaseHome.jsx";
import AdminHeadSection from "./Components/AdminComponents/AdminHeadSection/AdminHeadSection.jsx";
import Admin from "./Screens/AdminPage/Admin.jsx";
import AdminMovieSection from "./Components/AdminComponents/AdminMovieSection/AdminMovieSection.jsx";
import AdminUserSection from "./Components/AdminComponents/AdminUserSection/AdminUserSection.jsx";

function App() {

  return (
      <BrowserRouter>
          <Routes>
              <Route element={<Admin/>} path='/admin'/>
              <Route element={<AdminMovieSection/>} path='/admin/movies'/>
              <Route element={<AdminUserSection/>} path='/admin/users'/>
          </Routes>
      </BrowserRouter>
  )
}

export default App
