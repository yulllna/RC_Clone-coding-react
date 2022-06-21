import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import APage from "./aPage";
import BPage from "./bPage";
import Counter from "./counter";
import CPage from "./cPage";

function App() {
    //V5 : Switch, component
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<APage />} />
                    <Route path="/bPage" element={<BPage />} />
                    <Route path="/cPage" element={<CPage />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
