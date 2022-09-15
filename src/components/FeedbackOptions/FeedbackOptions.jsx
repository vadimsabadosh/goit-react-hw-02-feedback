import React from 'react';
import PropTypes from 'prop-types';

export default function FeedbackOptions({ onLeaveFeedback, options }) {
  return (
    <div>
      {options.map(button => (
        <button onClick={() => onLeaveFeedback(button)} key={button}>
          {button}
        </button>
      ))}
    </div>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
