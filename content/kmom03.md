# Kmom03

## Berätta vilka tekniker/verktyg du valde för enhetstester och kodtäckning och varför?

### Vad som används och varför
Jag valde att använda Mocha som test-ramverk. Jag kombinerade Mocha med Supertest, dessa två tillsammans gjorde så jag smidigt och
enkelt kunde testa min express-apps routes. Sedan för kodtäckningen så använde jag "nyc". Jag använder även Nodejs egna "assert" för att
kontrollera testerna. Just kodtäckningen hade jag problem med, jag provade codeclimate, codecov och säker många andra. Manualerna var
otydliga, eller så förstod jag helt enkelt inte. Till slut så gick jag tillbaka till scruntizer och fick äntligen till det, genom att
låta den köra mitt mocha test.

Det var i stortsett det som jag använder för min Express-del (servern). Jag ville sedan givetvis
kunna testa min react-del (klienten), därav så introducerade jag "Enzyme" till gröten. Enzyme
är skapad av "Airbnb" (som använder react), för att göra det lätt att testa sina react-komponenter. React
behöver ju ett DOM att jobba med, NodeJS ger oss inte det, därav så använder jag Enzyme. Den behöver dependencies
i sig själv Enzyme, som t.ex JSDOM som hjälper oss att testa via "in-memory DOM in Node". Jag följde en speciell [artikel](https://medium.com/@kayodeniyi/setting-up-tests-for-react-using-mocha-expect-and-enzyme-8f53af96fe7e)
för att få ihop allt, han gav mig en "setup.js" som kräver att jag använder JSDOM "9.11.0", så jag fick använda den versionen.

De depencencies värda att nämna som jag la till i detta kursmoment är följande,

* mocha
* supertest
* enzyme (behöver JSDOM)
* nyc

### Personliga tankar

Om man tittar på tag 3.0.1 så ser man att jag inför tests för klienten. Detta är jag riktigt nöjd med, då jag
självklart behöver kunna testa min klient, innan så var det ju bara servern. Det känns som jag har en bra bas för
TDD, precis som jag vill kunna göra för min /me/app!

Enzyme påminner mig väldigt mycket om Jquery, man gör "finds()" och "first('p')" och många liknande, så det
var lätt att komma igång med den biten. Jag valde att testa min "ClickShow" komponent, jag märkte direkt några
förbättringar jag kunde göra med hjälp av testfallet jag skapade.

## Reflektera över hur det gick att integrera enhetstesterna i olika Docker-kontainerns och om du ser någon nytta med detta.

Det gick bra att lägga in testerna i olika docker-kontainers. I slutet på varje image i `docker-compose.yml`
så gör de en `npm test` istället för start, detta är för att då startas alla testerna på de olika node versionerna,
utan att starta självaste servrarna som jag ansåg vara onödigt. Så de fick en uppdatering, om jag vill att de
ska starta servrarna igen så behöver endast byta ut "test" till "start" i filerna.

Jag såg även till så att om jag inte vill ha alla resultat i samma terminal så kan jag lägga till "-d", såhär `docker-compose up -d`, så
hamnar de i sina egna kontainrars log. Hursomhelst om jag gör `docker-compose up` så körs alla tester i samma terminal,
i de tre olika miljöerna jag skapat med mina docker-images. Sedan så justerades makefilen och jag la till
"make test1, make test2 och make test3", dessa gör en `docker-compose run name`, så docker-imagen
startar en miljö och testet. Sedan så la jag även till mitt "mocha-test" i "make test". Därefter för `make start-docker`
så görs först en build av min "DockerFile" (som tar ett tag), sedan så startar jag den med `docker run -p 1336:1336 -d my_image2`,
som därefter startas på localhost:1336 (i mitt fall virtuella maskinens host:1337).

Jag ser verkligen fördelar med att ha tester i olika miljöer. Jag upptäckte till och med ett fel
när jag körde ett test. Den klagade på att den inte hade några av mina dependencies, då märkte jag att
de inte ens låg i package.json (måste nog haft dem i min egna miljö någonstans). Så
det är ju ett perfekt exempel på fördelarna med att testa i olika miljöer.


## Berätta om cin CI-kedja och reflektera över de valen du gjorde?

Till detta så valde jag, Travis, Scrutinizer, CodeClimate och även Docker (men endast till redovisa-sidan).

Jag valde CodeClimate då jag ville prova något nytt, de gav mig även en bra översikt för
hållbarheten av koden. Sedan så valde jag Scrutinizer som ger mig en användarvänlig översikt av problem och ger bra feedback angående
kodkvalitén. Dessutom så tycker jag att de erbjöd ett enkelt sätt att lägga in sina
tester för kodtäckningen. I kursmoment två så kopplade jag ett docker-repo till min
redovisa-github, så när jag pushar så gör den också ett test på min "Dockerfile". Sist men
inte minst så valde jag Travis då den är rätt så standard inom communityn. Den är även
kopplad till många andra tjänster som kan göra det lättare i framtiden att integrera någon ny tjänst

## Hur väl lyckades du utvärdera TDD-konceptet och vilka är dina reflektioner?

Då jag inte har kommit på vad appen går ut på, så fick jag inte riktigt prova på TDD.
Jag har däremot skapat en riktigt bra bas (enligt mig) för TDD. Med hjälp av min testmiljö så kan
jag skapa tester innan jag skapat koden som gör det lättare att visualisera vad koden ska
göra eller innehålla. Det ger även en bra bas för att undvika "legacy code" (om det nu innebär kod utan tester).

Hursomhelst så kan det vara jobbigt att testa befintlig kod och även utmanande, med TDD så kan det däremot
oftast vara roligt och underlätta hela proccessen när man skapar kod, varför Nicklas? Absolut
så ska jag förklara varför. För det första så skapar du ju testet innan du ens skapat koden, så
du har redan gjort det lättare för dina kollegor/vänner att komma in i koden. Det kan även hjälpa
dig att visualisera och du får något att "ta på" innan du ens skapat koden. Du slipper även webbläsaren,
självklart så är det inget fel att använda webbläsaren, men ibland så är det smidigare och snabbare med
terminalen.

## Berätta om tankarna kring din klient/server applikation och nämn de tekniker du använder.

Jag använder Express.js för servern, sedan använder jag React för klienten. Med
hjälp av React så får jag en "SPA", jag kommer att kunna göra riktigt coola saker
med hjälp av React och Express! Efter detta kursmoment så är jag förberedd att
utveckla enligt TDD.

Hela idén är att man utvecklar klienten i dens egna katalog, sedan gör man allt till
två "bundle-filer", som ligger i en "public-katalog" som express-delen har tillgång till
vid produktion (eller utveckling utan klienten). Sedan så försökte jag göra det väldigt
lätt att utveckla, så när man utvecklar klienten så startar man servern och klienten
i olika terminaler, klienten kräver ingen "omstart", när man gör en sparning i en
react-fil så laddas sidan om automatiskt med ändringarna. Däremot när man arbetar
med servern så krävs en omstart av servern.
