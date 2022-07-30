import './Button.css';

const Button = (props) => {
  return (
    <input type="submit" className="input" onClick={props.onSubmit()} text={props.buttonText}>
    </input>
  );
}

export default Button;