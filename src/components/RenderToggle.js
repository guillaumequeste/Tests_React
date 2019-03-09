import React from 'react';

const styles = {
    paddingBottom: '10px'
};

class RenderToggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            display: true
        }
        this.toggleDisplay = this.toggleDisplay.bind(this);
    }
    toggleDisplay() {
        this.setState({
            display: !this.state.display
        });
    }
    render() {
        return(
            <div style={styles}>
                <h3>Render with if/else condition :</h3>
                <button onClick={this.toggleDisplay}>Toggle Display</button>
                {this.state.display && <p>Displayed !</p>}
            </div>
        );
    }
};

export default RenderToggle;