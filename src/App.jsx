import EducationExperience from "./components/EducationalExperience";
import GeneralInfo from "./components/GeneralInfo";
import Objectives from "./components/Objectives";
import PracticalExperience from "./components/PracticalExperience";
import MainSkills from "./components/Skills";

const App = () => {
  return (
    <div>
      <GeneralInfo />
      <Objectives />
      <EducationExperience />
      <PracticalExperience />
      <MainSkills />
    </div>
  );
};

export default App;
