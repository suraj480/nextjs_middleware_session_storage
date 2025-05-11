
"use client";

import ErrorAlert from "@/components/ErrorAlert";
import InputField from "@/components/InputField";
import { useState } from "react";

export default function LoginPage() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = () => {
        const validUsername = process.env.NEXT_PUBLIC_USERNAME;
        const validPassword = process.env.NEXT_PUBLIC_PASSWORD;
        // const validUsername = 'admin';
        // const validPassword = '123456';

        if (username === validUsername && password === validPassword) {
            // Set LocalStorage
            localStorage.setItem('isLoggedIn', true);
            // Set Cookie  so middleware can detect
            document.cookie = 'isLoggedIn=true; path=/';
            // Redirect to Dashboard
            window.location.href = "/about";
        } else {
            setError('Invalid Username or Password!');
        }


    }

    return (
        <main className="container mt-5">
            <h1 className="text=primary">Login Page</h1>
            <br />

            <InputField label="Username" type="text" value={username}
                onChange={(e) => setUsername(e.target.value)} placeholder="Enter Username" />
            <InputField label="Password" type="password" value={password}
                onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password" />

            <div className="mb-3">
                <button className="btn btn-primary" onClick={handleLogin}>Login</button>
            </div>

            <ErrorAlert message={error} />

        </main>
    )
}