import './SkillTag.css';

const SkillTag = (props) => {
    return(
        <div className="skillTag">
            {props.skillTitle}
        </div>
    );
}

export default SkillTag;