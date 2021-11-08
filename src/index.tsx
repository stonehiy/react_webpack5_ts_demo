import ReactDom from 'react-dom'
import React from 'react'
import App from "./App"
import { BrowserRouter } from "react-router-dom";

ReactDom.render(
    <BrowserRouter >
        <App />
    </ BrowserRouter >
    , document.getElementById('root'))
