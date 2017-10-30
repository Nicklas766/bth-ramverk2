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
var Users = require('./page/Users');

class App extends React.Component {

    render() {
        return (
            <Router>
            <WrappedApp>
            <div className="container">
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/about' component={About} />
                    <Route exact path='/reports' component={Reports} />
                    <Route exact path='/users' component={Users} />
                    <Route render={() => <p>Not Found </p>} />
                </Switch>
            </div>
            </WrappedApp>
            </Router>
        )
    }
}

module.exports = App;
