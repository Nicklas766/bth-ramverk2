var React = require('react');

// Router
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;

// Route Paths
var Home = require('./Home');
var Users = require('./Users');


class App extends React.Component {

    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/users' component={Users} />
                    <Route render={() => <p>Not Found </p>} />
                </Switch>
            </Router>
        )
    }
}

module.exports = App;
