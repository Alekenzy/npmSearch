import React from 'react';
import './App.css';
import './App.scrollbar.css';
import './App.media.css';
import {BrowserRouter} from "react-router-dom";
import NavBar from "./Components/Navbar";
import AppRouter from "./Components/AppRouter";

function App() {
        return (
            <div className="App">
              <BrowserRouter>
              <NavBar />
              <AppRouter />
              </BrowserRouter>
            </div>
        );
}

export default App;