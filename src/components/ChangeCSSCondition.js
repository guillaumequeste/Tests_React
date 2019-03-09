import React from 'react';

const styles = {
    paddingBottom: "10px"
};

class ChangeCSSCondition extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({
            input: event.target.value
        })
    }
    render() {
        let inputStyle = {
            border: '1px solid black'
        };
        if (this.state.input.length > 5) {
            inputStyle.border = '5px solid black'
        }
        return (
            <div style={styles}>
                <h3>Don't type too much :</h3>
                <input type="text"
                        style={inputStyle}
                        value={this.state.input}
                        onChange={this.handleChange} />
            </div>
        );
    }
};

export default ChangeCSSCondition;