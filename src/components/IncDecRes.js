import React from 'react';

const styles = {
    color: "white",
    backgroundColor: "black"
  };

class IncDecRes extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            count: 0
        }
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.reset = this.reset.bind(this);
    }
    increment() {
        this.setState({
            count: this.state.count + 1
        });
    }
    decrement() {
        this.setState({
            count: this.state.count - 1
        });
    }
    reset() {
        this.setState({
            count: 0
        });
    }
    render() {
        return(
            <div style={styles}>
            <h3>Increment, decrement, reset :</h3>
                <button className='inc' onClick={this.increment}>Increment</button>
                <button className='dec' onClick={this.decrement}>Decrement</button>
                <button className='res' onClick={this.reset}>Reset</button>
                <p>current count: {this.state.count}</p>
            </div>
        );
    }
};

export default IncDecRes;