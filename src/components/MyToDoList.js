import React from 'react';

const styles = {
    color: "white",
    backgroundColor: "black"
};

const textAreaStyles = {
    width: 235,
    margin: 5
};

class MyToDoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInput: '',
            toDoList: []
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleSubmit() {
        const itemsArray = this.state.userInput.split(',');
        this.setState({
            toDoList: itemsArray
        });
    }
    handleChange(event) {
        this.setState({
            userInput: event.target.value
        });
    }
    render() {
        const items = this.state.toDoList.map(i => <li key={i + 1}>{i}</li>);
        return(
            <div style={styles}>
                <h3>To Do List :</h3>
                <textarea onChange={this.handleChange}
                            value={this.state.userInput}
                            style={textAreaStyles}
                            placeholder="Separate items with commas" /><br /><br />
                <button onClick={this.handleSubmit}>Create List</button>
                <p>My "To Do" List :</p>
                <ul>
                    {items}
                </ul>
            </div>
        );
    }
};

export default MyToDoList;