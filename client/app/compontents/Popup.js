var React = require('react');



class Popup extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        popup: true
    };

      this.handlePopup = this.handlePopup.bind(this);
    }

    handlePopup() {
      this.setState({popup: false});
    }

  render () {
      if (this.state.popup) {
          return (
              <div style={{
                  background:"white",
                  width:"50%",
                  height:"50%",
                  position:"fixed",
                  margin: "24px 25%",
                  padding: "10px",
                  border: "2px solid black",
                  borderRadius: ".2em",
                  zIndex: "100"


              }}
              >
                  <p className={"popclose"} onClick={this.handlePopup}>X</p>
                  <div>{this.props.children}</div>
              </div>



          )
      }
      return (null);

  }
}


module.exports = Popup;
