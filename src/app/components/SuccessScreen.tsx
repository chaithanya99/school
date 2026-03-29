"use client";

import { ChildData } from "./StepChildren";

interface SuccessScreenProps {
  parentName: string;
  children: ChildData[];
}

export default function SuccessScreen({ parentName, children }: SuccessScreenProps) {
  return (
    <div className="flex flex-col items-center justify-center px-2 text-center">
      {/* Success badge */}
      <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mb-3 animate-bounce">
        <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <h2 className="text-lg font-bold text-gray-900 mb-1">Successfully Registered!</h2>
      <p className="text-gray-400 text-xs mb-5">Your invitation card is ready below</p>

      {/* ── Invitation Card ── */}
      <div className="w-full rounded-3xl shadow-2xl overflow-hidden" style={{ background: "#D4C5A9" }}>
        <div className="p-4">
          {/* Inner ivory card */}
          <div className="relative rounded-2xl px-6 py-8 overflow-hidden" style={{ background: "#FDF8F0" }}>

            {/* Floral top-right */}
            <svg className="absolute top-0 right-0 w-28 h-28 opacity-40" viewBox="0 0 120 120" fill="none">
              <path d="M95 5c-10 15-5 30-20 40s-25 5-35 20" stroke="#B8960C" strokeWidth="1.2" fill="none"/>
              <circle cx="95" cy="8" r="4" stroke="#B8960C" strokeWidth="1" fill="none"/>
              <circle cx="75" cy="25" r="3" stroke="#B8960C" strokeWidth="1" fill="none"/>
              <circle cx="60" cy="42" r="5" stroke="#B8960C" strokeWidth="1" fill="none"/>
              <path d="M100 15c-5 3-8 10-5 15" stroke="#B8960C" strokeWidth="0.8" fill="none"/>
              <path d="M80 30c3-5 10-8 12-3" stroke="#B8960C" strokeWidth="0.8" fill="none"/>
              <ellipse cx="105" cy="3" rx="6" ry="3" stroke="#B8960C" strokeWidth="0.8" fill="none" transform="rotate(30 105 3)"/>
              <path d="M68 48c-3 5-10 8-15 6" stroke="#B8960C" strokeWidth="0.8" fill="none"/>
            </svg>

            {/* Floral bottom-left */}
            <svg className="absolute bottom-0 left-0 w-28 h-28 opacity-40" viewBox="0 0 120 120" fill="none">
              <path d="M25 115c10-15 5-30 20-40s25-5 35-20" stroke="#B8960C" strokeWidth="1.2" fill="none"/>
              <circle cx="25" cy="112" r="4" stroke="#B8960C" strokeWidth="1" fill="none"/>
              <circle cx="45" cy="95" r="3" stroke="#B8960C" strokeWidth="1" fill="none"/>
              <circle cx="60" cy="78" r="5" stroke="#B8960C" strokeWidth="1" fill="none"/>
              <path d="M20 105c5-3 8-10 5-15" stroke="#B8960C" strokeWidth="0.8" fill="none"/>
              <path d="M40 90c-3 5-10 8-12 3" stroke="#B8960C" strokeWidth="0.8" fill="none"/>
              <ellipse cx="15" cy="117" rx="6" ry="3" stroke="#B8960C" strokeWidth="0.8" fill="none" transform="rotate(-30 15 117)"/>
            </svg>

            {/* Leaf icon */}
            <div className="flex justify-center mb-4">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                <path d="M12 2C8 6 4 10 4 14c0 4 3.5 8 8 8s8-4 8-8c0-4-4-8-8-12z" stroke="#B8960C" strokeWidth="1.2" fill="none"/>
                <path d="M12 22V8" stroke="#B8960C" strokeWidth="0.8"/>
              </svg>
            </div>

            {/* Intro text */}
            <p className="text-[9px] tracking-[3px] uppercase mb-5" style={{ color: "#555" }}>
              Please join us for the
            </p>

            {/* Program name in gold script */}
            <h3 className="text-2xl font-bold italic leading-tight mb-1" style={{ color: "#B8960C", fontFamily: "Georgia, 'Times New Roman', serif" }}>
              IIT & NEET
            </h3>
            <h3 className="text-xl font-bold italic leading-tight mb-1" style={{ color: "#B8960C", fontFamily: "Georgia, 'Times New Roman', serif" }}>
              Sainik School
            </h3>
            <p className="text-sm tracking-[2px] uppercase mb-5" style={{ color: "#888" }}>
              Awareness Program
            </p>

            {/* Gold divider */}
            <div className="flex items-center gap-3 mb-5 px-6">
              <div className="flex-1 h-px" style={{ background: "#D4B96A" }} />
              <span style={{ color: "#B8960C" }} className="text-xs">✦</span>
              <div className="flex-1 h-px" style={{ background: "#D4B96A" }} />
            </div>

            {/* Dear Parent */}
            <p className="text-[10px] tracking-[2px] uppercase mb-1" style={{ color: "#999" }}>Dear</p>
            <p className="text-2xl font-bold capitalize mb-5" style={{ color: "#B8960C", fontFamily: "Georgia, 'Times New Roman', serif" }}>
              {parentName}
            </p>

            {/* Children names */}
            <p className="text-[10px] tracking-[2px] uppercase mb-3" style={{ color: "#999" }}>
              {children.length === 1 ? "Your child" : "Your children"}
            </p>
            <div className="space-y-2 mb-5 px-2">
              {children.map((child, i) => (
                <div key={i} className="rounded-xl px-4 py-2 flex items-center justify-between" style={{ background: "rgba(184,150,12,0.08)", border: "1px solid rgba(184,150,12,0.2)" }}>
                  <span className="font-semibold capitalize text-sm" style={{ color: "#3a3a3a" }}>{child.name}</span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full font-medium" style={{ color: "#B8960C", background: "rgba(184,150,12,0.12)" }}>{child.interestedCourse}</span>
                </div>
              ))}
            </div>

            {/* Gold divider */}
            <div className="flex items-center gap-3 mb-5 px-6">
              <div className="flex-1 h-px" style={{ background: "#D4B96A" }} />
              <span style={{ color: "#B8960C" }} className="text-xs">✦</span>
              <div className="flex-1 h-px" style={{ background: "#D4B96A" }} />
            </div>

            {/* Save the date */}
            <p className="text-xs tracking-[2px] uppercase mb-3" style={{ color: "#555", fontFamily: "Georgia, serif" }}>
              Save The Date
            </p>

            <p className="text-base font-bold mb-1" style={{ color: "#3a3a3a", fontFamily: "Georgia, serif" }}>
              Saturday, 19 April 2026
            </p>

            {/* Gold divider thin */}
            <div className="flex items-center gap-3 my-4 px-10">
              <div className="flex-1 h-px" style={{ background: "#D4B96A" }} />
              <span style={{ color: "#B8960C" }} className="text-[8px]">◆</span>
              <div className="flex-1 h-px" style={{ background: "#D4B96A" }} />
            </div>

            {/* Venue */}
            <p className="text-sm mb-1" style={{ color: "#3a3a3a", fontFamily: "Georgia, serif" }}>
              Nanu Bala Function Hall
            </p>
            <p className="text-xs mb-4" style={{ color: "#999" }}>
              Challapalli
            </p>

            {/* Registered note */}
            <p className="text-[10px] italic" style={{ color: "#aaa" }}>
              {children.length === 1
                ? `${children[0].name} has been`
                : `${children.map(c => c.name).join(" & ")} have been`
              } successfully registered
            </p>

            {/* Bottom branding */}
            <div className="mt-5 pt-4" style={{ borderTop: "1px solid rgba(184,150,12,0.2)" }}>
              <p className="text-[10px] tracking-[2px] uppercase" style={{ color: "#B8960C" }}>
                Challapalli High School
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Note below */}
      <p className="text-gray-400 text-xs mt-5 mb-4">
        📸 Screenshot this invitation for your reference
      </p>
    </div>
  );
}
