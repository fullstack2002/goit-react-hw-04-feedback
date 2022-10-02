import Section from './components/Section/Section';
import FeedbackOptions from './components/Feedback/Feedback';
import Statistics from './components/Statistics/Statistics';
import Notification from './components/Notification/Notification';
import { Container } from './App.styled';

import React, { useState } from "react";

const App = () => {
	const [state, setState] = useState({
		good: 0,
		neutral: 0,
		bad: 0,
	});

	const { good, neutral, bad } = state;

	const countTotalFeedback = () => {
    return good + neutral + bad;
	};

	const countPositiveFeedbackPercentage = () => {
    return parseInt((good / countTotalFeedback()) * 100);
  };

	const getClick = event => {
    const target = event.currentTarget.name;
    return setState({ ...state, ...{ [target]: state[target] + 1 } });
  };

	const buttonArr = Object.keys(state);
		return (
			<Container>
				<Section title="Please leave your feedback">
					<FeedbackOptions
						options={buttonArr}
						onLeaveFeedback={getClick}
					/>
				</Section>

				<Section title="Statistics">
					{countTotalFeedback() ? (
						<Statistics
						good={good}
						neutral={neutral}
						bad={bad}
						total={countTotalFeedback()}
						positivePercentage={countPositiveFeedbackPercentage()}
						></Statistics>
						) : (
						<Notification message="There is no feedback"></Notification>
					)}
				</Section>
			</Container>
		);
};

export default App;