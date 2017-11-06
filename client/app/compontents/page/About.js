var React = require('react');
var Link = require('react-router-dom').Link;

const LinkImg = (props) => {
    return (
        <Link to={props.url} target={"_blank"} className="widget">
            <img style={{height: "80px"}} src={props.img} />
            <p> {props.text} </p>
        </Link>
    );
};

const License = () => {
    return (
        <div>
        Icons made by <a href="https://www.flaticon.com/authors/dave-gandy" title="Dave Gandy">Dave Gandy</a>
        , <a href="http://www.freepik.com" title="Freepik">Freepik </a>

        from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by
        <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank"> CC 3.0 BY</a>
        </div>
    );
};

class About extends React.Component {
    render() {
        return (
            <div className="container" style={{width: "50%", margin: "auto", borderRadius: "0.2em"}}>
                <h1>Om sidan</h1>
                <p>
                    Detta är min "me-sida" för kursen ramverk2, om du vill läsa mer om kursen,
                    kika gärna <Link to={"https://dbwebb.se/kurser/ramverk2"} target={"_blank"}> här</Link>
                </p>
                <img style={{height: "200px", marginBottom: "100px"}} src="images/bth.png" />

                <div className="service-banner">
                     <LinkImg
                              url={"https://github.com/Nicklas766/"}
                              img={"images/github.png"}
                              text={"Titta gärna på min Github"} />
                     <LinkImg
                             url={"https://github.com/Nicklas766/bth-ramverk2"}
                             img={"images/node.png"}
                             text={"Kika gärna på hemsidans repo"} />
                     <LinkImg
                             url={"http://www.nicklasenvall.se/"}
                             img={"images/laptop.png"}
                             text={"Min privata hemsida (gammal)"} />
                </div>
                <License />
            </div>
        );
    }
}

module.exports = About;
