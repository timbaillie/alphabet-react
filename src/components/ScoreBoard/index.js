import React from 'react';
import Header from '../Header';
import ScoreRow from '../ScoreRow/';
import ScoreName from '../ScoreName/';
import sampleScores from '../../utils/sampleScores';
import base from '../../base';

import './ScoreBoard.css';

class ScoreBoard extends React.Component {
    constructor() {
        super();

        this.addScore = this.addScore.bind(this);
        this.loadSampleScores = this.loadSampleScores.bind(this);

        this.state = {
          scores: []
        };
    }

    addScore(player) {
        const scores = [...this.state.scores, player];
        this.setState({ scores });
    }

    loadSampleScores() {
        const scores = [...this.state.scores, ...sampleScores];
        this.setState({ scores });
    }

    render() {
        return (
            <section>
                <Header headline="Score Board" />
                <ol className="score-board">
                    {
                        this.state.scores
                            .sort((a, b) => b.score - a.score)
                            .map((cur, index) => <ScoreRow key={index} name={cur.name} score={cur.score} />)
                    }
                </ol>
                <ScoreName addScore={this.addScore} />
                <button onClick={this.loadSampleScores}>load score data</button>
            </section>
        );
    }
}

export default ScoreBoard;
