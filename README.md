This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# Next.js Middleware Guide

This project demonstrates the use of **Middleware in Next.js** to intercept and manipulate requests before they reach your application routes. Middleware in Next.js runs on the **Edge Runtime**, providing high performance and global availability.

---

## 📌 What is Middleware?

Middleware in Next.js allows you to run code **before a request is completed**. You can use it to:

- Authenticate users
- Redirect or rewrite requests
- Apply feature flags or A/B testing
- Log or monitor requests
- Localize based on geolocation or headers

---

## 📁 File Location

Middleware is defined in a file named:
# 🔐 Next.js Login Page with Middleware Authentication

This project demonstrates a simple login system using **React state**, **localStorage**, and **cookies**, with Next.js **middleware** to protect routes like `/about`.

---

## 🚀 Features

- React-based login form using functional components
- Auth check using hardcoded credentials (`admin` / `123456`)
- Stores login status in both `localStorage` and a `cookie`
- Redirects to `/about` on successful login
- Displays error messages on invalid credentials
- Can be used with Next.js Middleware to restrict access to protected routes

---

## 🧱 Components Used

### ✅ `InputField`

Reusable component for rendering labeled input fields.

```tsx
<InputField 
  label="Username" 
  type="text" 
  value={username}
  onChange={(e) => setUsername(e.target.value)} 
  placeholder="Enter Username" />



## Environment Variables:

Environment Variables are key-value pairs used to store:
- Secrets (Like API keys, tokens)
-Environment Based Configurations (Dev vs Prod URLs)
-Application Configuration Setting.

Different File Types/Conventions:
.env.local - For secrets or machine specific settings
.env.development - Only used in Development Mode
.env.production -  Only used in Production Mode