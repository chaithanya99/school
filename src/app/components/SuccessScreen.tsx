"use client";

import { ChildData } from "./StepChildren";

interface SuccessScreenProps {
  parentName: string;
  children: ChildData[];
}

export default function SuccessScreen({ parentName, children }: SuccessScreenProps) {
  return (
    <div className="flex flex-col items-center justify-center px-4 text-center">
      {/* Success message */}
      <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4 animate-bounce">
        <svg className="w-8 h-8 text-red-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <h2 className="text-xl font-bold text-gray-900 mb-1">Registration Successful!</h2>
      <p className="text-gray-400 text-sm mb-6">Your invitation card is ready</p>

      {/* Invitation Card */}
      <div className="w-full bg-white rounded-2xl border-2 border-red-800 overflow-hidden shadow-lg">
        {/* Card top band */}
        <div className="bg-red-800 py-4 px-5">
          <p className="text-red-200 text-[10px] tracking-[3px] uppercase mb-1">You are invited to</p>
          <h3 className="text-white font-extrabold text-lg leading-tight">IIT & NEET SAINIK SCHOOL</h3>
          <p className="text-red-100 font-semibold text-sm">Awareness Program</p>
        </div>

        {/* Card body */}
        <div className="px-5 py-5">
          {/* Decorative line */}
          <div className="flex items-center gap-3 mb-4">
            <div className="flex-1 h-px bg-red-200" />
            <span className="text-red-800 text-xs">✦</span>
            <div className="flex-1 h-px bg-red-200" />
          </div>

          {/* Parent name */}
          <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">Dear</p>
          <p className="text-2xl font-bold text-gray-900 mb-4 capitalize">{parentName}</p>

          {/* Children */}
          <p className="text-gray-400 text-xs uppercase tracking-wider mb-2">
            {children.length === 1 ? "Your child" : "Your children"}
          </p>
          <div className="space-y-2 mb-5">
            {children.map((child, i) => (
              <div key={i} className="bg-red-50 border border-red-100 rounded-xl px-4 py-2.5 flex items-center justify-between">
                <span className="font-semibold text-gray-900 capitalize">{child.name}</span>
                <span className="text-xs text-red-800 bg-red-100 px-2 py-0.5 rounded-full">{child.interestedCourse}</span>
              </div>
            ))}
          </div>

          {/* Decorative line */}
          <div className="flex items-center gap-3 mb-4">
            <div className="flex-1 h-px bg-red-200" />
            <span className="text-red-800 text-xs">✦</span>
            <div className="flex-1 h-px bg-red-200" />
          </div>

          {/* Event details */}
          <div className="flex items-center justify-center gap-6 mb-4">
            <div className="text-center">
              <p className="text-[10px] text-gray-400 uppercase tracking-wider">Date</p>
              <p className="text-sm font-bold text-gray-900">April 19, 2026</p>
            </div>
            <div className="w-px h-8 bg-red-200" />
            <div className="text-center">
              <p className="text-[10px] text-gray-400 uppercase tracking-wider">Venue</p>
              <p className="text-sm font-bold text-gray-900">Nanu Bala Function Hall</p>
            </div>
          </div>

          <p className="text-gray-400 text-xs">
            {children.length === 1
              ? `${children[0].name} has been`
              : `${children.map(c => c.name).join(", ")} have been`
            } successfully registered.
          </p>
        </div>

        {/* Card bottom band */}
        <div className="bg-red-800 py-3 px-5">
          <p className="text-white text-xs font-semibold">🏫 Challapalli High School</p>
          <p className="text-red-200 text-[10px]">Empowering students with quality education</p>
        </div>
      </div>

      {/* Note below card */}
      <p className="text-gray-400 text-xs mt-4">
        Screenshot this invitation for your reference
      </p>
    </div>
  );
}
