import React from 'react';
import './ScoreRow.css';

const ScoreRow = (props) => {
    return (
        <li className="score-row">{props.name} {props.score}</li>
    );
}

export default ScoreRow;
