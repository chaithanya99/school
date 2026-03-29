"use client";

export default function SuccessScreen() {
  return (
    <div className="flex flex-col items-center justify-center px-6 text-center min-h-[60vh]">
      <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6 animate-bounce">
        <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      </div>

      <h2 className="text-2xl font-bold text-gray-800 mb-3">Registration Successful!</h2>
      <p className="text-gray-500 mb-2">
        Thank you for registering for our program.
      </p>
      <p className="text-gray-500 mb-8">
        We look forward to seeing you on <span className="font-semibold text-indigo-600">April 19th</span>.
      </p>

      <div className="bg-indigo-50 rounded-2xl p-5 w-full">
        <p className="text-indigo-700 font-medium text-sm">
          📅 Program Date: April 19th, 2025
        </p>
        <p className="text-indigo-600 text-xs mt-2">
          You will receive a confirmation message on your registered phone number with further details.
        </p>
      </div>
    </div>
  );
}
