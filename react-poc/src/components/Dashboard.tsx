import React from 'react';
import "../stylesheets/Dashboard.css";
import "../stylesheets/Navbar.css";

const Navbar = () => {
    return (
        <ul className="Navbar">
            <li><a className="Navbar-main" href="/dashboard">Dashboard</a></li>
            <li><a href="/">Login page</a></li>
        </ul>
    );
};

class Dashboard extends React.Component {
    render(): React.ReactElement {
        return (
            <div>
                <Navbar />
                <div className="Dashboard">
                    <h1>Dashboard</h1>
                </div>
            </div>
        );
    }
}

export default Dashboard;
