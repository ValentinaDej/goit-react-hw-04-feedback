import PropTypes from 'prop-types';
import styles from './Notification.module.css';

const Notification = ({ title }) => {
  return <h2 className={styles.title}>{title}</h2>;
};

export default Notification;

Notification.prototypes = {
  title: PropTypes.string.isRequired,
};
