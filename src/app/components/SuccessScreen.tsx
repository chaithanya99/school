"use client";

import { ChildData } from "./StepChildren";

interface SuccessScreenProps {
  parentName: string;
  children: ChildData[];
}

export default function SuccessScreen({ parentName, children }: SuccessScreenProps) {
  return (
    <div className="flex flex-col items-center px-2 text-center">
      {/* Compact success message */}
      <div className="flex items-center gap-2 mb-3">
        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
          <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <div className="text-left">
          <h2 className="text-sm font-bold text-gray-900 leading-tight">Successfully Registered!</h2>
          <p className="text-gray-400 text-[10px]">Your invitation card is ready</p>
        </div>
      </div>

      {/* ── Invitation Card ── */}
      <div className="w-full rounded-2xl shadow-2xl overflow-hidden" style={{ background: "#D4C5A9" }}>
        <div className="p-3">
          {/* Inner ivory card */}
          <div className="relative rounded-xl px-5 py-5 overflow-hidden" style={{ background: "#FDF8F0" }}>

            {/* Floral top-right */}
            <svg className="absolute top-0 right-0 w-24 h-24 opacity-35" viewBox="0 0 120 120" fill="none">
              <path d="M95 5c-10 15-5 30-20 40s-25 5-35 20" stroke="#B8960C" strokeWidth="1.2" fill="none"/>
              <circle cx="95" cy="8" r="4" stroke="#B8960C" strokeWidth="1" fill="none"/>
              <circle cx="75" cy="25" r="3" stroke="#B8960C" strokeWidth="1" fill="none"/>
              <circle cx="60" cy="42" r="5" stroke="#B8960C" strokeWidth="1" fill="none"/>
              <path d="M100 15c-5 3-8 10-5 15" stroke="#B8960C" strokeWidth="0.8" fill="none"/>
              <path d="M80 30c3-5 10-8 12-3" stroke="#B8960C" strokeWidth="0.8" fill="none"/>
              <ellipse cx="105" cy="3" rx="6" ry="3" stroke="#B8960C" strokeWidth="0.8" fill="none" transform="rotate(30 105 3)"/>
            </svg>

            {/* Floral bottom-left */}
            <svg className="absolute bottom-0 left-0 w-24 h-24 opacity-35" viewBox="0 0 120 120" fill="none">
              <path d="M25 115c10-15 5-30 20-40s25-5 35-20" stroke="#B8960C" strokeWidth="1.2" fill="none"/>
              <circle cx="25" cy="112" r="4" stroke="#B8960C" strokeWidth="1" fill="none"/>
              <circle cx="45" cy="95" r="3" stroke="#B8960C" strokeWidth="1" fill="none"/>
              <circle cx="60" cy="78" r="5" stroke="#B8960C" strokeWidth="1" fill="none"/>
              <path d="M20 105c5-3 8-10 5-15" stroke="#B8960C" strokeWidth="0.8" fill="none"/>
              <path d="M40 90c-3 5-10 8-12 3" stroke="#B8960C" strokeWidth="0.8" fill="none"/>
            </svg>

            {/* Leaf icon + intro */}
            <div className="flex justify-center mb-2">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                <path d="M12 2C8 6 4 10 4 14c0 4 3.5 8 8 8s8-4 8-8c0-4-4-8-8-12z" stroke="#B8960C" strokeWidth="1.2" fill="none"/>
                <path d="M12 22V8" stroke="#B8960C" strokeWidth="0.8"/>
              </svg>
            </div>
            <p className="text-[8px] tracking-[3px] uppercase mb-3" style={{ color: "#555" }}>
              Please join us for the
            </p>

            {/* Program name */}
            <h3 className="text-xl font-bold italic leading-tight mb-0.5" style={{ color: "#B8960C", fontFamily: "Georgia, 'Times New Roman', serif" }}>
              IIT & NEET
            </h3>
            <h3 className="text-lg font-bold italic leading-tight mb-0.5" style={{ color: "#B8960C", fontFamily: "Georgia, 'Times New Roman', serif" }}>
              Sainik School
            </h3>
            <p className="text-xs tracking-[2px] uppercase mb-3" style={{ color: "#888" }}>
              Awareness Program
            </p>

            {/* Gold divider */}
            <div className="flex items-center gap-2 mb-3 px-8">
              <div className="flex-1 h-px" style={{ background: "#D4B96A" }} />
              <span style={{ color: "#B8960C" }} className="text-[8px]">✦</span>
              <div className="flex-1 h-px" style={{ background: "#D4B96A" }} />
            </div>

            {/* Dear Parent */}
            <p className="text-[9px] tracking-[2px] uppercase mb-0.5" style={{ color: "#999" }}>Dear</p>
            <p className="text-xl font-bold capitalize mb-3" style={{ color: "#B8960C", fontFamily: "Georgia, 'Times New Roman', serif" }}>
              {parentName}
            </p>

            {/* Children names */}
            <p className="text-[9px] tracking-[2px] uppercase mb-1.5" style={{ color: "#999" }}>
              {children.length === 1 ? "Your child" : "Your children"}
            </p>
            <div className="space-y-1.5 mb-3 px-1">
              {children.map((child, i) => (
                <div key={i} className="rounded-lg px-3 py-1.5 flex items-center justify-between" style={{ background: "rgba(184,150,12,0.08)", border: "1px solid rgba(184,150,12,0.2)" }}>
                  <span className="font-semibold capitalize text-xs" style={{ color: "#3a3a3a" }}>{child.name}</span>
                  <span className="text-[9px] px-1.5 py-0.5 rounded-full font-medium" style={{ color: "#B8960C", background: "rgba(184,150,12,0.12)" }}>{child.interestedCourse}</span>
                </div>
              ))}
            </div>

            {/* Gold divider */}
            <div className="flex items-center gap-2 mb-3 px-8">
              <div className="flex-1 h-px" style={{ background: "#D4B96A" }} />
              <span style={{ color: "#B8960C" }} className="text-[8px]">✦</span>
              <div className="flex-1 h-px" style={{ background: "#D4B96A" }} />
            </div>

            {/* Date & Venue side by side */}
            <p className="text-[10px] tracking-[2px] uppercase mb-2" style={{ color: "#555", fontFamily: "Georgia, serif" }}>
              Save The Date
            </p>
            <div className="flex items-center justify-center gap-4 mb-3">
              <div className="text-center">
                <p className="text-xs font-bold" style={{ color: "#3a3a3a", fontFamily: "Georgia, serif" }}>Sat, 19 April 2026</p>
              </div>
              <div className="w-px h-5" style={{ background: "#D4B96A" }} />
              <div className="text-center">
                <p className="text-xs font-bold" style={{ color: "#3a3a3a", fontFamily: "Georgia, serif" }}>Nanu Bala Function Hall</p>
                <p className="text-[9px]" style={{ color: "#999" }}>Challapalli</p>
              </div>
            </div>

            {/* Registered note */}
            <p className="text-[9px] italic mb-2" style={{ color: "#aaa" }}>
              {children.length === 1
                ? `${children[0].name} has been`
                : `${children.map(c => c.name).join(" & ")} have been`
              } successfully registered
            </p>

            {/* Bottom branding */}
            <div className="pt-2" style={{ borderTop: "1px solid rgba(184,150,12,0.2)" }}>
              <p className="text-[9px] tracking-[2px] uppercase" style={{ color: "#B8960C" }}>
                Challapalli High School
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Note below */}
      <p className="text-gray-400 text-[10px] mt-3 mb-2">
        📸 Screenshot this invitation for your reference
      </p>
    </div>
  );
}
