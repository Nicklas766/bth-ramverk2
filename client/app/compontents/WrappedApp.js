var React = require('react');
var NavLink = require('react-router-dom').NavLink;
var Link = require('react-router-dom').Link;

const Navbar = (props) => {
    const navbar = props.menu.map(choice =>
        <NavLink key={choice.to} exact activeClassName='active' to={choice.to}>
            {choice.text}
        </NavLink>
    )
    return (
        <div style={{ width: "70%" }}>
            {navbar}
        </div>
    )
}

const Header = (props) => (
    <div className='header'>
        <div style={{ width: "20%" }}>
            <NavLink exact activeClassName='active' to='/'>
                <img src="images/home.png" />
            </NavLink>
        </div>
        <Navbar menu={[
            {text: "Hem",           to: "/"},
            {text: "Om",            to: "/about"},
            {text: "Redovisningar", to: "/reports"},
            {text: "Demo",          to: "/demo"},
            {text: "Chat",          to: "/chat"},
            {text: "CRUD",          to: "/crud"},

        ]}/>
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
