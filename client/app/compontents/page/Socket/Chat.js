var React = require('react');
import socketIOClient from 'socket.io-client'

class Chat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          socket: this.props.socket,
          user: this.props.user,
          text: '',
          messages: ["Bot: Welcome " + this.props.user + ", you joined the chat!"],
          users: this.props.users
      };
      this.handleInputChange = this.handleInputChange.bind(this);
      this.sendMessage = this.sendMessage.bind(this);
    }

    componentWillReceiveProps(newProps) {
        this.setState({users: newProps.users});
    }

    componentDidMount() {
        const socket = this.state.socket;
        socket.on('change message', (message) => {
            console.log(message);
            this.setState({
                messages: [...this.state.messages, message],
                text: ''
            });
        });
    }

    // Kontrollera så att det finns users, så man kan kontrollera vem som skriver eller ej
    handleInputChange(event) {
        this.setState({[event.target.name]: event.target.value});
        console.log("im fired");
        if (event.target.value.length < 1) {
            this.state.socket.emit('stop typing');
            console.log("STOP!");
        }
        if (event.target.value.length > 0) {
            this.state.socket.emit('start typing');
            console.log("START");
        }
    }

    sendMessage() {
        this.state.socket.emit('send message', this.state.text);
    }

    render() {
        var messages = this.state.messages.map((text, index) => <p key={index}>{text}</p>);

        var typingUsers = this.state.users.filter(user => user.typing == true);
        var typingUsers = typingUsers.map((user, index) => <p key={index}>{user.name} is typing.. </p>);

        return (
            <div>
                <h1>Chat, hello world!</h1>
                {typingUsers}
                {messages}
                <div style={{ width: "40%", margin: "auto"}}>
                    <textarea
                        name={"text"}
                        value={this.state.text}
                        onChange={this.handleInputChange}
                        placeholder={"Type your message here"}
                        style={{width:"100%"}}
                    />
                    <button onClick={this.sendMessage}>Send message</button>
                </div>
            </div>
        );
    }
}

module.exports = Chat;
