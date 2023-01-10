import React from "react"
import Header from "./Header";
import Login from "./Login"
import Footer from "./Footer"
import Home from "./Home"
import Profile from  "./Profile"
import About from "./About"
import Contact from "./Contact"
import { Routes, Route } from "react-router-dom";
import Testing from "./testing"

function App() {
    return <div>
        <Header />
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/testing" element={<Testing />}></Route>
            <Route path="/profile/:slug" element={<Profile />}></Route>
        </Routes>
        <Footer />
    </div>
};

export default App;
