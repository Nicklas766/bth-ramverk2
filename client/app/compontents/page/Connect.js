var React = require('react');
import socketIOClient from 'socket.io-client';
import Chat from './Socket/Chat'

const Users = (props) => {
    var onlineUsers = props.users.map(user => <li key={user.id}>{user.name}</li>);
    return (
        <ul>
            {onlineUsers}
        </ul>
    );
};

class Connect extends React.Component {
    constructor(props) {
        super(props);
        const socket = socketIOClient("http://localhost:1337");
        this.state = {
          socket: socket,
          chat: false,
          name: "",
          users: [] //object {typing:false, posts:2}
      };

      // Bind "this"
      this.handleInputChange = this.handleInputChange.bind(this);
      this.joinChat          = this.joinChat.bind(this);
    }

    componentDidMount() {
        const socket = this.state.socket;
        socket.on('get users', (users) => {
            console.log(users);
            this.setState({users: users});
        });
    }

    joinChat() {
      if (this.state.users.map(user => user.name).includes(this.state.name)) {
          return false;
      }
      this.setState({chat: true});
      this.state.socket.emit('new user', this.state.name);
    }

    handleInputChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    render() {
        return (
            <div style={{width: "50%", margin: "auto"}} className="container">
                <Users users={this.state.users}/>

                {!this.state.chat &&
                    <div>
                        <input name={"name"} type="text"
                        value={this.state.name} placeholder={"Your name"}
                        onChange={this.handleInputChange} style={{width:"100%"}}/>
                        <button onClick={this.joinChat}>Join chat</button>
                    </div>
                }

                {this.state.chat && <Chat users={this.state.users} user={this.state.name} socket={this.state.socket}/>}
            </div>
        );
    }
}

module.exports = Connect;


// När man mountar så ska man  kunna se alla aktiva användare, sedan spärrar om namnet finns
