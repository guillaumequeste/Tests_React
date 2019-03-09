import React from 'react';

class ControlledInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
        this.setState({
            input: e.target.value
        });
    }
    render() {
        return(
            <div>
                <h3>Controlled input :</h3>
                <input value={this.state.input} onChange={this.handleChange} />
                <p>{this.state.input}</p>
            </div>
        );
    }
};

export default ControlledInput;