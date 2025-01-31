import { useState, useEffect } from "react";

function MainHobbies({ setHobbiesData }) {
  const [hobbies, setHobbies] = useState([{ id: 1, hobbies: "" }]);
  const [isEditing, setIsEditing] = useState(true);

  useEffect(() => {
    setHobbiesData(hobbies);
  }, [hobbies, setHobbiesData]);

  const handleInputChange = (id, field, value) => {
    setHobbies(
      hobbies.map((hobby) =>
        hobby.id === id ? { ...hobby, [field]: value } : hobby
      )
    );
  };

  const addHobbies = () => {
    setHobbies([...hobbies, { id: Date.now(), hobbies: ", " }]);
  };

  const deleteHobbies = (id) => {
    setHobbies(hobbies.filter((hobby) => hobby.id !== id));
  };

  const handleSubmit = () => {
    setIsEditing(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  return (
    <div className="hobbies">
      <h3>Hobbies</h3>
      {isEditing ? (
        <>
          {hobbies.map((hobby, index) => (
            <div key={hobby.id} className="hobby-entry">
              <input
                type="text"
                placeholder="Add Hobbies"
                value={hobby.hobbies}
                onChange={(e) =>
                  handleInputChange(hobby.id, "hobbies", e.target.value)
                }
              />
              <button onClick={() => deleteHobbies(hobby.id)}>Delete</button>
            </div>
          ))}
          <button onClick={addHobbies}>Add More Hobbies</button>
          <button onClick={handleSubmit}>Submit</button>
        </>
      ) : (
        <>
          {hobbies.map((hobby, index) => (
            <span key={hobby.id} className="hobby-entry">
              {hobby.hobbies}
            </span>
          ))}
          <button onClick={handleEdit}>Edit</button>
        </>
      )}
    </div>
  );
}

export default MainHobbies;
