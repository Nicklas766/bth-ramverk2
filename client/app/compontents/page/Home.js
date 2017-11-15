var React = require('react');
var ClickShow = require('../ClickShow');


class Home extends React.Component {
    render() {
        return (
            <div className="container" style={{background: "none", color: "white"}}>

                <h1>Hej välkommen till min me-sida!</h1>
                <p> Jag har skapat några widgets som du kan kika på </p>

                <div style={{width: "35%", margin: "auto", opacity: "0.85"}}>
                    <ClickShow title={"Om mig"}>
                        <img style={{height: "300px", borderRadius: "20%"}} src="images/jag.jpg" />
                        <p> Jag är 21 år och har bott i Stockholm hela mitt liv. Jag tror att folk uppfattar mig som trevlig, rolig och snäll.
                 Det är det man strävar att folk ska tycka iallafall. Favoritfilmen måste vara Sagan om ringen, såklart. </p>
                        <p> Jag har några intressen, mitt största just nu är programmering. </p>
                    </ClickShow>

                    <ClickShow title={"Utbildning"}>
                        <p> Jag började mina studier för webbprogrammering på Blekinge Tekniska Högskola, i augusti 2016.
                Jag har alltid haft ett tekniskt intresse, men när jag väl började utbildningen så insåg jag att
                webbprogrammering verkligen var något för mig.</p>
                        <p> Sedan jag startade utbildningen så startades verkligen en eld inombords, vilket är viljan
                 att lära sig, för att bli en bättre programmerare.  </p>
                    </ClickShow>


                    <ClickShow title={"Jobb"}>
                        <p> Jag har jobbat i ca 2 år för ett stort företag där jag har daglig kontakt
                 med e-handelswebbplatser och kunder. E-handel är något som jag tycker är väldigt intressant.</p>
                        <p> Tjänsten är dock inte relaterad till webbutveckling. </p>
                    </ClickShow>
                </div>



            </div>
        );
    }
}

module.exports = Home;
