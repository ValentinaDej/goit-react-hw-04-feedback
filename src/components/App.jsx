import { useState } from 'react';

import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

const App = () => {
  const [votes, setVotes] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const { good, neutral, bad } = votes;
  const options = Object.keys(votes);

  const leaveVote = name => {
    setVotes(prevState => {
      const value = prevState[name];
      return { ...prevState, [name]: value + 1 };
    });
  };

  const total = good + neutral + bad;

  const countPercentage = propName => {
    if (!total) {
      return 0;
    }
    const result = Math.round((propName / total) * 100);
    return Number(result);
  };

  return (
    <>
      <Section title="Please leave your feedback">
        <FeedbackOptions options={options} onLeaveFeedback={leaveVote} />
      </Section>
      {total ? (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            countTotalFeedback={total}
            positivePercentage={countPercentage}
          />
        </Section>
      ) : (
        <Notification title={'There is no feedback'} />
      )}
    </>
  );
};

export default App;
