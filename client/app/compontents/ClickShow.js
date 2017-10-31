var React = require('react');
var PropTypes = require('prop-types');

class ClickShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: false,
            sign: ">"
        };
        this.handleToggleClick = this.handleToggleClick.bind(this);
    }

    handleToggleClick() {
        this.setState({
            clicked: !this.state.clicked,
            sign: this.state.sign == ">" ? "-" : ">"
        });
    }

    render() {
        const header = {
            textAlign: "center",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            fontSize: "24px",
            background: "#448E98",
            boxShadow: " 0 1px 2px rgba(0, 0, 0, 0.16), 0 1px 2px rgba(0, 0, 0, 0.23)",
            color: "white",
            margin: "0 auto",
            width: "100%"
        };


        return (
            <div style={{marginBottom: "10px", display: "flex", flexWrap: "wrap"}}>

                <div style={header} onClick={this.handleToggleClick}>

                    <div style={{width: "60%", height: "100%", textAlign: "center", marginLeft: "20%"}}>
                        <h2>{this.props.title}</h2>
                    </div>
                    <div style={{height: "100%", width: "20%", background: "#448E98", textAlign: "center"}}>
                        <h1>{this.state.sign}</h1>
                    </div>

                </div>
                {this.state.clicked && <div style={{width: "100%", background: "white", color: "black", padding: "10px"}}>{this.props.children}</div>}
            </div>


        );
    }
}


module.exports = ClickShow;
