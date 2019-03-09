import React from 'react';

class Results extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return(
            <p>{(this.props.fiftyFifty) ? "You win !" : "You lose"}</p>
        );
    }
};

export default Results;