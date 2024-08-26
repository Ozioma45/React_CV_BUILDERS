import { useState } from "react";

function Referee() {
  const [referee, setReferee] = useState([
    { id: 1, name: "", position: "", institution: "", number: "" },
  ]);
  const [isEditing, setIsEditing] = useState(true);

  const handleInputChange = (id, field, value) => {
    setReferee(
      referee.map((data) =>
        data.id === id ? { ...data, [field]: value } : data
      )
    );
  };

  const handleSubmit = () => {
    setIsEditing(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  return (
    <div className="referee-entry">
      <h3>Referee</h3>
      {isEditing ? (
        <>
          {referee.map((data, index) => (
            <div key={data.id} className="referee-entry">
              <input
                type="text"
                placeholder="Full Name"
                value={data.name}
                onChange={(e) =>
                  handleInputChange(data.id, "name", e.target.value)
                }
              />
              <input
                type="text"
                placeholder="his/her Position"
                value={data.position}
                onChange={(e) =>
                  handleInputChange(data.id, "position", e.target.value)
                }
              />
              <input
                type="text"
                placeholder="Institution"
                value={data.institution}
                onChange={(e) =>
                  handleInputChange(data.id, "institution", e.target.value)
                }
              />
              <input
                type="text"
                placeholder="his/her Number"
                value={data.number}
                onChange={(e) =>
                  handleInputChange(data.id, "number", e.target.value)
                }
              />
            </div>
          ))}
          <button onClick={handleSubmit}>Submit</button>
        </>
      ) : (
        <>
          {referee.map((data, index) => (
            <div key={data.id} className="referee-entry">
              <p>{data.name}</p>
              <p>{data.position}</p>
              <p>{data.institution}</p>
              <p>
                <b>{data.number}</b>
              </p>
            </div>
          ))}
          <button onClick={handleEdit}>Edit</button>
        </>
      )}
    </div>
  );
}

export default Referee;
