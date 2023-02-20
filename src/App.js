import { Route, Routes } from "react-router-dom";
import Header from "./Layouts/Header";
import Footer from "./Layouts/Footer";
import "./Assets/Styles/global.css";
import Home from "./Pages/Home";
import Dashboard from "./Pages/Dashboard";
import Login from "./Pages/Authentication/Login";
import Register from "./Pages/Authentication/Register";
import Logout from "./Pages/Authentication/Logout";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        {/* Move routes into their own files*/}
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
