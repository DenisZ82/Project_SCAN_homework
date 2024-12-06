import React from "react";
import { Routes, Route } from "react-router-dom";

import "../stylse/App.css";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import AuthForm from "./AuthForm"

function App() {
    return(
        <>
            <Header />
            <div>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/auth" element={<AuthForm />} />
                </Routes>
            </div>
            <Footer />
        </>

    );
}

export default App;