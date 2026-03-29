"use client";

export interface ChildData {
  name: string;
  gender: string;
  dob: string;
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

const emptyChild: ChildData = { name: "", gender: "", dob: "", currentClass: "", schoolName: "", customSchoolName: "", interestedCourse: "" };

const courseOptions = ["Navodaya", "Sainik", "IIT", "NEET"];

const schoolOptions = [
  "Saraswathi High School",
  "Saraswathi Vidya Mandir",
  "Padmavathi High School",
  "Balaji High School",
  "Raghavendra High School",
  "Chaithanya High School PDTR",
  "Narayana High School PDTR",
  "T.K.R High School",
  "John's High School",
  "St. Mary's School",
  "Radiance High School",
  "Gowtham High School",
  "Bharathi Vidya Mandir",
  "Geethanjali High School",
  "Sai Play School",
  "Edify School PDTR",
  "D.P.S PDTR",
  "Slate School",
  "PR Govt High School",
  "ZPHS",
  "ZPGHS",
  "Viswa Jyothi High School",
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

  const updateChild = (index: number, field: keyof ChildData, value: string) => {
    const updated = children.map((c, i) => (i === index ? { ...c, [field]: value } : c));
    setChildren(updated);
  };

  const isValid = children.every(
    (c) => c.name.trim() && c.gender && c.dob && c.currentClass && c.interestedCourse &&
      (c.schoolName === "Others" ? c.customSchoolName.trim() : c.schoolName)
  );

  return (
    <div className="flex flex-col px-2">
      <h2 className="text-2xl font-bold text-gray-800 mb-1 text-center">Children Details</h2>
      <p className="text-gray-500 text-center mb-5 text-sm">Add details for each child attending</p>

      <div className="space-y-5 mb-6 max-h-[55vh] overflow-y-auto pr-1">
        {children.map((child, index) => (
          <div key={index} className="bg-white border-2 border-gray-100 rounded-2xl p-4 relative">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-semibold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
                Child {index + 1}
              </span>
              {children.length > 1 && (
                <button onClick={() => removeChild(index)} className="text-red-400 hover:text-red-600 text-sm font-medium">
                  Remove
                </button>
              )}
            </div>

            <div className="space-y-3">
              <input
                type="text"
                value={child.name}
                onChange={(e) => updateChild(index, "name", e.target.value)}
                placeholder="Child's full name *"
                className="w-full border-2 border-gray-200 rounded-xl px-3 py-2.5 focus:border-indigo-500 outline-none text-sm text-gray-800 bg-white"
              />

              <div className="grid grid-cols-2 gap-3">
                <select
                  value={child.gender}
                  onChange={(e) => updateChild(index, "gender", e.target.value)}
                  className="border-2 border-gray-200 rounded-xl px-3 py-2.5 focus:border-indigo-500 outline-none text-sm text-gray-800 bg-white"
                >
                  <option value="">Gender *</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>

                <input
                  type="date"
                  value={child.dob}
                  onChange={(e) => updateChild(index, "dob", e.target.value)}
                  className="border-2 border-gray-200 rounded-xl px-3 py-2.5 focus:border-indigo-500 outline-none text-sm text-gray-800 bg-white"
                  placeholder="Date of Birth *"
                />
              </div>

              <select
                value={child.currentClass}
                onChange={(e) => updateChild(index, "currentClass", e.target.value)}
                className="w-full border-2 border-gray-200 rounded-xl px-3 py-2.5 focus:border-indigo-500 outline-none text-sm text-gray-800 bg-white"
              >
                <option value="">Current Class *</option>
                {classOptions.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>

              <select
                value={child.schoolName}
                onChange={(e) => {
                  updateChild(index, "schoolName", e.target.value);
                  if (e.target.value !== "Others") {
                    updateChild(index, "customSchoolName", "");
                  }
                }}
                className="w-full border-2 border-gray-200 rounded-xl px-3 py-2.5 focus:border-indigo-500 outline-none text-sm text-gray-800 bg-white"
              >
                <option value="">Select School *</option>
                {schoolOptions.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>

              {child.schoolName === "Others" && (
                <input
                  type="text"
                  value={child.customSchoolName}
                  onChange={(e) => updateChild(index, "customSchoolName", e.target.value)}
                  placeholder="Enter school name *"
                  className="w-full border-2 border-gray-200 rounded-xl px-3 py-2.5 focus:border-indigo-500 outline-none text-sm text-gray-800 bg-white"
                />
              )}

              <div>
                <p className="text-xs font-medium text-gray-500 mb-2">Interested Course *</p>
                <div className="grid grid-cols-2 gap-2">
                  {courseOptions.map((course) => (
                    <button
                      key={course}
                      type="button"
                      onClick={() => updateChild(index, "interestedCourse", course)}
                      className={`py-2 px-3 rounded-xl text-sm font-medium border-2 transition-colors ${
                        child.interestedCourse === course
                          ? "border-indigo-500 bg-indigo-50 text-indigo-700"
                          : "border-gray-200 text-gray-600 hover:border-gray-300"
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
        className="w-full border-2 border-dashed border-indigo-300 text-indigo-600 py-3 rounded-xl font-medium hover:bg-indigo-50 transition-colors mb-5 text-sm"
      >
        + Add Another Child
      </button>

      <div className="flex gap-3">
        <button
          onClick={onBack}
          className="flex-1 border-2 border-gray-200 text-gray-600 py-3.5 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
        >
          Back
        </button>
        <button
          onClick={onNext}
          disabled={!isValid}
          className="flex-1 bg-indigo-600 text-white py-3.5 rounded-xl font-semibold hover:bg-indigo-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
        >
          Review
        </button>
      </div>
    </div>
  );
}
