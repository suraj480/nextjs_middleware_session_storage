"use client";
import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';  // Keep this for your own styles
import Navbar from '@/components/NavBar';


export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body>
        <Navbar />
        <div className='container mt-4'>{children}</div>
      </body>
    </html>
  );
}
