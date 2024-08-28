import { useState } from "react";
import EducationExperience from "./components/EducationalExperience";
import GeneralInfo from "./components/GeneralInfo";
import MainHobbies from "./components/Hobbies";
import Objectives from "./components/Objectives";
import PracticalExperience from "./components/PracticalExperience";
import Referee from "./components/Referee";
import MainSkills from "./components/Skills";

const App = () => {
  const [generalData, setGeneralData] = useState([]);
  const [objective, setObjectivesData] = useState(""); // Fixed objective state
  const [educationData, setEducationData] = useState([]);
  const [practicalData, setPracticalData] = useState([]);
  const [refereeData, setRefereeData] = useState([]);
  const [hobbiesData, setHobbiesData] = useState([]);
  const [skillsData, setSkillsData] = useState([]);

  return (
    <div className="app">
      <div>
        <h1>CV Preview</h1>
        <div className="cv-sevtion">
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
      </div>

      <div>
        <h1>Input Information</h1>
        <GeneralInfo setGeneralData={setGeneralData} />
        <Objectives setObjectivesData={setObjectivesData} />
        <EducationExperience setEducationData={setEducationData} />
        <PracticalExperience setPracticalData={setPracticalData} />
        <MainSkills setSkillsData={setSkillsData} />
        <MainHobbies setHobbiesData={setHobbiesData} />
        <Referee setRefereeData={setRefereeData} />
      </div>
    </div>
  );
};

export default App;
