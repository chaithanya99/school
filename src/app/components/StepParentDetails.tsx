"use client";

interface ParentData {
  name: string;
  address: string;
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
    if (!data.address.trim()) return;
    onNext();
  };

  const isValid = data.name.trim() && data.address.trim();

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

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Address <span className="text-red-400">*</span></label>
          <textarea
            value={data.address}
            onChange={(e) => setData({ ...data, address: e.target.value })}
            placeholder="Enter your full address"
            rows={3}
            className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:border-indigo-500 outline-none transition-colors text-gray-800 bg-white resize-none"
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
