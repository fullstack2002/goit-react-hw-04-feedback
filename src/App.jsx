import Section from './components/Section/Section';
import FeedbackOptions from './components/Feedback/Feedback';
import Statistics from './components/Statistics/Statistics';
import Notification from './components/Notification/Notification';
import { Container } from './App.styled';

import React, { Component } from "react";

class App extends Component {
	  state = {
		good: 0,
		neutral: 0,
		bad: 0,
	};

	countTotalFeedback = () => {
		const { good, neutral, bad } = this.state;
		return good + neutral + bad;
	};

	countPositiveFeedbackPercentage = () => {
		return parseInt((this.state.good / this.countTotalFeedback()) * 100);
	};

	getClick = event => {
		const target = event.currentTarget.name;
		this.setState(prev => ({ [target]: prev[target] + 1 }));
	};

	render() {
		const { good, neutral, bad } = this.state;
    const buttonArr = Object.keys(this.state);
		return (
			<Container>
				<Section title="Please leave your feedback">
					<FeedbackOptions
						options={buttonArr}
						onLeaveFeedback={this.getClick}
					/>
				</Section>

				<Section title="Statistics">
					{this.countTotalFeedback() ? (
						<Statistics
						good={good}
						neutral={neutral}
						bad={bad}
						total={this.countTotalFeedback()}
						positivePercentage={this.countPositiveFeedbackPercentage()}
						></Statistics>
						) : (
						<Notification message="There is no feedback"></Notification>
					)}
				</Section>
			</Container>
		);
	}
}

export default App;