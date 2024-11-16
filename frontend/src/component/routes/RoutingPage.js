import { ErrorPage } from 'component/general/ErrorPage';
import Sidebar from 'component/general/Sidebar';
import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import { allRoutes } from './routes';

const RoutingPage = () => {
    return (
        <Router>
            <Routes>
                {allRoutes.map((currentRoute, index) => (
                    <Route
                        key={index}
                        path={currentRoute.path}
                        element={<Sidebar>{currentRoute.component}</Sidebar>}

                    />
                ))}
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </Router>
    )
}

export default RoutingPage
