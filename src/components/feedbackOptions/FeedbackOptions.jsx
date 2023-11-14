import css from './feedbackOptions.module.css';

export const FeedbackOptions = ({ option, onLeaveFeedback }) => {
  return (
    <div>
      {option.map(option => (
        <button
          className={css.btn}
          value={option}
          key={option}
          type="button"
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};
