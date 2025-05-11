

"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        setIsLoggedIn(localStorage.getItem('isLoggedIn') == "true");
    }, []);

    const logout = () => {
        localStorage.removeItem('isLoggedIn');
        document.cookie = 'isLoggedIn=false; path=/';
        window.location.href = '/';
    }


    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand" href="/">Dashboard</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" href="/">Home</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" href="/contact">Contact</Link>
                        </li>

                        {isLoggedIn ? (
                            <>
                                <li className="nav-item">
                                    <Link className="nav-link" href="/about">About</Link>
                                </li>
                                <li className="nav-item">
                                    <button className='btn btn-danger btn-sm ms-2' onClick={logout}>Logout</button>
                                </li>
                            </>
                        ) : (
                            <>
                                <li className="nav-item">
                                    <Link className="nav-link" href="/login">Login</Link>
                                </li>
                            </>
                        )}
                    </ul>

                </div>
            </div>
        </nav>
    )
}