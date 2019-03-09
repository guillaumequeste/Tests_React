import React from 'react';

class DidMount extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: null
        };
    }
    componentDidMount() {
        setTimeout( () => {
            this.setState({
                message: 'Me voilà !'
            });
        }, 2500)
    }
    render() {
        return(
            <div>
                <h3>Méthode componentDidMount :</h3>
                <p>Message: {this.state.message}</p>
            </div>
        );
    }
};

export default DidMount;