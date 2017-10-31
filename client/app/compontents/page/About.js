var React = require('react');
var Link = require('react-router-dom').Link;

class About extends React.Component {
    render() {
        return (
            <div className="container" style={{width: "50%", margin: "auto", borderRadius: "0.2em"}}>

                <div style={{minHeight: "400px"}}>
                    <h1>Om sidan</h1>
                    <p>
            Detta är min "me-sida" för kursen ramverk2, om du vill läsa mer om kursen, kika gärna <Link to={"https://dbwebb.se/kurser/ramverk2"} target={"_blank"}> här</Link>
                    </p>


                    <img style={{height: "200px"}} src="images/bth.png" />

                </div>

                <div className="service-banner">
                    <Link to={"https://github.com/Nicklas766/"} target={"_blank"} className="widget">
                        <img style={{height: "80px"}} src="images/github.png" />
                        <p> Titta gärna på min Github</p>
                    </Link>
                    <Link to={"https://github.com/Nicklas766/bth-ramverk2"} target={"_blank"} className="widget">
                        <img style={{height: "80px"}} src="images/node.png" />
                        <p> Kika gärna på hemsidans repo</p>
                    </Link>
                    <Link to={"http://www.nicklasenvall.se/"} target={"_blank"} className="widget">
                        <img style={{height: "80px"}} src="images/laptop.png" />
                        <p> Min privata hemsida (gammal)</p>
                    </Link>
                </div>
                <div>Icons made by <a href="https://www.flaticon.com/authors/dave-gandy" title="Dave Gandy">Dave Gandy</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
                <div>Icons made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>

            </div>
        );
    }
}

module.exports = About;
