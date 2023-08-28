import { FeedbackDiv, FeedbackBtn } from './FeedbackOptions.styled'


export const FeedbackOptions = ({options,  onLeaveFeedback}) => {
    return (
        <FeedbackDiv>
            {options.map(option => (
                <FeedbackBtn key={option} onClick={() => onLeaveFeedback(option)}>{option}</FeedbackBtn>
            ))}
        </FeedbackDiv>
 )   
}