import { Component } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Notification from './Notification';
import Section from './Section';
import Statistics from './Statistics/Statistics';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      good: 0,
      neutral: 0,
      bad: 0,
    };
    this.onLeaveFeedback = this.onLeaveFeedback.bind(this);
  }
  countTotalFeedback() {
    return Object.values(this.state).reduce((acc, next) => acc + next, 0);
  }

  countPositiveFeedbackPercentage() {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100) || 0;
  }

  onLeaveFeedback(type) {
    this.setState(state => {
      return { [type]: state[type] + 1 };
    });
  }

  render() {
    const noFeedback = this.countTotalFeedback() === 0;
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={{}}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {noFeedback ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage() + '%'}
            />
          )}
        </Section>
      </div>
    );
  }
}
