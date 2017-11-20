
const io = require('socket.io');


const setupSocket = (socket) => {
    this.users.push({id: socket.id, name: `guest#${this.users.length}`, typing: false});
    this.io.emit('get users', this.users);
};

/**
* Updates current user-obj (based on this.socket), then makes sure all the clients updates the users
* @param {object} obj - object keys & values for user
*
*/
const updateUser = (obj) => {
    this.users = this.users.map(user =>
         this.socket.id == user.id ? Object.assign(user, obj) : user);
    this.io.emit('get users', this.users);
};

/**
* creates message
*/
// const createMessage = (obj) => {
//     const user = this.users.filter(user => this.socket.id !== user.id)[0];
//     this.messages.push({text: message, nick: user.name});
// };

//SKAPA TESTER
/**
* Updates guest socket to a real name
*/
const createUser = (socket) => {
    socket.on('new user', (name) => {
        updateUser({ name: name });
    });
};

/**
* Changes the typing status for user based on typing event
*/
const isTyping = (socket) => {
    socket.on('start typing', () => {
        updateUser({typing: true});
    });

    socket.on('stop typing', () => {
        updateUser({typing: false});
    });
};

/**
* Sends message and makes sure user isn't typing anymore
*/
const sendMessage = (socket) => {
    socket.on('send message', (text) => {
        this.io.emit('change message', text);
        updateUser({typing: false});
    });
};

/**
* Disconnects the socket and removes the user from this.users basd on socket.id
*/
const disconnect = (socket) => {
    socket.on('disconnect', () => {
        this.users = this.users.filter(user => socket.id != user.id);
        console.log(socket.id + ' disconnected');
        this.io.emit('get users', this.users);
    });
};


/**
* Main container for the socketChat
*/
const socketChat = (server) => {
    this.io = new io(server);
    this.users = []; // {id: socket.id, name: 'name', typing: false}
    this.messages = [];
    this.io.on('connection', socket => {
        console.log('New client connected');
        this.socket = socket; // incase we dont want to send a socket parameter
        setupSocket(socket);
        createUser(socket);
        sendMessage(socket);
        isTyping(socket);
        disconnect(socket);
        console.log(this.users.length + " clients are connected");
    });
};

module.exports = { socketChat };
