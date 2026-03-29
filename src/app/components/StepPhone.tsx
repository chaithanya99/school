"use client";

import { useState } from "react";

interface StepPhoneProps {
  phone: string;
  setPhone: (phone: string) => void;
  onNext: () => void;
}

export default function StepPhone({ phone, setPhone, onNext }: StepPhoneProps) {
  const [error, setError] = useState("");

  const handleNext = () => {
    if (phone.length !== 10) {
      setError("Please enter a valid 10-digit phone number");
      return;
    }
    setError("");
    onNext();
  };

  return (
    <div className="flex flex-col items-center px-2">
      <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center mb-5">
        <svg className="w-7 h-7 text-red-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      </div>

      <h2 className="text-xl font-bold text-gray-900 mb-1">Enter Phone Number</h2>
      <p className="text-gray-400 text-center mb-6 text-sm">
        To register for the program on <span className="font-semibold text-red-800">April 19th</span>
      </p>

      <div className="w-full mb-4">
        <label className="block text-sm font-medium text-gray-600 mb-2">Phone Number</label>
        <div className="flex items-center border border-gray-200 rounded-xl px-4 py-3 focus-within:border-red-500 transition-colors bg-white">
          <span className="text-gray-400 font-medium mr-2">+91</span>
          <input
            type="tel"
            inputMode="numeric"
            maxLength={10}
            value={phone}
            onChange={(e) => {
              const val = e.target.value.replace(/\D/g, "");
              setPhone(val);
              setError("");
            }}
            placeholder="Enter your number"
            className="flex-1 outline-none text-lg text-gray-900 bg-transparent"
            autoFocus
          />
        </div>
      </div>
      {error && <p className="text-red-500 text-sm mb-3 w-full">{error}</p>}
      <button
        onClick={handleNext}
        disabled={phone.length !== 10}
        className="w-full bg-red-800 hover:bg-red-900 text-white py-3.5 rounded-full font-semibold text-base shadow-md shadow-red-200 disabled:bg-gray-300 disabled:shadow-none disabled:cursor-not-allowed transition-colors"
      >
        Next
      </button>
    </div>
  );
}
