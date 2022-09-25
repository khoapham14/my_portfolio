import SkillTag from '../SkillTag/SkillTag';
import './SkillList.css';

const SkillList = (props) => {
  return(
    <div className="skillList">
      {props.skillArray.length > 0 ? props.skillArray.map((x) => {
        return(
          <SkillTag skillTitle={x} />
        );

      }) : "NO SKILLS"}
    </div>
  );
}

export default SkillList;