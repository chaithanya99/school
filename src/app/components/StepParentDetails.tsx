"use client";

export interface ParentData {
  name: string;
  doorNumber: string;
  street: string;
  village: string;
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
    onNext();
  };

  const isValid = data.name.trim() && data.village.trim();

  return (
    <div className="flex flex-col px-2">
      <div className="w-20 h-20 mb-5 mx-auto">
        <img src="/family.png" alt="Family" className="w-full h-full object-contain" />
      </div>

      <h2 className="text-xl font-bold text-gray-900 mb-1 text-center">Parent Details</h2>
      <p className="text-gray-400 text-center mb-6 text-sm">Please provide your information</p>

      <div className="space-y-4 mb-8">
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1.5">Full Name <span className="text-red-500">*</span></label>
          <input
            type="text"
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
            placeholder="Enter your full name"
            className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:border-red-500 outline-none transition-colors text-gray-900 bg-white"
            autoFocus
          />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1.5">Door Number</label>
            <input
              type="text"
              value={data.doorNumber}
              onChange={(e) => setData({ ...data, doorNumber: e.target.value })}
              placeholder="e.g. 1-23"
              className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:border-red-500 outline-none transition-colors text-gray-900 bg-white"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1.5">Street</label>
            <input
              type="text"
              value={data.street}
              onChange={(e) => setData({ ...data, street: e.target.value })}
              placeholder="Street name"
              className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:border-red-500 outline-none transition-colors text-gray-900 bg-white"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1.5">Village <span className="text-red-500">*</span></label>
          <input
            type="text"
            value={data.village}
            onChange={(e) => setData({ ...data, village: e.target.value })}
            placeholder="Enter village name"
            className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:border-red-500 outline-none transition-colors text-gray-900 bg-white"
          />
        </div>
      </div>

      <div className="flex gap-3">
        <button
          onClick={onBack}
          className="flex-1 border border-gray-200 text-gray-600 py-3.5 rounded-full font-semibold hover:bg-gray-100 transition-colors"
        >
          Back
        </button>
        <button
          onClick={handleNext}
          disabled={!isValid}
          className="flex-1 bg-red-800 hover:bg-red-900 text-white py-3.5 rounded-full font-semibold shadow-md shadow-red-200 disabled:bg-gray-300 disabled:shadow-none disabled:cursor-not-allowed transition-colors"
        >
          Next
        </button>
      </div>
    </div>
  );
}
