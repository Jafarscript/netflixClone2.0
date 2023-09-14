import React, { useEffect} from "react";
import HomeScreen from "./components/Screens/HomeScreen";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Screens/Login";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/counter/userSlice";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch()
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // logged in
        dispatch(login({
          uid: user.uid,
          email: user.email
        }))

      } else {
        // logged out
        dispatch(logout())
      }
    })

    return () => {
      unsubscribe();
    }
    
  }, [dispatch])


  
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
