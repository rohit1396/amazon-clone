import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Checkout from "./components/Checkout";
import Header from "./components/Header";
import Home from "./components/Home";
import SignIn from "./components/SignIn";
// import { AuthContextProvider } from "./AuthContext";

function App() {
  return (
    <div className="app">
      {/* <AuthContextProvider> */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Home />
            </>
          }
        />
        <Route
          path="/checkout"
          element={
            <>
              <Header />
              <Checkout />
            </>
          }
        />
        <Route path="/login" element={<SignIn />} />
      </Routes>
      {/* </AuthContextProvider> */}
    </div>
  );
}

export default App;
