import { useState } from "react";
/* import "./GeneralInfo.css"; */

function GeneralInfo() {
  const [generaldata, setGeneraldata] = useState([
    { id: 1, name: "", address: "", phone: "", email: "" },
  ]);
  const [isEditing, setIsEditing] = useState(true);

  const handleInputChange = (id, field, value) => {
    setGeneraldata(
      generaldata.map((data) =>
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
      {isEditing ? (
        <>
          {generaldata.map((data, index) => (
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
                value={data.address}
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
          {generaldata.map((data, index) => (
            <div key={data.id} className="education-entry">
              <p>Name: {data.name}</p>
              <p>Address: {data.address}</p>
              <p>Tel : {data.phone}</p>
              <p>Email: {data.email}</p>
            </div>
          ))}
          <button onClick={handleEdit}>Edit</button>
        </>
      )}
    </div>
  );
}

export default GeneralInfo;
