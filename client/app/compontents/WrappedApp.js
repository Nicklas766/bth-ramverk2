var React = require('react');
var NavLink = require('react-router-dom').NavLink;
var Link = require('react-router-dom').Link;



const Header = (props) => (
    <div className='header'>
        <div style={{ width: "20%" }}>
            <NavLink exact activeClassName='active' to='/'>
                <img src="images/home.png" />
            </NavLink>
        </div>

        <div style={{ width: "70%" }}>

            <NavLink exact activeClassName='active' to='/'>
                Hem
            </NavLink>

            <NavLink activeClassName='active' to='/about'>
                Om
            </NavLink>

            <NavLink activeClassName='active' to='/reports'>
                Redovisningar
            </NavLink>
        </div>
    </div>
);

const Footer = (props) => (
    <footer>
        <h1> Nicklas Envall </h1>
    </footer>
);



class WrappedApp extends React.Component {
    render() {
        return (
            <div className='wrap-container' style={{ backgroundImage: "url('../images/notebook.jpg')" }}>
                <Header />
                {this.props.children}
                <Footer />
            </div>
        );
    }
}

module.exports = WrappedApp;
