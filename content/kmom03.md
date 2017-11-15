# Kmom03

Innan jag börjar med redovisningen så vill jag förtydliga att mina dockerfiles gör endast tester
i de olika miljöer då jag tyckte det var onödigt att starta servrarna på dessa, detta var även idén som
jag tolkade. Jag har ett eget docker repo kopplat till mitt github repo, den kontrollerar start och den
ligger i "Dockerfile"

## Berätta vilka tekniker/verktyg du valde för enhetstester och kodtäckning och varför?


I slutet på varje image i `docker-compose.yml` så gör de en `npm test` istället för start, detta är för
att då startas alla testerna på de olika node versionerna, utan att starta självaste servrarna som jag
ansåg vara onödigt.

Om jag vill inte vill ha alla i samma terminal så kan jag lägga till "-d", såhär `docker-compose up -d`, så
hamnar de i sina egna kontainrar.


Jag om jag  `docker-compose up` så körs alla tester i samma terminal, i de tre olika miljöerna jag skapat med mina docker-images.

Jag fick en rad av olika fel med HTMLhint i min /coverage, jag valde att ta bort htmlhint efter jag läste i forumet
att den ej var nödvändig.

Jag la till "make test1, make test2 och make test3", dessa gör en `docker-compose run name`, så docker-imagen
startar en miljö och testet. Sedan så la jag till mitt "mocha-test" i "make test".



Kodtäckninge hade jag problem med, jag provade codeclimate, codecov och säker många andra. Manualerna var
otydliga, eller så förstod jag helt enkelt inte. Till slut så gick jag tillbaka till scruntizer och fick
äntligen till det, den kör mitt mocha test.


## React

Jag insåg att jag redan "jsunittest" med min "npm start" (har redan lagt in i make test), så jag tog bort den.

https://medium.com/@kayodeniyi/setting-up-tests-for-react-using-mocha-expect-and-enzyme-8f53af96fe7e


Jag valde att använda Mocha som test-ramverk. Jag kombinerade Mocha med Supertest, dessa två tillsammans gjorde så jag smidigt och
enkelt kunde testa min express-apps routes. Sedan för kodtäckningen så använde jag "nyc". Jag använder även Nodejs egna "assert" för att
kontrollera testerna.

Det var i stortsett det som jag använder för min Express-del (servern). Jag ville sedan givetvis
kunna testa min react-del (klienten), därav så introducerade jag "Enzyme" till gröten. Enzyme
är skapad av Airbnb (som använder react), för att göra det lätt att testa sina react-komponenter. React
behöver ju ett DOM att jobba med, Nodejs ej ger oss inte detta, därav så använder vi Enzyme.

Den behöver dependencies i sig själv Enzyme, som t.ex JSDOM som hjälper oss att testa via "in-memory DOM in Node".
Jag följde en speciell artikel för att få ihop allt, han gav mig en "setup.js" som kräver att jag använder JSDOM "9.11.0",
så jag fick använda den versionen.

Om man tittar på tag 3.0.1 så ser man att jag inför tests för klienten också. Detta är jag riktigt nöjd med, då jag
självklart behöver kunna testa min klient, innan så var det ju bara servern.

Enzyme påminner mig väldigt mycket om Jquery, man gör "finds()" och "first('p')" och många liknande, så det
var lätt att komma igång med den biten. Jag valde att testa min "ClickShow" komponent, jag märkte direkt några
förbättringar jag kunde göra med hjälp av testfallet jag skapade.

Det känns som jag har en bra bas för TDD, precis som jag vill kunna göra för min /me/app!

## Berätta om cin CI-kedja och reflektera över de valen du gjorde?
## Hur väl lyckades du utvärdera TDD-konceptet och vilka är dina reflektioner?
## Berätta om tankarna kring din klient/server applikation och nämn de tekniker du använder.
