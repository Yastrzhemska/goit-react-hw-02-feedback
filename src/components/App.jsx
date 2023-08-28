import { Component } from "react"

import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions"
import { Section } from "./Section/Section"
import { Statistics } from "./Statistics/Statistics"
import { Notification } from "./Notification/Notification"

export class App extends Component {

state = {
  good: 0,
  neutral: 0,
  bad: 0
}
  



countTotalFeedback = () => {
  const {good, neutral, bad} = this.state;
  return good + neutral + bad
  
};

countPositiveFeedbackPercentage = () => {
const {good} = this.state;
const total = this.countTotalFeedback();
const result = total === 0 ? 0 : Math.round(good / total * 100);
return result;
}


onClickBtn = items =>{
this.setState(prevState => {
  return {
    [items]: prevState[items] +1
  }
})
console.log(items)
};



  render() {
    const content = this.countTotalFeedback() > 0;
    
    return (
      <>
        <Section
        title="Please leave feedback">

          <FeedbackOptions 
            options={["good", "neutral", "bad"]}
            onLeaveFeedback={this.onClickBtn}
        />
        </Section>
      
        <Section
          title="Statistics">
          {content ? (<Statistics 
              good={this.state.good} 
              neutral={this.state.neutral} 
              bad={this.state.bad} 
              total={this.countTotalFeedback()} 
              positivePercentage={this.countPositiveFeedbackPercentage()} />)
            : (<Notification
              massege="There is no feedback" />)}
            
          
        </Section>

      </>
    )
  }
  

};
