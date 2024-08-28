import { useState } from "react";
import EducationExperience from "./components/EducationalExperience";
import GeneralInfo from "./components/GeneralInfo";
import MainHobbies from "./components/Hobbies";
import Objectives from "./components/Objectives";
import PracticalExperience from "./components/PracticalExperience";
import Referee from "./components/Referee";
import MainSkills from "./components/Skills";

import "./App.css";

const App = () => {
  const [generalData, setGeneralData] = useState([]);
  const [objective, setObjectivesData] = useState(""); // Fixed objective state
  const [educationData, setEducationData] = useState([]);
  const [practicalData, setPracticalData] = useState([]);
  const [refereeData, setRefereeData] = useState([]);
  const [hobbiesData, setHobbiesData] = useState([]);
  const [skillsData, setSkillsData] = useState([]);

  // State to track the active tab
  const [activeTab, setActiveTab] = useState("GeneralInfo");

  const handlePrint = () => {
    window.print();
  };

  // Function to render the active component based on the selected tab
  const renderActiveTabContent = () => {
    switch (activeTab) {
      case "GeneralInfo":
        return <GeneralInfo setGeneralData={setGeneralData} />;
      case "Objectives":
        return <Objectives setObjectivesData={setObjectivesData} />;
      case "EducationExperience":
        return <EducationExperience setEducationData={setEducationData} />;
      case "PracticalExperience":
        return <PracticalExperience setPracticalData={setPracticalData} />;
      case "MainSkills":
        return <MainSkills setSkillsData={setSkillsData} />;
      case "MainHobbies":
        return <MainHobbies setHobbiesData={setHobbiesData} />;
      case "Referee":
        return <Referee setRefereeData={setRefereeData} />;
      default:
        return <GeneralInfo setGeneralData={setGeneralData} />;
    }
  };

  return (
    <div className="app row container-fluid">
      <header className="header d-flex flex-column justify-content-center">
        <div className="row px-5 fw-bold">
          <div className="col-6 text-bold">CV Builder</div>
          <div className="col-6 text-end">
            <button className="px-3 rounded" onClick={handlePrint}>
              Print CV
            </button>
          </div>
        </div>
      </header>

      <div className="row">
        <div className="col-md-4 text-center">
          <h1>Input Information</h1>
        </div>
        <div className="col-md-8 text-center">
          <h1>CV Preview</h1>
        </div>
      </div>

      <div className="col-4 input-section">
        {/* Tab navigation */}
        <div className="tab-navigation">
          <button
            onClick={() => setActiveTab("GeneralInfo")}
            className={activeTab === "GeneralInfo" ? "active" : ""}>
            General Info
          </button>
          <button
            onClick={() => setActiveTab("Objectives")}
            className={activeTab === "Objectives" ? "active" : ""}>
            Objectives
          </button>
          <button
            onClick={() => setActiveTab("EducationExperience")}
            className={activeTab === "EducationExperience" ? "active" : ""}>
            Education
          </button>
          <button
            onClick={() => setActiveTab("PracticalExperience")}
            className={activeTab === "PracticalExperience" ? "active" : ""}>
            Experience
          </button>
          <button
            onClick={() => setActiveTab("MainSkills")}
            className={activeTab === "MainSkills" ? "active" : ""}>
            Skills
          </button>
          <button
            onClick={() => setActiveTab("MainHobbies")}
            className={activeTab === "MainHobbies" ? "active" : ""}>
            Hobbies
          </button>
          <button
            onClick={() => setActiveTab("Referee")}
            className={activeTab === "Referee" ? "active" : ""}>
            Referee
          </button>
        </div>

        {/* Render the active tab's content */}
        <div className="tab-content">{renderActiveTabContent()}</div>
      </div>

      <div className="col-8 cv-preview print-only">
        <div className="cv-section">
          {generalData.map((gen) => (
            <div key={gen.id} className="text-center generalinfo">
              <h1 className="myName">{gen.name.toUpperCase()}</h1>
              <p>
                <strong>Address: </strong>
                {gen.address}
              </p>
              <p>
                <strong>Tel: </strong>
                {gen.phone}
              </p>
              <p>
                <strong>Email: </strong>
                {gen.email}
              </p>
            </div>
          ))}
        </div>
        <div className="cv-section">
          <h5>OBJECTIVE</h5>
          <p>{objective}</p>
        </div>
        <div className="cv-section">
          <h5>EDUCATIONAL QUALIFICATION WITH DATE</h5>
          {educationData.map((edu) => (
            <ul key={edu.id} className="list-group">
              <li className="list-group-item d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto">
                  <div className="fw-bold">{edu.school}</div>
                  {edu.title}
                </div>
                <span className="fw-bold">
                  {edu.startDate} - {edu.endDate}
                </span>
              </li>
            </ul>
          ))}
        </div>
        <div className="cv-section">
          <h5>WORK EXPERIENCE</h5>
          {practicalData.map((exp) => (
            <ul key={exp.id} className="list-group">
              <li className="list-group-item d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto">
                  <div className="fw-bold">{exp.company}</div>
                  {exp.position}
                </div>
                <span className="fw-bold">
                  {exp.startDate} - {exp.endDate}
                </span>
              </li>
            </ul>
          ))}
        </div>
        <div className="cv-section">
          <h5>Skills</h5>
          <ul>
            {skillsData.map((skill) => (
              <li key={skill.id}>{skill.skills}</li>
            ))}
          </ul>
        </div>
        <div className="cv-section">
          <h5>Hobbies</h5>
          <div className="ms-2">
            {hobbiesData.map((hobby) => (
              <span key={hobby.id}>{hobby.hobbies}</span>
            ))}
          </div>
        </div>
        <div className="cv-section">
          <h5>Referee</h5>
          <div className="ms-2">
            {refereeData.map((ref) => (
              <ul key={ref.id} className="list-unstyled">
                <li>{ref.name}</li>
                <li>{ref.position}</li>
                <li>{ref.institution}</li>
                <li>
                  <strong>{ref.number}</strong>
                </li>
              </ul>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
