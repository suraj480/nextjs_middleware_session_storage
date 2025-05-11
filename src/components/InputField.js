"use client";

export default function InputField({ label, type, value, onChange, placeholder }) {
    return (
        <div className="mb-3">
            <label className="form-label">{label}</label>
            <input
                type={type}
                className="form-control"
                value={value}
                onChange={onChange}
                placeholder={placeholder}
            />
        </div>
    )
}