"use client";

interface StepAttendeesProps {
  attendees: number;
  setAttendees: (count: number) => void;
  onNext: () => void;
  onBack: () => void;
}

export default function StepAttendees({ attendees, setAttendees, onNext, onBack }: StepAttendeesProps) {
  return (
    <div className="flex flex-col px-2 text-center">
      <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto overflow-hidden">
        <img src="/family.png" alt="Family" className="w-14 h-14 object-contain" />
      </div>
      <h2 className="text-xl font-bold text-gray-900 mb-1">Number of Attendees</h2>
      <p className="text-gray-400 text-sm mb-6">How many people will attend the program?</p>

      <div className="flex justify-center gap-4 mb-8">
        {[1, 2, 3].map((num) => (
          <button
            key={num}
            onClick={() => setAttendees(num)}
            className={`w-20 h-20 rounded-2xl text-2xl font-bold border-2 transition-all ${
              attendees === num
                ? "bg-red-800 text-white border-red-800 shadow-lg scale-105"
                : "bg-white text-gray-700 border-gray-200 hover:border-red-300"
            }`}
          >
            {num}
          </button>
        ))}
      </div>

      <p className="text-sm text-gray-500 mb-6">
        {attendees > 0
          ? `${attendees} ${attendees === 1 ? "person" : "people"} will attend`
          : "Please select the number of attendees"}
      </p>

      <div className="flex gap-3">
        <button
          onClick={onBack}
          className="flex-1 border border-gray-200 text-gray-600 py-3 rounded-full font-medium hover:bg-gray-50 transition-colors text-sm"
        >
          Back
        </button>
        <button
          onClick={onNext}
          disabled={attendees === 0}
          className="flex-1 bg-red-800 hover:bg-red-900 text-white py-3 rounded-full font-semibold shadow-md shadow-red-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm"
        >
          Next
        </button>
      </div>
    </div>
  );
}

