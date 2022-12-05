import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Profile from "./pages/Profile/Profile";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
        <Routes>
          <Route path="/login" element={<Login/>} />
        </Routes>
        <Routes>
          <Route path="/register" element={<Register/>} />
        </Routes>
        <Routes>
          <Route path="/profile/:username" element={<Profile/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
