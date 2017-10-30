var React = require('react');
var api = require('../../utils/api');
var Link = require('react-router-dom').Link;
var ReactMarkdown = require('react-markdown');


const Report = (props) => {
    var reports = props.options.map(option =>
        <li
            onClick={props.onSelect.bind(null, option.id)}
            key={option.id}>
            {option.name}
        </li>
    );

    return (
        <ul className="reports">
            {reports}
        </ul>
    );
}


class Reports extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            reports: null,
            report: "Du har inte valt en report, välj gärna en!",
            loading: true
        };
        this.getReport = this.getReport.bind(this);
    }


    componentDidMount() {
        api.fetchReports()
            .then(function (reports) {
                this.setState(() => ({
                    reports: reports,
                    loading: false
                }))
            }.bind(this));
    }

        getReport(id) {
        api.fetchReports()
            .then(function (reports) {
                this.setState(() => ({
                    report: reports[(id - 1)].text,
                }))
            }.bind(this));
        }



    render() {
        return (
                <div className="container" style={{width:"50%", margin:"auto", borderRadius:"0.2em"}}>
                <h1 style={{width:"100%"}}>Mina redovisningar</h1>
                {!this.state.loading && <Report onSelect={this.getReport} options={this.state.reports}/>}
                <div className="reportText">
                    <ReactMarkdown source={this.state.report} />
                </div>
            </div>
            )
    }
}

module.exports = Reports;
