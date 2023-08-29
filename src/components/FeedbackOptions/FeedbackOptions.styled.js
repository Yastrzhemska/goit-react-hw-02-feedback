import styled from 'styled-components';

export const FeedbackDiv  = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    margin-left: 25px;
`

export const FeedbackBtn  = styled.button`
    font-weight: 300;
    font-size: 16px;
    line-height: 1.5;
    display: block;
    color: black;
    background-color: #ccf2ff;
    cursor: pointer;
    border: none;
    border-radius: 4px;
    padding: 6px 12px;

    :hover
    :focus {
    background-color: #0099ff;
    }
`

