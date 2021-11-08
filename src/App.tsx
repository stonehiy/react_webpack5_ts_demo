import React from "react"
import { Routes, Route, Link } from "react-router-dom";

import Home from './pages/home/home'
import Index from './pages/index'

function App() {

    return (
        <div>
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/home" element={<Home />} />
            </Routes>
        </div>
    )
}
export default App