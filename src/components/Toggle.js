import React from 'react';

const styles = {
    paddingBottom: "5px"
};

class Toggle extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            visibility: false
        }
        this.toggleVisibility = this.toggleVisibility.bind(this);
    }
    toggleVisibility() {
        if (this.state.visibility == true) {
            this.setState({
                visibility: false
            });
        } else {
            this.setState({
                visibility: true
            });
        }
    }
    render() {
        if (this.state.visibility) {
            return(
                <div style={styles}>
                    <h3>Toggle :</h3>
                    <button onClick={this.toggleVisibility}>Click Me</button>
                    <p>Now you see me !</p>
                </div>
            );
        } else {
            return(
                <div style={styles}>
                    <h3>Toggle :</h3>
                    <button onClick={this.toggleVisibility}>Click Me</button>
                </div>
            );
        }
    }
};

export default Toggle;