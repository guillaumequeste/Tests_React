import React from 'react';

class OnlyEvens extends React.Component {
    constructor(props) {
        super(props);
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log('Should I update ?');
        if (nextProps.value % 2 == 0) {
            return true;
        }
        return false;
    }
    componentWillReceiveProps(nextProps) {
        console.log('Receiving new props...');
    }
    componentDidUpdate() {
        console.log('Component re-rendered');
    }
    render() {
        return <h3>{this.props.value}</h3>
    }
};

export default OnlyEvens;