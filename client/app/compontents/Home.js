var React = require('react');
var Link = require('react-router-dom').Link;


class Home extends React.Component {

  render() {
    return (
      <div className="Home">
        <h1>Hej!</h1>
        <li><Link to={"users"}>
             CSS-framework
        </Link></li>
      </div>
    );
  }
}

module.exports = Home;
