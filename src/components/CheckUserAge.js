import React from 'react';

const styles = {
    color: "white",
    backgroundColor: "black",
    paddingBottom: "10px"
};

class CheckUserAge extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            userAge: ''
        }
        this.submit = this.submit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({
            input: event.target.value,
            userAge: ''
        });
    }
    submit() {
        this.setState({
            userAge: this.state.input
        });
    }
    render() {
        const buttonOne = <button onClick={this.submit}>Submit</button>;
        const buttonTwo = <button>You may enter</button>;
        const buttonThree = <button>You shall not pass</button>;
        return(
            <div style={styles}>
                <h3>Render with expression ternaire :</h3>
                <p>Enter your age to continue :</p>
                <input type="number"
                        value={this.state.input}
                        onChange={this.handleChange} /><br /><br />
                {(this.state.userAge >= 18) ? buttonTwo : (this.state.userAge == '') ? buttonOne : buttonThree}
            </div>
        );
    }
};

export default CheckUserAge;