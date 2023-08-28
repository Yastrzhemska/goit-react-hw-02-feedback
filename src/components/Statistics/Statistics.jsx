import {Text, StatDiv} from './Statistics.styled'

export const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
    return (
        <StatDiv>
            <Text>Good: {good}</Text>
            <Text>Neutral: {neutral}</Text>
            <Text>Bad: {bad}</Text>
            <Text>Total: {total}</Text>
            <Text>PositivePercentage: {positivePercentage}%</Text>
        </StatDiv>
 )   
}