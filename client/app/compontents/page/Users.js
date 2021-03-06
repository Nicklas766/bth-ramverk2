var React = require('react');
var api = require('../../utils/api');

class Users extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        };
    }

    async componentDidMount() {
        const users = await api.fetchUsers();
        this.setState({users: users});
    }

    render() {
        return (
            <div className="Users">
                <h1>Users</h1>
                {this.state.users.map(user =>
                    <div key={user.id}>{user.username}</div>
                )}
            </div>
        );
    }
}

module.exports = Users;
