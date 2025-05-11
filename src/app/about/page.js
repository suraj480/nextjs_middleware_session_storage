import React from 'react'
const apiUrl = process.env.NEXT_PUBLIC_API_URL; 
const isDev = process.env.NODE_ENV === 'development';   
const page = () => {
    return (
        <main className="container mt-5">
            <h1 className="text=primary">About Page</h1>
            <br />
            <p className='lead'>{apiUrl}</p>
            <p>{isDev?"dev environment":""}</p>
            <p>Only logged in users can see this page.</p>
        </main> 
    )
}

export default page
