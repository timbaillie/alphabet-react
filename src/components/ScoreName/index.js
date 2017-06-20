import React from 'react';
import {randomScore} from '../../utils/helpers';

import './ScoreName.css';


class ScoreName extends React.Component {
    addPlayerName(event) {
        event.preventDefault();
        const play = {
            name: this.playerName.value,
            score: randomScore()
        };
        console.log(`Name: ${play.name}, Score: ${play.score}`);
        this.props.addScore(play);
        this.playerForm.reset();
    }

    render() {
        return (
            <form ref={(input) => {this.playerForm = input}} onSubmit={this.addPlayerName.bind(this)} className="score-name">
                <label>Name:</label>
                <input type="text" required ref={(input) => {this.playerName = input}}/>
                <input type="submit" value="Confirm"/>
            </form>
        );
    }
}

export default ScoreName;
