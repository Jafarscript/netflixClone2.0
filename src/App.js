import React, { useState } from "react";
import HomeScreen from "./components/Screens/HomeScreen";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Screens/Login";

function App() {
  const [user, setUser] = useState(false);
  return (
    <div className="app">
      {user ? (
        <Router>
          <Routes>
            <Route exact path="/" element={<HomeScreen />} />
          </Routes>
        </Router>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
