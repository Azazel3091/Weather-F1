import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import Today from "./components/Today";
import Five from "./components/Five";


function App() {
    return(
        <div>
            <header>
            <h1>Прогноз погоды</h1>
                <nav>
                    <NavLink to="/">Сегодня</NavLink>
                    <NavLink to="/five">Пять дней</NavLink>
                </nav>
            </header>
                <Routes>
                    <Route path="/five" element={<Five/>} />
                    <Route path="/" element={<Today/>} />
                </Routes>
        </div>
    );
}


export default App;
