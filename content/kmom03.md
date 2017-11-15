# Kmom03

Innan jag börjar med redovisningen så vill jag förtydliga att mina dockerfiles gör endast tester
i de olika miljöer då jag tyckte det var onödigt att starta servrarna på dessa, detta var även idén som
jag tolkade. Jag har ett eget docker repo kopplat till mitt github repo, den kontrollerar start och den
ligger i "Dockerfile"

## Berätta vilka tekniker/verktyg du valde för enhetstester och kodtäckning och varför?

För enhetstester så valde jag att använda Mocha tillsammans med Supertest, med dessa två tillsammans så kan jag smidigt och
enkelt testa min express-apps routes.

I slutet på varje image i `docker-compose.yml` så gör de en `npm test` istället för start, detta är för
att då startas alla testerna på de olika node versionerna, utan att starta självaste servrarna som jag
ansåg vara onödigt.

Om jag vill inte vill ha alla i samma terminal så kan jag lägga till "-d", såhär `docker-compose up -d`, så
hamnar de i sina egna kontainrar.


Jag om jag  `docker-compose up` så körs alla tester i de tre olika miljöerna jag skapat med mina docker-images.

Jag fick en rad av olika fel med HTMLhint i min /coverage, jag valde att ta bort htmlhint efter jag läste i forumet
att den ej var nödvändig.

Jag la till "make test1, make test2 och make test3", dessa gör en `docker-compose run name`, så docker-imagen
startar en miljö och testet. Sedan så la jag till mitt "mocha-test" i "make test".



Kodtäckninge hade jag problem med, jag provade codeclimate, codecov och säker många andra. Manualerna var
otydliga, eller så förstod jag helt enkelt inte. Till slut så gick jag tillbaka till scruntizer och fick
äntligen till det, den kör mitt mocha test.


## Berätta om cin CI-kedja och reflektera över de valen du gjorde?
## Hur väl lyckades du utvärdera TDD-konceptet och vilka är dina reflektioner?
## Berätta om tankarna kring din klient/server applikation och nämn de tekniker du använder.
