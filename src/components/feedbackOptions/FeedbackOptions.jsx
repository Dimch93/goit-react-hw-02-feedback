import css from './feedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map(options => (
        <button
          className={css.btn}
          value={options}
          key={options}
          type="button"
          onClick={() => onLeaveFeedback(options)}
        >
          {options}
        </button>
      ))}
    </div>
  );
};
