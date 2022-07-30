import './SectionHeader.css';

const SectionHeader = (props) => {
  return (
    <div className="sectionContainer">
      <div className="sectionTitle">{props.sectionTitle}</div>
      <div className="sectionDescription">{props.sectionDescription}</div>
    </div>
  );
}

export default SectionHeader;