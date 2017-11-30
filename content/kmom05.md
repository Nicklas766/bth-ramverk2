# Kmom05

## Setup

Har en uppdaterad och konkret readme.md på https://github.com/Nicklas766/bth-ramverk2 som
rättaren gärna får titta på vid setup.

## Hur gick det att komma igång med databasen MongoDB?

Det började med att man gick in i väggen direkt, som inte var det sättet jag
ville påbörja kursmomentet på. Det första problemet var att jag behövde starta
kontainern innan jag gjorde `docker-compose run mongodb mongo mongodb://mongodb/`.
Ett tag senare mötte jag felmeddelandet "mongodb exited with code 100", detta löste jag genom
att se till så i "docker-compose-yml's volumes" var "- C:/data/db:/data/db". Men
andra ord så ändrade jag så att `C:/` är utgångsläge, som verkade lösa det.

Dagen efter jag gjort detta, tidigt på morgonen, så kändes det inte bra.
Målet blev att lära sig MongoDB, som kändes jobbigt. Men efter man hade första klunken
av morgonkaffet så gick det bättre helt plötsligt och energin för att lära kom tillbaka.

## Vilken syn har du på databaser inom konceptet NoSQL?

Innan jag börjar skriva om NoSQL, så vill jag gärna börja att skriva lite om
"NoSQL". Många tror att det betyder "ingen SQL", men det står egentligen
för "NOT ONLY SQL". Det är en "non relational database" som betyder inga "tables"
eller tradionella aspekterna av relationationsdatabaser.

De har ingen "schema" som gör dem otroligt dynamiska, vi kan snabbt gå igång en
databas som fungerar riktigt bra med Javascript. MongoDB är en "Document Database"
som även är en av de mest populära NoSQL-databaser.

En sak som jag både gillar och ogillar med just MongoDB är att den inte har en
"schema". Det jag gillar med just det är vi kan t.ex ha många olika object utan
att de behöver ha samma attribut. Vi kan alltså ha en användare med ett "adress
attribut" och en annan utan, det går helt bra för databasen. Det är däremot också
en negativ aspekt då man kanske inte har koll på hur databasen ser ut till slut.


## Reflektera över skillnader och likheter mellan relationsdatabaser och databaser inom NoSQL.

Skillnader och likheter mellan dessa är t.ex att NoSQL-databaser är bra
att använda för "big data" och "real-time applikationer". "Big data"
är när data-setsen blir så stora, så att tradionella metoder inte "håller".

Men vad är relationsdatabaser bra för? Letråden ligger i namnet, det är bättre för
data med relationer. MySQL behöver ha ett färdigt upplägg, detta kan tolkas
som negativt, men även positivt då du får en bättre överblick över din databas.
Man kan dessutom lägga till "constraints", så t.ex kan du inte ta bort en användare
om du har ett fordon kopplat till användaren. Sedan så får du även använda SQL,
bra eller dåligt? Det kanske är en smaksak, men det är ett välkänt språk som kan vara bra att kunna.

Däremot så behöver man inte ha ett "väldefinerat upplägg" med NoSQL som man behöver
med relationsdatabaser. Vi kan alltså skippa att definera våra typer och tables,
detta är en positiv sak med NoSQL. Som du märker, så är den enas svaghet den andras
styrka.

Angående "scaling", så har NoSQL horisionell "scaling" medan relationsdatabaser har vertikal "scaling".
Då relationsbaser använder vertikal "scaling" betyder det att vi behöver lägga till minne,
CPU osv. Medan med NoSQL så kan vi använda nya noder, som defintivt är billigare, detta
vinner NoSQL på enligt mig.


Sammanfattningsvis så har de har olika syften helt enkelt, båda är nödvändiga.

## Vilka är dina tankar om asynkron programmering med JavaScript?

### Min modul

Rätt så stolt, skapade en mongoConnect modul, den returnerar funktioner med en
färdig setup för databasen, så slipper man göra många funktioner med duplikation av
connect till databasen och "collection".

Jag hade kunnat gjort koden mycket, mycket mindre, men jag ville att man skulle
kunna göra en require på modulen utan att behöva göra en await, givetvis. Detta
tog lite längre tid att klura ut, då jag fick gå tillbaka till grunderna med closures
och hur promises fungerar.

Jag är nöjd över resultatet, jag lyckades skapa en modul som med asynkron-kod kan
kopplas upp mot databasen och göra något och därefter returnera datan i ett promise.


### Asynkron programmering

Det känns bra, speciellt att använda "await", denna låter oss skriva asynkron-kod
på ett mer "synkront-flöde". Man lägger nyckelordet "await" innan ett uttryck som
returnerar ett "promise", detta gör så den asynkronska funktionen pausas tills "the promise
is resolved".

Jag lärde mig väldigt mycket om asynkron programmering i detta kursmomentet.
T.ex så lärde jag mig att en asynkronsk funktion kommer alltid returnera ett löfte (promise),
när vi lägger "async" innan funktionen. Vi får även använda nya saker som "await".
Await hjälper oss att undvika massor av jobbiga nestings som kan bli svårt att
läsa.

## Hur känner du för Docker och det sättet vi jobbar med tjänster i kontainrar?

### Docker
I början så tänkte och tyckte jag att det var jobbigt. Däremot när jag väl kom igång
så tyckte jag att det var riktigt smidigt att starta två servrar så snabbt. Jag använder
även dockers egna verktyg för att gå in och titta i loggarna för servrarna som är
riktigt trevligt.

Det strular jättemycket ibland lokalt, så jag väljer nu att försöka köra allt via docker,
först startas min mongodb sedan servern och därefter görs testerna. Det känns mycket
bättre att ha en virtuell-miljö. Det är givetvis jobbigt att få upp en docker-miljö,
iallafall för mig som fortfarande är lite nybörjare med Docker. Men när jag nu väl
fick igång miljön så har jag upptäckt hur skönt det är med `docker-compose up -d` och
så startas min MongoDB och Server, redo för att utvecklas.

Problem som jag stötte på under kursmomentet var att min docker blev full ofta,
så jag fick tömma den ibland. Som vanligt så hjälpte Gitter och StackOverflow med
alla docker-problem som man sötte på.

### Tester med Docker och MongoDB

Det tog lång tid, men jag lyckades få igång mitt MongoDB-test med hjälp av supertest.
Jag lyckades även få det att fungera på Travis och Scrutnizer, som var en börda att
lära sig, kunde ej tro mina ögon när jag fick till det.

http://162.243.185.158 <-- server för redovisning

https://github.com/Nicklas766/bth-ramverk2 <-- redovisning

https://github.com/Nicklas766/express-react-app <-- app

http://www.student.bth.se/~nien16/dbwebb-kurser/ramverk2/me/ <-- studentserver
