import PropTypes from "prop-types";
import { Button } from './Feedback.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => { 
  return (
    <>
      {Object.keys(options).map(key => (
        <Button
          onClick={onLeaveFeedback}
          type="button"
          key={key}
          value={key}
        >{key}</Button>
      ))}
    </>
  );  
}

FeedbackOptions.propTypes = {
  options: PropTypes.shape({
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
  }).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
}

export default FeedbackOptions;