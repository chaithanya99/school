"use client";

import { useState } from "react";
import StepPhone from "./components/StepPhone";
import StepParentDetails, { ParentData } from "./components/StepParentDetails";
import StepChildren, { ChildData } from "./components/StepChildren";
import StepAttendees from "./components/StepAttendees";
import StepConfirmation from "./components/StepConfirmation";
import SuccessScreen from "./components/SuccessScreen";

const STEPS = ["Phone", "Parent", "Children", "Attendees", "Review"];

export default function Home() {
  const [step, setStep] = useState(-1); // -1 = landing page
  const [phone, setPhone] = useState("");
  const [parentData, setParentData] = useState<ParentData>({ name: "", doorNumber: "", street: "", village: "" });
  const [childrenData, setChildrenData] = useState<ChildData[]>([
    { name: "", gender: "", currentClass: "", schoolName: "", customSchoolName: "", interestedCourse: "" },
  ]);
  const [attendees, setAttendees] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  const handleSubmit = () => {
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setShowThankYou(true);
      console.log("Registration data:", { phone, parentData, children: childrenData });
      setTimeout(() => {
        setShowThankYou(false);
        setSubmitted(true);
      }, 5000);
    }, 1500);
  };

  // Thank you transition screen
  if (showThankYou) {
    const petals = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 2,
      duration: 2 + Math.random() * 2,
      size: 12 + Math.random() * 14,
      rotation: Math.random() * 360,
      emoji: ["🌹", "🌸", "💐", "🪻", "🪷"][Math.floor(Math.random() * 5)],
    }));

    return (
      <div className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-red-50 flex items-center justify-center p-6 overflow-hidden relative">
        {/* Falling petals */}
        {petals.map((petal) => (
          <span
            key={petal.id}
            className="absolute animate-petal-fall pointer-events-none"
            style={{
              left: `${petal.left}%`,
              top: "-40px",
              fontSize: `${petal.size}px`,
              animationDelay: `${petal.delay}s`,
              animationDuration: `${petal.duration}s`,
              transform: `rotate(${petal.rotation}deg)`,
            }}
          >
            {petal.emoji}
          </span>
        ))}

        <div className="text-center animate-fade-in relative z-10">
          <div className="text-6xl mb-4">😊</div>
          <h2 className="text-2xl font-bold text-red-800 mb-3">Thank You!</h2>
          <p className="text-gray-600 text-base mb-2">For supporting this program</p>
          <p className="text-gray-400 text-sm">Your registration is being processed...</p>
          <div className="mt-8 flex justify-center gap-2">
            <span className="w-3 h-3 bg-red-800 rounded-full animate-pulse" style={{ animationDelay: "0s" }}></span>
            <span className="w-3 h-3 bg-red-800 rounded-full animate-pulse" style={{ animationDelay: "0.2s" }}></span>
            <span className="w-3 h-3 bg-red-800 rounded-full animate-pulse" style={{ animationDelay: "0.4s" }}></span>
          </div>
        </div>
      </div>
    );
  }

  if (submitted) {
    return (
      <>
        <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
          <div className="max-w-md mx-auto flex items-center gap-3 px-4 py-3">
            <div className="w-10 h-10 bg-red-800 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">CHS</span>
            </div>
            <div>
              <h1 className="text-lg font-extrabold text-red-800 leading-tight">Challapalli High School</h1>
              <p className="text-[10px] text-gray-400">Educational Excellence</p>
            </div>
          </div>
        </header>
        <main className="flex-1 flex items-center justify-center px-3 py-2">
          <div className="w-full max-w-md">
            <SuccessScreen parentName={parentData.name} children={childrenData} attendees={attendees} />
          </div>
        </main>
      </>
    );
  }

  // Landing page
  if (step === -1) {
    return (
      <>
        <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
          <div className="max-w-md mx-auto flex items-center gap-3 px-4 py-3">
            <div className="w-10 h-10 bg-red-800 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">CHS</span>
            </div>
            <div>
              <h1 className="text-lg font-extrabold text-red-800 leading-tight">Challapalli High School</h1>
              <p className="text-[10px] text-gray-400">Educational Excellence</p>
            </div>
          </div>
        </header>

        <main className="flex-1 flex flex-col items-center justify-center p-5 min-h-[calc(100vh-64px)]">
          <div className="w-full max-w-md space-y-6">
            {/* Program Card */}
            <div className="bg-gray-50 border border-red-200 rounded-2xl p-8 flex flex-col items-center text-center">
              {/* Icon */}
              <div className="w-20 h-20 mb-5 flex items-center justify-center">
                <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none">
                  <rect x="14" y="8" width="36" height="48" rx="4" fill="#FFCDD2" stroke="#991B1B" strokeWidth="2"/>
                  <rect x="20" y="18" width="18" height="2" rx="1" fill="#991B1B"/>
                  <rect x="20" y="24" width="24" height="2" rx="1" fill="#991B1B"/>
                  <rect x="20" y="30" width="20" height="2" rx="1" fill="#991B1B"/>
                  <rect x="20" y="36" width="16" height="2" rx="1" fill="#991B1B"/>
                  <circle cx="46" cy="46" r="12" fill="#991B1B"/>
                  <path d="M46 38v8l4 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>

              <h2 className="text-xl font-bold text-gray-900 mb-1">IIT & NEET, SAINIK SCHOOL</h2>
              <h3 className="text-lg font-semibold text-red-800 mb-3">Awareness Program</h3>
              <p className="text-sm text-gray-500 mb-4"><span className="text-red-800 font-semibold">19th April 2026</span> • Register your children for our awareness program</p>

              {/* Graduation image + motivational quote */}
              <div className="mb-5">
                <img src="/graduation.png" alt="Graduation" className="w-20 h-20 object-contain mx-auto mb-3" />
                <h4 className="text-base font-bold text-gray-800">Power of Education</h4>
                <p className="text-sm text-gray-500 italic">Education will change your background</p>
              </div>

              {/* Free badge */}
              <p className="text-sm font-bold text-red-800 mb-3 animate-blink">✨ Free Registration ✨</p>

              <button
                onClick={() => setStep(0)}
                className="w-full bg-red-800 hover:bg-red-900 text-white py-3.5 rounded-full font-semibold text-base shadow-md shadow-red-200 transition-colors"
              >
                Register Here
              </button>
            </div>
          </div>

          {/* Footer strip */}
          <div className="mt-10 w-full max-w-md bg-red-800 rounded-2xl p-5 text-center">
            <h3 className="text-white font-bold text-sm mb-1">CHALLAPALLI HIGH SCHOOL</h3>
            <p className="text-red-100 text-xs">Empowering students with quality education and opportunities</p>
          </div>
        </main>
      </>
    );
  }

  // Registration flow
  return (
    <>
      <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-md mx-auto flex items-center gap-3 px-4 py-3">
          <div className="w-10 h-10 bg-red-800 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">CHS</span>
          </div>
          <div>
            <h1 className="text-lg font-extrabold text-red-800 leading-tight">Challapalli High School</h1>
            <p className="text-[10px] text-gray-400">Educational Excellence</p>
          </div>
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center p-4 pt-6 min-h-[calc(100vh-64px)]">
        <div className="w-full max-w-md">
          {/* Progress bar */}
          <div className="flex items-center justify-between mb-6 px-2">
            {STEPS.map((label, i) => (
              <div key={label} className="flex items-center flex-1">
                <div className="flex flex-col items-center">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
                      i <= step
                        ? "bg-red-800 text-white"
                        : "bg-gray-200 text-gray-400"
                    }`}
                  >
                    {i < step ? "✓" : i + 1}
                  </div>
                  <span className={`text-[10px] mt-1 ${i <= step ? "text-red-800 font-medium" : "text-gray-400"}`}>
                    {label}
                  </span>
                </div>
                {i < STEPS.length - 1 && (
                  <div className={`flex-1 h-0.5 mx-1 mt-[-12px] ${i < step ? "bg-red-800" : "bg-gray-200"}`} />
                )}
              </div>
            ))}
          </div>

          {/* Step content */}
          <div className="bg-gray-50 border border-red-100 rounded-2xl p-6">
            {step === 0 && (
              <StepPhone phone={phone} setPhone={setPhone} onNext={() => setStep(1)} />
            )}
            {step === 1 && (
              <StepParentDetails
                data={parentData}
                setData={setParentData}
                onNext={() => setStep(2)}
                onBack={() => setStep(0)}
              />
            )}
            {step === 2 && (
              <StepChildren
                children={childrenData}
                setChildren={setChildrenData}
                onNext={() => setStep(3)}
                onBack={() => setStep(1)}
              />
            )}
            {step === 3 && (
              <StepAttendees
                attendees={attendees}
                setAttendees={setAttendees}
                onNext={() => setStep(4)}
                onBack={() => setStep(2)}
              />
            )}
            {step === 4 && (
              <StepConfirmation
                phone={phone}
                parentName={parentData.name}
                parentData={parentData}
                children={childrenData}
                attendees={attendees}
                onBack={() => setStep(3)}
                onSubmit={handleSubmit}
                submitting={submitting}
              />
            )}
          </div>
        </div>
      </main>
    </>
  );
}
