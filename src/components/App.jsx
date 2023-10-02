import { Fragment } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistic } from './Statistic/Statistic';
import { Component } from 'react';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

function countTotalFeedback(state) {
  return state.good + state.neutral + state.bad;
}

function countPositiveFeedbackPercentage(good, total) {
  if (total !== 0) {
    return Math.round((good * 100) / total) + '%';
  }
  return;
}

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  clickButton = name => {
    this.setState(prevState => {
      return {
        [name]: prevState[name] + 1,
      };
    });
  };

  render() {
    const emote = this.state;

    return (
      <Fragment>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.clickButton}
          />
        </Section>
        <Section title="Statistics">
          {countTotalFeedback(emote) === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistic
              good={emote.good}
              neutral={emote.neutral}
              bad={emote.bad}
              total={countTotalFeedback(emote)}
              positivePercentage={countPositiveFeedbackPercentage(
                emote.good,
                countTotalFeedback(emote)
              )}
            />
          )}
        </Section>
      </Fragment>
    );
  }
}
