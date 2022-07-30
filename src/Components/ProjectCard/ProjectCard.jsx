import './ProjectCard.css';
import { Button } from '../Button/Button.jsx';

const ProjectCard = (props) => {
  const onSubmit = () => {
    window.open(props.projectUrl, '_blank');
  }

  return (
    <div>
      <div>
        <img src={props.projectImage} alt="Project"></img>
      </div>
      <div>
        <p> {props.projectTitle} </p>
        <p> {props.projectDescription} </p>
        <Button onSubmit={onSubmit} buttonText={"See Project"} />
      </div>
    </div>
  );
}

export default ProjectCard;