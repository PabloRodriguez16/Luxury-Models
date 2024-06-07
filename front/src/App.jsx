import Home from "./views/Home/Home";
import Navbar from "./components/primary/navbar/Navbar";
import MyAppointments from "./views/MisTurnos/MyAppointments";
import { Routes, Route, useLocation } from "react-router-dom";
import ScrollToTop from "./components/primary/navbar/ScrollToTop";
import Register from "./views/register/Register";
import Login from "./views/login/Login";
import styles from "./App.module.css";
import Footer from "./components/footer/Footer";
import About from "./views/about/About";
import AppointmentForm from "./views/form/AppointmentForm";

function App() {
  const location = useLocation();

  return (
    <div>
    <ScrollToTop />
      <div className={styles.background}>
        {location.pathname === "/auth"  || location.pathname === "/aboutNotLogin" ? null : (
          <Navbar />
        )}
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/appointments" element={<MyAppointments />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/about" element={<About/>}/>
            <Route path="/AppointmentForm" element={<AppointmentForm/>}/>
          </Routes>
        </div>
        {location.pathname === "/login" || location.pathname === "/register" ? null : (
          <Footer/>
        )}
      </div>
    </div>
  );
}

export default App;
