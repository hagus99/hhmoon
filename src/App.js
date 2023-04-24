import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Main from "./pages/Main.js";
import { firestore } from "./firebase-config.js";

function App() {
    console.log(firestore);
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Main />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
