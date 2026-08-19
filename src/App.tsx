import DashBoard from "./pages/Dashboard"
import "./index.css";
import { SignUp } from "./pages/SignUp";
import { SignIn } from "./pages/SignIn";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<SignIn />} />
      <Route path="/dashboard" element={<DashBoard/>} />
    
    </Routes>
    </BrowserRouter>
  )
}

export default App
