import React from 'react';

class SetState extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Initial state'
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState({
            name: 'React Rocks'
        });
    }
    render() {
        return(
            <div>
                <h3>setState :</h3>
                <button onClick={this.handleClick}>Click Me</button>
                <p>{this.state.name}</p>
                <p>{this.props.stateToProp}</p>
            </div>
        );
    }
};

export default SetState;