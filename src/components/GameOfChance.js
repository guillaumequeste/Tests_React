import React from 'react';
import Results from './Results';

class GameOfChance extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 1
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState({
            counter: this.state.counter + 1
        });
    }
    render() {
        let expression = Math.random() > .5;
        return(
            <div>
                <h3>Jeu de hasard :</h3>
                <button onClick={this.handleClick}>Play again</button>
                <Results fiftyFifty={expression} />
                <p>{'Turn: ' + this.state.counter}</p>
            </div>
        );
    }
};

export default GameOfChance;