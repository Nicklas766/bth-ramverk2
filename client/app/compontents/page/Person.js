var React = require('react');
var api = require('../../utils/api');


class Person extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          id: this.props.stats._id,
          name: this.props.stats.name,
          wikipedia: this.props.stats.wikipedia,
          youtube: this.props.stats.youtube,
          edit: false
      };
      this.deleteMe = this.deleteMe.bind(this);
      this.editMe = this.editMe.bind(this);
      this.updatePerson = this.updatePerson.bind(this);
      this.handleInputChange = this.handleInputChange.bind(this);
    }

    deleteMe() {
        this.props.deleteMe(this.props.stats._id)
    }
    editMe() {
        this.setState({edit:true});
    }
    async updatePerson() {
        const {id, name, wikipedia, youtube} = this.state;
        await api.updatePerson({
            id:         id,
            name:       name,
            wikipedia:  wikipedia,
            youtube:    youtube
        });
        this.setState({edit:false});
    }
    handleInputChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    render() {
        const {id, name, wikipedia, youtube} = this.state;
        return (
            <div>
                {! this.state.edit &&
                    <div>
                        <p> {name} </p>
                        <p> {id} </p>
                        <button onClick={this.deleteMe}> Delete me :( </button>
                        <button onClick={this.editMe}> Edit me :) </button>
                    </div> }
                {this.state.edit &&
                    <div>
                        <input name={"name"} value={this.state.name} onChange={this.handleInputChange} placeholder={"Name"}/>
                        <input name={"wikipedia"} value={this.state.wikipedia} onChange={this.handleInputChange} placeholder={"wikipedia"}/>
                        <input name={"youtube"} value={this.state.youtube} onChange={this.handleInputChange} placeholder={"youtube"}/>
                        <button onClick={this.updatePerson}>Save</button>
                    </div> }
            </div>
        );
    }
}

module.exports = Person;
