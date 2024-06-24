import FormSection from "./FormSection";

export default function Form() {
  const genInfoInputs = [
    { name: "First Name" },
    { name: "Last Name" },
    { name: "Email", type: "email" },
    { name: "Phone Number", type: "tel" },
  ];

  const educationInputs = [
    { name: "School Name" },
    { name: "Title of Study" },
    { name: "Date of Study", type: "date" },
  ];

  const workExperienceInputs = [
    { name: "Company Name" },
    { name: "Position Title" },
    { name: "Position Summary", type: "textarea" },
    { name: "Start Date", type: "date" },
    { name: "End Date", type: "date" },
  ];

  return (
    <div className="form">
      <FormSection title="General Info" inputs={genInfoInputs}></FormSection>
      <FormSection title="Education" inputs={educationInputs}></FormSection>
      <FormSection
        title="Work Experience"
        inputs={workExperienceInputs}
      ></FormSection>
    </div>
  );
}
