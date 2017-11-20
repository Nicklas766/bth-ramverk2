var React = require('react');

// Router
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;

// Wrapper
var WrappedApp = require('./WrappedApp');

// Route Paths
var Home = require('./page/Home');
var About = require('./page/About');
var Reports = require('./page/Reports');
var Demo = require('./page/Demo');
var Connect = require('./page/Connect');
var Users = require('./page/Users');


class App extends React.Component {
    render() {
        return (
            <Router>
                <WrappedApp>
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route exact path='/about' component={About} />
                        <Route exact path='/reports' component={Reports} />
                        <Route exact path='/demo' component={Demo} />
                        <Route exact path='/chat' component={Connect} />
                        <Route exact path='/users' component={Users} />
                        <Route render={() => <div className="container" style={{background: "none", color: "white"}}><h1>404 not found</h1></div>} />
                    </Switch>
                </WrappedApp>
            </Router>
        );
    }
}

module.exports = App;
