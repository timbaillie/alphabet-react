import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

import App from './components/App';
import About from './components/About';
import ScoreBoard from './components/ScoreBoard';
import NotFound from './components/NotFound';
import './index.css';

const Root = () => {
    return(
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={App}/>
                    <Route path="/about" component={About}/>
                    <Route path="/scoreboard" component={ScoreBoard}/>
                    <Route component={NotFound}/>
                </Switch>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/scoreboard">Score Board</Link></li>
                </ul>
            </div>
        </Router>
    );
}

render(<Root/>, document.getElementById('root'));
