import { useState } from "react";

function PracticalExperience() {
  const [experiences, setExperiences] = useState([
    {
      id: 1,
      company: "",
      position: "",
      responsibilities: "",
      startDate: "",
      endDate: "",
    },
  ]);
  const [isEditing, setIsEditing] = useState(true);

  const handleInputChange = (id, field, value) => {
    setExperiences(
      experiences.map((experience) =>
        experience.id === id ? { ...experience, [field]: value } : experience
      )
    );
  };

  const addExperience = () => {
    setExperiences([
      ...experiences,
      {
        id: Date.now(),
        company: "",
        position: "",
        responsibilities: "",
        startDate: "",
        endDate: "",
      },
    ]);
  };

  const deleteExperience = (id) => {
    setExperiences(experiences.filter((experience) => experience.id !== id));
  };

  const handleSubmit = () => {
    setIsEditing(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  return (
    <div className="practical-experience">
      <h3>Work Experience</h3>
      {isEditing ? (
        <>
          {experiences.map((experience) => (
            <div key={experience.id} className="experience-entry">
              <input
                type="text"
                placeholder="Company Name"
                value={experience.company}
                onChange={(e) =>
                  handleInputChange(experience.id, "company", e.target.value)
                }
              />
              <input
                type="text"
                placeholder="Position Title"
                value={experience.position}
                onChange={(e) =>
                  handleInputChange(experience.id, "position", e.target.value)
                }
              />
              <textarea
                placeholder="Main Responsibilities"
                value={experience.responsibilities}
                onChange={(e) =>
                  handleInputChange(
                    experience.id,
                    "responsibilities",
                    e.target.value
                  )
                }
              />
              <label>Start Date:</label>
              <input
                type="number"
                placeholder="YYYY"
                min="1900"
                max={new Date().getFullYear()}
                value={experience.startDate}
                onChange={(e) =>
                  handleInputChange(experience.id, "startDate", e.target.value)
                }
              />
              <label>End Date:</label>
              <input
                type="number"
                placeholder="YYYY"
                min="1900"
                max={new Date().getFullYear()}
                value={experience.endDate}
                onChange={(e) =>
                  handleInputChange(experience.id, "endDate", e.target.value)
                }
              />
              <button onClick={() => deleteExperience(experience.id)}>
                Delete
              </button>
            </div>
          ))}
          <button onClick={addExperience}>Add More Experience</button>
          <button onClick={handleSubmit}>Submit</button>
        </>
      ) : (
        <>
          {experiences.map((experience) => (
            <div key={experience.id} className="experience-entry">
              <p>Company Name: {experience.company}</p>
              <p>Position Title: {experience.position}</p>
              <p>Main Responsibilities: {experience.responsibilities}</p>
              <p>Start Date: {experience.startDate}</p>
              <p>End Date: {experience.endDate}</p>
            </div>
          ))}
          <button onClick={handleEdit}>Edit</button>
        </>
      )}
    </div>
  );
}

export default PracticalExperience;
