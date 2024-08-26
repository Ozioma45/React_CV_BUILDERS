import { useState } from "react";

function MainSkills() {
  const [skills, setSkills] = useState([{ id: 1, skills: "" }]);
  const [isEditing, setIsEditing] = useState(true);

  const handleInputChange = (id, field, value) => {
    setSkills(
      skills.map((skill) =>
        skill.id === id ? { ...skill, [field]: value } : skill
      )
    );
  };

  const addSkills = () => {
    setSkills([...skills, { id: Date.now(), skills: "" }]);
  };

  const deleteSkills = (id) => {
    setSkills(skills.filter((skill) => skill.id !== id));
  };

  const handleSubmit = () => {
    setIsEditing(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  return (
    <div className="skills">
      {isEditing ? (
        <>
          {skills.map((skill, index) => (
            <div key={skill.id} className="skill-entry">
              <input
                type="text"
                placeholder="Add Skills"
                value={skill.skills}
                onChange={(e) =>
                  handleInputChange(skill.id, "skills", e.target.value)
                }
              />
              <button onClick={() => deleteSkills(skill.id)}>Delete</button>
            </div>
          ))}
          <button onClick={addSkills}>Add More Skills</button>
          <button onClick={handleSubmit}>Submit</button>
        </>
      ) : (
        <>
          <h3>Skills</h3>
          {skills.map((skill, index) => (
            <ul key={skill.id} className="skill-entry">
              <li>{skill.skills}</li>
            </ul>
          ))}
          <button onClick={handleEdit}>Edit</button>
        </>
      )}
    </div>
  );
}

export default MainSkills;
