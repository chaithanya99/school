"use client";

export interface ParentData {
  name: string;
  doorNumber: string;
  street: string;
  village: string;
  mandal: string;
}

interface StepParentDetailsProps {
  data: ParentData;
  setData: (data: ParentData) => void;
  onNext: () => void;
  onBack: () => void;
}

export default function StepParentDetails({ data, setData, onNext, onBack }: StepParentDetailsProps) {
  const handleNext = () => {
    if (!data.name.trim()) return;
    if (!data.village.trim()) return;
    if (!data.mandal.trim()) return;
    onNext();
  };

  const isValid = data.name.trim() && data.village.trim() && data.mandal.trim();

  return (
    <div className="flex flex-col px-2">
      <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6 mx-auto">
        <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      </div>

      <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center">Parent Details</h2>
      <p className="text-gray-500 text-center mb-6 text-sm">Please provide your information</p>

      <div className="space-y-4 mb-8">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Full Name <span className="text-red-400">*</span></label>
          <input
            type="text"
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
            placeholder="Enter your full name"
            className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:border-indigo-500 outline-none transition-colors text-gray-800 bg-white"
            autoFocus
          />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Door Number</label>
            <input
              type="text"
              value={data.doorNumber}
              onChange={(e) => setData({ ...data, doorNumber: e.target.value })}
              placeholder="e.g. 1-23"
              className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:border-indigo-500 outline-none transition-colors text-gray-800 bg-white"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Street</label>
            <input
              type="text"
              value={data.street}
              onChange={(e) => setData({ ...data, street: e.target.value })}
              placeholder="Street name"
              className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:border-indigo-500 outline-none transition-colors text-gray-800 bg-white"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Village <span className="text-red-400">*</span></label>
          <input
            type="text"
            value={data.village}
            onChange={(e) => setData({ ...data, village: e.target.value })}
            placeholder="Enter village name"
            className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:border-indigo-500 outline-none transition-colors text-gray-800 bg-white"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Mandal <span className="text-red-400">*</span></label>
          <input
            type="text"
            value={data.mandal}
            onChange={(e) => setData({ ...data, mandal: e.target.value })}
            placeholder="Enter mandal name"
            className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:border-indigo-500 outline-none transition-colors text-gray-800 bg-white"
          />
        </div>
      </div>

      <div className="flex gap-3">
        <button
          onClick={onBack}
          className="flex-1 border-2 border-gray-200 text-gray-600 py-3.5 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
        >
          Back
        </button>
        <button
          onClick={handleNext}
          disabled={!isValid}
          className="flex-1 bg-indigo-600 text-white py-3.5 rounded-xl font-semibold hover:bg-indigo-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
        >
          Next
        </button>
      </div>
    </div>
  );
}
