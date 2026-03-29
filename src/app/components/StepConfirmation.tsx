"use client";

import { ChildData } from "./StepChildren";

interface StepConfirmationProps {
  phone: string;
  parentName: string;
  parentAddress: string;
  children: ChildData[];
  onBack: () => void;
  onSubmit: () => void;
  submitting: boolean;
}

export default function StepConfirmation({
  phone, parentName, parentAddress, children, onBack, onSubmit, submitting,
}: StepConfirmationProps) {
  return (
    <div className="flex flex-col px-2">
      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-5 mx-auto">
        <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>

      <h2 className="text-2xl font-bold text-gray-800 mb-1 text-center">Review Details</h2>
      <p className="text-gray-500 text-center mb-5 text-sm">Please confirm all details before submitting</p>

      <div className="space-y-4 mb-6 max-h-[50vh] overflow-y-auto pr-1">
        {/* Parent Info */}
        <div className="bg-white rounded-2xl p-4 border border-gray-100">
          <h3 className="text-sm font-semibold text-indigo-600 mb-3">Parent Information</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-500">Phone</span>
              <span className="text-gray-800 font-medium">+91 {phone}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Name</span>
              <span className="text-gray-800 font-medium">{parentName}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Address</span>
              <span className="text-gray-800 font-medium text-right max-w-[60%]">{parentAddress}</span>
            </div>
          </div>
        </div>

        {/* Children */}
        {children.map((child, i) => (
          <div key={i} className="bg-white rounded-2xl p-4 border border-gray-100">
            <h3 className="text-sm font-semibold text-indigo-600 mb-3">Child {i + 1}</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-500">Name</span>
                <span className="text-gray-800 font-medium">{child.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Gender</span>
                <span className="text-gray-800 font-medium capitalize">{child.gender}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Date of Birth</span>
                <span className="text-gray-800 font-medium">{child.dob}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Class</span>
                <span className="text-gray-800 font-medium">{child.currentClass}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">School</span>
                <span className="text-gray-800 font-medium text-right max-w-[60%]">{child.schoolName}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-3">
        <button
          onClick={onBack}
          disabled={submitting}
          className="flex-1 border-2 border-gray-200 text-gray-600 py-3.5 rounded-xl font-semibold hover:bg-gray-50 transition-colors disabled:opacity-50"
        >
          Back
        </button>
        <button
          onClick={onSubmit}
          disabled={submitting}
          className="flex-1 bg-green-600 text-white py-3.5 rounded-xl font-semibold hover:bg-green-700 transition-colors disabled:opacity-50"
        >
          {submitting ? "Submitting..." : "Submit"}
        </button>
      </div>
    </div>
  );
}
