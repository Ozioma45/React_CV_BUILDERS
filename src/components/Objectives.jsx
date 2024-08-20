import { useState } from "react";

function Objectives() {
  const [objective, setObjective] = useState("");
  const [isEditing, setIsEditing] = useState(true);

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
            <h3>Objective</h3>
            <p>{objective}</p>
          </div>
          <button onClick={handleEdit}>Edit</button>
        </>
      )}
    </div>
  );
}

export default Objectives;
