import React from 'react';

class ArrayFilter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [
                {
                    username: 'Jeff',
                    online: true
                },
                {
                    username: 'Alan',
                    online: false
                },
                {
                    username: 'Mary',
                    online: true
                }
            ]
        };
    }
    render() {
        const usersOnline = this.state.users.filter(i => i.online == true);
        const rendersOnline = usersOnline.map((i) => <li key={i.username + 1}>{i.username}</li>);
        return(
            <div>
                <h3>Array filter :</h3>
                <p>Current online users :</p>
                <ul>
                    {rendersOnline}
                </ul>
            </div>
        );
    }
};

export default ArrayFilter;