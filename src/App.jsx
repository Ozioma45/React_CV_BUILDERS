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

      <div className="col-4 input-section">
        <h1>Input Information</h1>

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
        <h1>CV Preview</h1>
        <div className="cv-section">
          <h2>General Information</h2>
          {generalData.map((gen) => (
            <div key={gen.id}>
              <p>{gen.name}</p>
              <p>{gen.address}</p>
              <p>{gen.phone}</p>
              <p>{gen.email}</p>
            </div>
          ))}
        </div>
        <div className="cv-section">
          <h2>Objective</h2>
          <p>{objective}</p>
        </div>
        <div className="cv-section">
          <h2>Educational Experience</h2>
          {educationData.map((edu) => (
            <div key={edu.id}>
              <p>{edu.school}</p>
              <p>{edu.title}</p>
              <p>{edu.startDate}</p>
              <p>{edu.endDate}</p>
            </div>
          ))}
        </div>
        <div className="cv-section">
          <h2>Work Experience</h2>
          {practicalData.map((exp) => (
            <div key={exp.id}>
              <p>{exp.company}</p>
              <p>{exp.position}</p>
              <p>{exp.responsibilities}</p>
              <p>{exp.startDate}</p>
              <p>{exp.endDate}</p>
            </div>
          ))}
        </div>
        <div className="cv-section">
          <h2>Skills</h2>
          <ul>
            {skillsData.map((skill) => (
              <li key={skill.id}>{skill.skills}</li>
            ))}
          </ul>
        </div>
        <div className="cv-section">
          <h2>Hobbies</h2>
          {hobbiesData.map((hobby) => (
            <span key={hobby.id}>{hobby.hobbies}</span>
          ))}
        </div>
        <div className="cv-section">
          <h2>Referee</h2>
          {refereeData.map((ref) => (
            <div key={ref.id}>
              <p>{ref.name}</p>
              <p>{ref.position}</p>
              <p>{ref.institution}</p>
              <p>{ref.number}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
