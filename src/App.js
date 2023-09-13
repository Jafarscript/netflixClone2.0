import React, { useState , useEffect} from "react";
import HomeScreen from "./components/Screens/HomeScreen";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Screens/Login";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";


function App() {
  const [user, setUser] = useState(false);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // logged in
        
      } else {
        // logged out
      }
    })
  }, [])
  
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
