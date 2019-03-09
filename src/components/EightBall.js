import React from 'react';

const styles = {
    color: "white",
    backgroundColor: "black",
    paddingTop: "10px"
};

class EightBall extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInput: '',
            randomIndex: ''
        };
        this.ask = this.ask.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    ask() {
        if (this.state.userInput) {
            this.setState({
                randomIndex: Math.floor(Math.random() * 3),
                userInput: ''
            });
        }
    }
    handleChange(event) {
        this.setState({
            userInput: event.target.value
        });
    }
    render() {
        const possibleAnswers = [
            'It is certain',
            'It is decidedly so',
            'Very doubtful'
        ];
        const answer = possibleAnswers[this.state.randomIndex];
        return(
            <div style={styles}>
                <input type="text"
                        value={this.state.userInput}
                        onChange={this.handleChange} /><br /><br />
                <button onClick={this.ask}>Ask the Magic Eight Ball !</button><br />
                <p>Answer : {answer}</p>
            </div>
        );
    }
};

export default EightBall;