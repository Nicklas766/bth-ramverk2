var React = require('react');
var ClickShow = require('../ClickShow');
var Link = require('react-router-dom').Link;


class Demo extends React.Component {
    render() {
        return (
            <div className="container" style={{background: "none", color: "white"}}>

                <h1>Om min app</h1>
                <p> Hej! Jag har skapat några widgets angående appen nedan, </p>

                <div style={{width: "35%", margin: "auto", opacity: "0.85"}}>
                    <ClickShow style={{textAlign: "left"}}title={"Konceptet"}>
                        <div style={{textAlign: "left"}}>
                            <h2> Om appen </h2>
                            <p>Just nu så har jag inte bestämt mig vad applikationen ska gå ut på. Just nu
                            fokuserade jag på att skapa en bra grund för tester så jag kan utveckla enligt TDD.</p>
                            <Link to={"https://github.com/Nicklas766/express-react-app"} target={"_blank"} className="widget">
                                <p> Github-sida till applikationen </p>
                            </Link>
                        </div>
                    </ClickShow>

                    <ClickShow title={"Tekniker"}>
                        <div style={{textAlign: "left"}}>
                            <h2> Grunden </h2>
                            <p>Jag använder Express.js för servern, sedan använder jag React för klienten. </p>
                            <p> Med hjälp av React så får jag en "SPA", jag kommer att kunna göra riktigt coola
                            saker med hjälp av React och Express! </p>
                            <h2> För tester </h2>
                            <p> Idén är att jag ska utveckla enligt TDD (testdriven utveckling). Jag använder följande
                            dependencies,</p>
                            <ul>
                                <li>mocha</li>
                                <li>supertest</li>
                                <li>enzyme (behöver JSDOM)</li>
                                <li>nyc</li>
                            </ul>
                        </div>
                    </ClickShow>
                    <ClickShow style={{textAlign: "left"}}title={"Realtidsprogrammering"}>
                        <div style={{textAlign: "left"}}>
                            <p> Appen kommer troligtvis att använda Socket.io som jag gör nu, då det fungerar riktigt smidigt</p>
                            <p> Kika gärna i mitt github repo på /src/chat.js för exempel hur det kan se ut.</p>
                        </div>
                    </ClickShow>
                    <ClickShow style={{textAlign: "left"}}title={"Databas"}>
                        <div style={{textAlign: "left"}}>
                            <p> Jag kommer att använda MongoDB, mest för att det är ett väldigt populär
                            val för NoSQL-databas </p>

                            <p> Jag kommer använda Docker för utvecklingsmiljö, då jag under kmom05 märkte at
                            det är riktigt smidigt.</p>

                            <p> Jag har lagt upp en bra bas i min redovisa-sida för tester för MongoDB.
                            Så planen är att använda mig av TDD i projektet.</p>
                        </div>
                    </ClickShow>
                    <ClickShow style={{textAlign: "left"}}title={"NPM-module"}>
                        <div style={{textAlign: "left"}}>
                            <p> Modulen låter en connecta till sin MongoDB med ett litet API</p>

                            <Link to={"https://www.npmjs.com/package/mongo-connecter"} target={"_blank"} className="widget">
                                <p> Länk till npm-modulen (där finns även readme.md) </p>
                            </Link>


                        </div>
                    </ClickShow>
                </div>
            </div>
        );
    }
}

module.exports = Demo;
