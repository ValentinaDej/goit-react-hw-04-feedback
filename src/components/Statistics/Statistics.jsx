import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <p className={styles.info}>Good: {good}</p>
      <p className={styles.info}>Neutral: {neutral}</p>
      <p className={styles.info}>Bad: {bad} </p>
      <p className={styles.infoTotal}>Total: {total} </p>
      <p className={styles.infoTotal}>
        Positive feedback: {positivePercentage(good)}%{' '}
      </p>
    </>
  );
};

export default Statistics;

Statistics.prototypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

//{ good, neutral, bad, total, positivePercentage }
