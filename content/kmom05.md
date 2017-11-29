# Kmom05


## Hur gick det att komma igång med databasen MongoDB?
Det började med att man gick in i väggen direkt, som inte var det sättet jag
ville påbörja kursmomentet på. Det första problemet var att jag behövde starta
kontainern innan jag gjorde `docker-compose run mongodb mongo mongodb://mongodb/`.
Sedan gjorde min kontainer en "mongodb exited with code 100", detta löste jag genom
att se till så i "docker-compose-yml's volumes" var "- C:/data/db:/data/db", att
använda `C:/` som utgångsläge verkade lösa det, men det kändes inte som en bra
lösning, då hela idén med docker är att det ska vara smidigt för andra att
kicka igång en docker-container.

DETTA LÖSTE JAG GENOM ATT ...


Tidigt på morgonen, det gick ej bra, sedan tog man en klunk av morgonkaffet och
helt plötsligt så gick det bättre.

## Vilken syn har du på databaser inom konceptet NoSQL?
## Reflektera över skillnader och likheter mellan relationsdatabaser och databaser inom NoSQL.

Jag märker att vi "connectar" alltid mot databasen varje gång vi gör ett slags request
emot databasen. Detta påminner mig mycket om MySQL, i vår connect-klass.
## Vilka är dina tankar om asynkron programmering med JavaScript?

Det känns bra, speciellt att använda "await", denna låter oss skriva asynkron-kod
på ett mer "synkront-flöde". Man lägger nyckelordet "await" innan ett uttryck som
returnerar ett "promise", detta gör så den asynkronska funktionen pausas tills "the promise
is resolved".

Await hjälper oss att undvika massor av jobbiga nestings som kan bli svårt att
läsa.

En asynkronsk funktion kommer alltid returnera ett löfte (promise). När vi lägger
"async" innan funktionen så får vi använda "await".



En fråga angående ditt exempel. Symboliserar variablen `res`, response eller result i detta fall? Det logiska är väl result/data, då vi gör en await på `findInCollection` så blir det ju ett `resolved promise`. Funderar då jag själv brukar använda `res` istället för `response`.
## Hur känner du för Docker och det sättet vi jobbar med tjänster i kontainrar?

I början så tänkte och tyckte jag att det var jobbigt. Däremot när jag väl kom igång
så tyckte jag att det var riktigt smidigt att starta två servrar så snabbt. Jag använder
även dockers egna verktyg för att gå in och titta i loggarna för servrarna som är
riktigt trevligt.
