import { Routes, Route } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import HomePage from "../pages/HomePage/HomePage";
import AuthPage from "../pages/AuthPage/AuthPage";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import UserPage from "../pages/UserPage/UserPage";
import Footer from "../components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/profile/:id" element={<ProfilePage />} />
        <Route path="/user/:id" element={<UserPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
