import PropTypes from "prop-types";
import { Button } from './Feedback.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => { 
  return (
    <div>
      {options.map((option, index) => (
        <Button
          type="button"
          name={option}
          onClick={onLeaveFeedback}
          key={index}
        >{option}</Button>
      ))}
    </div>
  );  
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
export default FeedbackOptions;