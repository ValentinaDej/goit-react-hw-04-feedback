import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const elements = options.map(name => (
    <div className={styles.container} key={name}>
      <button
        className={styles.button}
        onClick={() => onLeaveFeedback(name)}
        type="button"
      >
        {name}
      </button>
    </div>
  ));

  return <>{elements}</>;
};

export default FeedbackOptions;

FeedbackOptions.prototypes = {
  onLeaveFeedback: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};
