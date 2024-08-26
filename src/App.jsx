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
  /* const [objectivesData, setObjectivesData] = useState([]);
  const [educationData, setEducationData] = useState([]);
  const [practicalData, setPracticalData] = useState([]);
  const [refereeData, setRefereeData] = useState([]);
  const [hobbiesData, setobbiesData] = useState([]);
  const [skillsData, setSkillsData] = useState([]); */

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
      </div>

      <div>
        <h1>hello</h1>
        <GeneralInfo setGeneralData={setGeneralData} />
        <Objectives />
        <EducationExperience />
        <PracticalExperience />
        <MainSkills />
        <MainHobbies />
        <Referee />
      </div>
    </div>
  );
};

export default App;
