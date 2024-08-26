import EducationExperience from "./components/EducationalExperience";
import GeneralInfo from "./components/GeneralInfo";
import MainHobbies from "./components/Hobbies";
import Objectives from "./components/Objectives";
import PracticalExperience from "./components/PracticalExperience";
import Referee from "./components/Referee";
import MainSkills from "./components/Skills";

const App = () => {
  return (
    <div>
      <GeneralInfo />
      <Objectives />
      <EducationExperience />
      <PracticalExperience />
      <MainSkills />
      <MainHobbies />
      <Referee />
    </div>
  );
};

export default App;
