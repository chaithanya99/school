"use client";

import { useState } from "react";
import StepPhone from "./components/StepPhone";
import StepParentDetails, { ParentData } from "./components/StepParentDetails";
import StepChildren, { ChildData } from "./components/StepChildren";
import StepConfirmation from "./components/StepConfirmation";
import SuccessScreen from "./components/SuccessScreen";

const STEPS = ["Phone", "Parent", "Children", "Review"];

export default function Home() {
  const [step, setStep] = useState(0);
  const [phone, setPhone] = useState("");
  const [parentData, setParentData] = useState<ParentData>({ name: "", doorNumber: "", street: "", village: "", mandal: "" });
  const [childrenData, setChildrenData] = useState<ChildData[]>([
    { name: "", gender: "", dob: "", currentClass: "", schoolName: "", interestedCourse: "" },
  ]);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = () => {
    setSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      console.log("Registration data:", { phone, parentData, children: childrenData });
    }, 1500);
  };

  if (submitted) {
    return (
      <main className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <SuccessScreen />
        </div>
      </main>
    );
  }

  return (
    <main className="flex-1 flex flex-col items-center justify-center p-4 min-h-screen">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-lg font-bold text-indigo-700">📚 Program Registration</h1>
        </div>

        {/* Progress bar */}
        <div className="flex items-center justify-between mb-8 px-2">
          {STEPS.map((label, i) => (
            <div key={label} className="flex items-center flex-1">
              <div className="flex flex-col items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
                    i <= step
                      ? "bg-indigo-600 text-white"
                      : "bg-gray-200 text-gray-400"
                  }`}
                >
                  {i < step ? "✓" : i + 1}
                </div>
                <span className={`text-[10px] mt-1 ${i <= step ? "text-indigo-600 font-medium" : "text-gray-400"}`}>
                  {label}
                </span>
              </div>
              {i < STEPS.length - 1 && (
                <div className={`flex-1 h-0.5 mx-1 mt-[-12px] ${i < step ? "bg-indigo-600" : "bg-gray-200"}`} />
              )}
            </div>
          ))}
        </div>

        {/* Step content */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg p-6">
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
            <StepConfirmation
              phone={phone}
              parentName={parentData.name}
              parentData={parentData}
              children={childrenData}
              onBack={() => setStep(2)}
              onSubmit={handleSubmit}
              submitting={submitting}
            />
          )}
        </div>
      </div>
    </main>
  );
}
