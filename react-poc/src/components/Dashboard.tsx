import React from 'react';
import "../stylesheets/Dashboard.css";
import "../stylesheets/Navbar.css";

const Navbar: React.FC = () => {
    return (
        <ul className="Navbar">
            <li><a className="Navbar-main" href="/dashboard">Dashboard</a></li>
            <li><a href="/">Login page</a></li>
        </ul>
    );
};

const Dashboard: React.FC = () => {
    return (
        <div>
            <Navbar />
            <div className="Dashboard">
                <h1>Dashboard</h1>
            </div>
        </div>
    );
};

export default Dashboard;
