var React = require('react');
var api = require('../../utils/api');
import Person from "./Person";


const People = (props) => {
    const people = props.people.map(person =>
        <Person key={person._id} deleteMe={props.onDelete} stats={person} />
     );
    return (
        <div>
            {people}
        </div>
    )
};
class Crud extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          name: '',
          wikipedia: '',
          youtube: '',
          loading: true,
          people: []
      };
      this.handleInputChange = this.handleInputChange.bind(this);
      this.createPerson      = this.createPerson.bind(this);
      this.deletePerson      = this.deletePerson.bind(this);
      this.resetPeople       = this.resetPeople.bind(this);
    }

    componentDidMount() {
        this.fetchPeople();
    }

    async fetchPeople() {
        const people = await api.fetchPeople();
        this.setState({
            people: people,
            loading: false
        });
    }

    async createPerson() {
        const people = await api.postPeople({
            name: this.state.name,
            wikipedia: this.state.wikipedia,
            youtube: this.state.youtube
        });
        this.setState({ people: people });
    }

    async deletePerson(id) {
         const people = await api.deletePerson(id);
         this.setState({ people: people });
    }

    async resetPeople() {
         const people = await api.resetPeople();
         this.setState({ people: people });
    }

    handleInputChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    render() {
        return (
            <div className="crud-container">
                <div className="crud-form">
                    <h1>CRUD for artists collection</h1>
                    <input name={"name"} value={this.state.name} onChange={this.handleInputChange} placeholder={"Name"}/>
                    <input name={"wikipedia"} value={this.state.wikipedia} onChange={this.handleInputChange} placeholder={"wikipedia"}/>
                    <input name={"youtube"} value={this.state.youtube} onChange={this.handleInputChange} placeholder={"youtube"}/>
                    <button onClick={this.createPerson}>Create person</button>
                    <button onClick={this.resetPeople}>Reset Database</button>
                </div>

                <div style={{width: "40%"}} >
                    {!this.state.loading ? <People onDelete={this.deletePerson} people={this.state.people} /> : <div className="loader">Loading...</div>}
                </div>
            </div>
        );
    }
}

module.exports = Crud;
