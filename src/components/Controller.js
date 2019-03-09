import React from 'react';
import OnlyEvens from './OnlyEvens';

const styles = {
    color: "white",
    backgroundColor: "black"
};

class Controller extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0
        };
        this.addValue = this.addValue.bind(this);
    }
    addValue() {
        this.setState({
            value: this.state.value + 1
        });
    }
    render() {
        return(
            <div style={styles}>
                <h3>Je n'affiche que les nombres pairs :</h3>
                <button onClick={this.addValue}>Add</button>
                <OnlyEvens value={this.state.value} />
            </div>
        );
    }
};

export default Controller;