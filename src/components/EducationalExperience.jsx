import { useState, useEffect } from "react";

function EducationExperience({ setEducationData }) {
  const [educations, setEducations] = useState([
    { id: 1, school: "", title: "", startDate: "", endDate: "" },
  ]);
  const [isEditing, setIsEditing] = useState(true);

  useEffect(() => {
    setEducationData(educations);
  }, [educations, setEducationData]);

  const handleInputChange = (id, field, value) => {
    setEducations(
      educations.map((education) =>
        education.id === id ? { ...education, [field]: value } : education
      )
    );
  };

  const addEducation = () => {
    setEducations([
      ...educations,
      { id: Date.now(), school: "", title: "", startDate: "", endDate: "" },
    ]);
  };

  const deleteEducation = (id) => {
    setEducations(educations.filter((education) => education.id !== id));
  };

  const handleSubmit = () => {
    setIsEditing(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  return (
    <div className="education-experience">
      <h3>Education Experience</h3>
      {isEditing ? (
        <>
          {educations.map((education, index) => (
            <div key={education.id} className="education-entry">
              <input
                type="text"
                placeholder="School Name"
                value={education.school}
                onChange={(e) =>
                  handleInputChange(education.id, "school", e.target.value)
                }
              />
              <input
                type="text"
                placeholder="Title of Study"
                value={education.title}
                onChange={(e) =>
                  handleInputChange(education.id, "title", e.target.value)
                }
              />
              <label>Start Date:</label>
              <input
                type="number"
                placeholder="YYYY"
                min="1900"
                max={new Date().getFullYear()}
                value={education.startDate}
                onChange={(e) =>
                  handleInputChange(education.id, "startDate", e.target.value)
                }
              />
              <label>End Date:</label>
              <input
                type="number"
                placeholder="YYYY"
                min="1900"
                max={new Date().getFullYear()}
                value={education.endDate}
                onChange={(e) =>
                  handleInputChange(education.id, "endDate", e.target.value)
                }
              />
              <button onClick={() => deleteEducation(education.id)}>
                Delete
              </button>
            </div>
          ))}
          <button onClick={addEducation}>Add More Education</button>
          <button onClick={handleSubmit}>Submit</button>
        </>
      ) : (
        <>
          {educations.map((education, index) => (
            <div key={education.id} className="education-entry">
              <p>School Name: {education.school}</p>
              <p>Title of Study: {education.title}</p>
              <p>Start Date: {education.startDate}</p>
              <p>End Date: {education.endDate}</p>
            </div>
          ))}
          <button onClick={handleEdit}>Edit</button>
        </>
      )}
    </div>
  );
}

export default EducationExperience;
