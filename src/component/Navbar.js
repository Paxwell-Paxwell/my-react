import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid px-4">
                <a className="navbar-brand" href="#">
                    Navbar
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a
                                className="nav-link active"
                                aria-current="page"
                                href="/"
                            >
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <Link to="/convert-unit" className="nav-link">
                                Convert unit
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/preview" className="nav-link">
                                Preview
                            </Link>
                        </li>
                        <li>
                            <Link to="/shop" className="nav-link">
                                Shop
                            </Link>

                            </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
