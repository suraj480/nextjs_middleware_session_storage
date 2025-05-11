"use client";

export default function ErrorAlert({ message }) {
  if (!message) return null;
  return <div className="mt-3 text-danger">{message}</div>;
}
