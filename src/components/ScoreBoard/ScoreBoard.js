import React from 'react';
import './ScoreBoard.css';
import ScoreRow from '../ScoreRow/ScoreRow'

class ScoreBoard extends React.Component {
  render() {
    return (
      <ol className="score-board">
        <ScoreRow />
        <ScoreRow />
        <ScoreRow />
        <ScoreRow />
        <ScoreRow />
        <ScoreRow />
        <ScoreRow />
        <ScoreRow />
        <ScoreRow />
        <ScoreRow />
        <ScoreRow />
      </ol>
    );
  }
}

export default ScoreBoard;
