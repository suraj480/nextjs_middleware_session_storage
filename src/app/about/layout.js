"use client";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function AboutLayout({ children }) {

    return (
        <div className='container mt-4'>
            <h2>About Section</h2>
            <div className='p-3 border border-success'>{children}</div>
        </div>
    );
}