import { useState, useEffect } from "react";

function GeneralInfo({ setGeneralData }) {
  const [generalData, setGeneraldata] = useState([
    { id: 1, name: "", address: "", phone: "", email: "" },
  ]);
  const [isEditing, setIsEditing] = useState(true);

  useEffect(() => {
    setGeneralData(generalData);
  }, [generalData, setGeneralData]);

  const handleInputChange = (id, field, value) => {
    setGeneraldata(
      generalData.map((data) =>
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
    <div className="general-info">
      <h3>General Information</h3>
      {isEditing ? (
        <>
          {generalData.map((data) => (
            <div key={data.id} className="general-info-entry">
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
                placeholder="Your Address"
                value={data.address}
                onChange={(e) =>
                  handleInputChange(data.id, "address", e.target.value)
                }
              />
              <input
                type="text"
                placeholder="Telephone"
                value={data.phone}
                onChange={(e) =>
                  handleInputChange(data.id, "phone", e.target.value)
                }
              />
              <input
                type="text"
                placeholder="Your Email"
                value={data.email}
                onChange={(e) =>
                  handleInputChange(data.id, "email", e.target.value)
                }
              />
            </div>
          ))}
          <button onClick={handleSubmit}>Submit</button>
        </>
      ) : (
        <>
          {generalData.map((data) => (
            <div key={data.id} className="general-info-display">
              <p>
                <strong>Name:</strong> {data.name}
              </p>
              <p>
                <strong>Address:</strong> {data.address}
              </p>
              <p>
                <strong>Tel:</strong> {data.phone}
              </p>
              <p>
                <strong>Email:</strong> {data.email}
              </p>
            </div>
          ))}
          <button onClick={handleEdit}>Edit</button>
        </>
      )}
    </div>
  );
}

export default GeneralInfo;
