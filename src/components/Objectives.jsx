import { useState, useEffect } from "react";

function Objectives({ setObjectivesData }) {
  const [objective, setObjective] = useState("");
  const [isEditing, setIsEditing] = useState(true);

  useEffect(() => {
    setObjectivesData(objective);
  }, [objective, setObjectivesData]);

  const handleInputChange = (value) => {
    setObjective(value);
  };

  const handleSubmit = () => {
    setIsEditing(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  return (
    <div className="objective">
      <h3>Objectives</h3>
      {isEditing ? (
        <>
          <div className="objective-entry">
            <input
              type="text"
              placeholder="Your Objective"
              value={objective}
              onChange={(e) => handleInputChange(e.target.value)}
            />
          </div>
          <button onClick={handleSubmit}>Submit</button>
        </>
      ) : (
        <>
          <div className="education-entry">
            <p>{objective}</p>
          </div>
          <button onClick={handleEdit}>Edit</button>
        </>
      )}
    </div>
  );
}

export default Objectives;
