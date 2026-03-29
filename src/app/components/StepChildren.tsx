"use client";

export interface ChildData {
  name: string;
  gender: string;
  currentClass: string;
  schoolName: string;
  customSchoolName: string;
  interestedCourse: string;
}

interface StepChildrenProps {
  children: ChildData[];
  setChildren: (children: ChildData[]) => void;
  onNext: () => void;
  onBack: () => void;
}

const emptyChild: ChildData = { name: "", gender: "", currentClass: "", schoolName: "", customSchoolName: "", interestedCourse: "" };

const courseOptions = ["Navodaya", "Sainik", "IIT", "NEET"];

const schoolOptions = [
  "Balaji High School",
  "Bharathi Vidya Mandir",
  "Chaithanya High School PDTR",
  "Challapalli High School",
  "Edify School PDTR",
  "Geethanjali High School",
  "Gowtham High School",
  "I.D.P.S PDTR",
  "John's High School",
  "Narayana High School PDTR",
  "Padmavathi High School",
  "PR Govt High School",
  "Radiance High School",
  "Raghavendra High School",
  "Sai Play School",
  "Saraswathi Vidya Mandir",
  "Saraswathi Vidya Mandir Veparala",
  "Slate School",
  "St. Mary's School",
  "T.K.R High School",
  "Viswa Jyothi High School",
  "ZPHS D Nandyala",
  "ZPHS Devagudi",
  "ZPHS Dodium",
  "ZPHS Edigapeta",
  "ZPHS Girls JMD",
  "ZPHS Market",
  "ZPHS Moragudi",
  "ZPHS Mylavaram",
  "ZPHS N.Kottalapalli",
  "ZPHS Nossam",
  "ZPHS Vaddirala",
  "ZPHS Veparala",
  "Others",
];

const classOptions = [
  "Nursery", "LKG", "UKG",
  "1st", "2nd", "3rd", "4th", "5th",
  "6th", "7th", "8th", "9th", "10th",
  "11th", "12th",
];

export default function StepChildren({ children, setChildren, onNext, onBack }: StepChildrenProps) {
  const addChild = () => {
    setChildren([...children, { ...emptyChild }]);
  };

  const removeChild = (index: number) => {
    if (children.length === 1) return;
    setChildren(children.filter((_, i) => i !== index));
  };

  const updateChild = (index: number, updates: Partial<ChildData>) => {
    const updated = children.map((c, i) => (i === index ? { ...c, ...updates } : c));
    setChildren(updated);
  };

  const isValid = children.every(
    (c) => c.name.trim() && c.gender && c.currentClass && c.interestedCourse &&
      (c.schoolName === "Others" ? c.customSchoolName.trim() : c.schoolName)
  );

  return (
    <div className="flex flex-col px-2">
      <div className="w-20 h-20 mb-3 mx-auto">
        <img src="/children.png" alt="Children" className="w-full h-full object-contain" />
      </div>
      <h2 className="text-xl font-bold text-gray-900 mb-1 text-center">Children Details</h2>
      <p className="text-gray-400 text-center mb-5 text-sm">Add details for each child attending</p>

      <div className="space-y-4 mb-5 max-h-[55vh] overflow-y-auto pr-1">
        {children.map((child, index) => (
          <div key={index} className="bg-white border border-red-100 rounded-2xl p-4 relative">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-semibold text-red-800 bg-red-50 px-3 py-1 rounded-full flex items-center gap-1.5">
                <img src="/children.png" alt="" className="w-4 h-4 object-contain" />
                Child {index + 1}
              </span>
              {children.length > 1 && (
                <button onClick={() => removeChild(index)} className="text-gray-400 hover:text-red-500 text-sm font-medium transition-colors">
                  Remove
                </button>
              )}
            </div>

            <div className="space-y-3">
              <input
                type="text"
                value={child.name}
                onChange={(e) => updateChild(index, { name: e.target.value })}
                placeholder="Child's full name *"
                className="w-full border border-gray-200 rounded-xl px-3 py-2.5 focus:border-red-500 outline-none text-sm text-gray-900 bg-white"
              />

              <select
                value={child.gender}
                onChange={(e) => updateChild(index, { gender: e.target.value })}
                className="w-full border border-gray-200 rounded-xl px-3 py-2.5 focus:border-red-500 outline-none text-sm text-gray-900 bg-white"
              >
                <option value="">Gender *</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>

              <select
                value={child.currentClass}
                onChange={(e) => updateChild(index, { currentClass: e.target.value })}
                className="w-full border border-gray-200 rounded-xl px-3 py-2.5 focus:border-red-500 outline-none text-sm text-gray-900 bg-white"
              >
                <option value="">Present Class *</option>
                {classOptions.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>

              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-base">🏫</span>
                <select
                  value={child.schoolName}
                  onChange={(e) => {
                    const val = e.target.value;
                    updateChild(index, { schoolName: val, ...(val !== "Others" ? { customSchoolName: "" } : {}) });
                  }}
                  className="w-full border border-gray-200 rounded-xl pl-9 pr-3 py-2.5 focus:border-red-500 outline-none text-sm text-gray-900 bg-white"
                >
                  <option value="">Select School *</option>
                {schoolOptions.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
              </div>

              {child.schoolName === "Others" && (
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-base">🏫</span>
                  <input
                    type="text"
                    value={child.customSchoolName}
                    onChange={(e) => updateChild(index, { customSchoolName: e.target.value })}
                    placeholder="Enter school name *"
                    className="w-full border border-gray-200 rounded-xl pl-9 pr-3 py-2.5 focus:border-red-500 outline-none text-sm text-gray-900 bg-white"
                  />
                </div>
              )}

              <div>
                <p className="text-xs font-medium text-gray-500 mb-2">Interested Course *</p>
                <div className="grid grid-cols-2 gap-2">
                  {courseOptions.map((course) => (
                    <button
                      key={course}
                      type="button"
                      onClick={() => updateChild(index, { interestedCourse: course })}
                      className={`py-2 px-3 rounded-xl text-sm font-medium border transition-colors ${
                        child.interestedCourse === course
                          ? "border-red-500 bg-red-50 text-red-800"
                          : "border-gray-200 text-gray-500 hover:border-gray-300"
                      }`}
                    >
                      {course}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={addChild}
        className="w-full border border-dashed border-red-300 text-red-500 py-3 rounded-full font-medium hover:bg-red-50 transition-colors mb-5 text-sm"
      >
        + Add Another Child
      </button>

      <div className="flex gap-3">
        <button
          onClick={onBack}
          className="flex-1 border border-gray-200 text-gray-600 py-3.5 rounded-full font-semibold hover:bg-gray-100 transition-colors"
        >
          Back
        </button>
        <button
          onClick={onNext}
          disabled={!isValid}
          className="flex-1 bg-red-800 hover:bg-red-900 text-white py-3.5 rounded-full font-semibold shadow-md shadow-red-200 disabled:bg-gray-300 disabled:shadow-none disabled:cursor-not-allowed transition-colors"
        >
          Review
        </button>
      </div>
    </div>
  );
}
