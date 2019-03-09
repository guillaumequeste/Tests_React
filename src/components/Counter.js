import React from 'react';

const styles = {
    color: "white",
    backgroundColor: "black"
  };

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itemCount: 0
        };
        this.addItem = this.addItem.bind(this);
    }
    addItem() {
        this.setState({
            itemCount: this.state.itemCount + 1
        });
    }
    render() {
        return(
            <div style={styles}>
                <h3>Counter sur clic bouton :</h3>
                <button onClick={this.addItem}>Click Me</button>
                <p>current item count: {this.state.itemCount}</p>
            </div>
        );
    }
};

export default Counter;