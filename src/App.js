import React, { useState } from "react";
import { Navbar } from './Components/Components'
import { HashRouter as Router } from 'react-router-dom';
import { ScrollToTopButton, AnimatedRoutes } from './Components/Components';
import './App.css';

function App() {
    const [viewingResume, setViewingResume] = useState(false);

    const [elementScrollData, setElementScrollData] = useState({ element: null });

    return (
        <Router>
            <Navbar viewingResume={viewingResume} setViewingResume={setViewingResume} setElementScrollData={setElementScrollData} />
            <div className="background-light-grey">
                <AnimatedRoutes setViewingResume={setViewingResume} setElementScrollData={setElementScrollData} elementScrollData={elementScrollData} />
            </div>
            <ScrollToTopButton />
        </Router>
    );
}

export default App
