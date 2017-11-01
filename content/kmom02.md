# Kmom02


## Har du jobbat med Docker eller andra virtualiseringstekniker innan?

Jag har inte riktigt arbetat på detta sättet förut som jag nu gjorde under kursmomentet.
I Linxu-kursen så använde vi virtualbox, men det första jag kan tänka på är Travis.
Jag antar att de gör på detta sätt när jag gör en git push, ifall jag kopplat ett repo till dem.
De går igenom olika testmiljöer med PHP och även Node på denna kursens repo såg jag.
Däremot på detta sätt så kan jag lägga upp egna tester på olika miljöer.

Det jag tycker är väldigt intressant med just Docker är att man kan skapa tester till
olika miljöer utan att behöva installera mjukvaran på sin egna datorn. Detta kanske inte
är unikt, men självaste idén är väldigt tilltalande.


## Hur ser du på möjligheterna att använda dig av Docker för att jobba med tester av ditt repo?

Den största möjligheten som jag ser är att man kan skriva testbar kod för virtuella miljöer.
Så om jag t.ex skriver tester på min Windows 10, så kan jag sedan ladda ner mitt GitHub repo och
börja jobba på det från min Macbook t.ex, man slipper den jobbiga biten med att installera en miljö.

Dessutom med "images", så kan man skriva olika tester som är riktigt trevligt, då kan man använda
snabbt skapa några tester och testa dem på olika miljöer väldigt snabbt och smärtfritt (oftast).
Sedan så är det riktigt skönt att kunna starta igång massor av servrar med en `docker-compose`,
så man kan testa dem.

Men det gäller oftast att sätta upp en bra bas känner jag, då menar jag att man ser att lägga ner
tid och energi på att skapa en bra bas. För att då slipper man hela tiden, varje dag och varje natt slita i håret.
Nu har jag fixat ihop Docker på min Windows-maskin, jag har även kopplad ihop mitt Github repo med min egna
Docker Image, så vid en git push så kollar den så allt fungerar, precis som Travis.

## Gick allt smidigt eller stötte du på problem?

Det var lite huvudvärk i början med att få igång allt. Jag har Windows Home 10,
så då behövde man använda deras DockerToolbox. Så jag får via min Windows använda en virtuellmaskin
som pratar med Docker. Deras Toolbox var riktigt bra och gav mig en bra miljö. Däremot så
var det fortfarande lite svårt att komma igång, när jag gjorde en `curl localhost:8080` så
fungerade det inte. Detta löste jag genom att använda deras "Kitematic-program", den var mycket användarvänlig och
gav mig den rätta IP-adressen till servern som jag hade skapat i deras "Docker Quickstart Terminal". Så när jag
fick den rätta adressen så kunde jag se att jag verkligen startat servern. Adressen var kopplad till min virtuella maskin,
därav så tog det ett tag att klura ut det för mig.

Jag fick fixa och trixa mycket med portarna för `docker-compose.yml`, tillslut så fick jag till det. Jag gjorde så
alla får en egen port med hjälp av enviormentvariabeln "DBWEBB_PORT", så kan jag öppna dem som jag vill. Jag provade alla sevrar med min webbläsare,
sedan i "Kitematic" så kunde jag se att när jag gjorde en GET på t.ex port 1337 så hände inget på port 8082. Det kanske
ser lite konstigt ut med "1336:1336" i min `docker-compose.yml`, men det fungerade så jag körde på det.

## Skapade du din egen image, berätta om den?

Jag tittade på nodejs.org och även på nodes readme till Github-repot "docker-node".
Där fanns det en guide hur man kan skapa images. Så efter jag hade tittat klart på dessa så kände jag att jag hade
bra koll på hur jag kunde skapa egna node images eller hur jag kan använda dem med `docker-compose`.

Att ladda upp den var lite jobbigt, jag skapade ett repo på Docker och försökte få ihop allt, men
under vägen så blev jag allt mer bekvämt med alla `docker commands` och "lekte" lite med min "Dockerfile".
Hursomhelst så är "Dockerfile" min image,  där gör jag en npm install, npm test, ENV DBWEBB_PORT=1336 och
npm start. Jag provade alltså bara lite smått för att se vad jag kunde göra, "npm test" skapade
jag bara för att prova. Detta betyder att nästa gång så vet jag hur jag kan lägga in riktiga tester
i min docker-image. Sedan så la jag in min egna image i min "docker-compose.yml", så jag kunde se så det verkligen fungerar.

Jag kopplade även ihop mitt Docker repo med mitt egna Github repo, så den startar min Dockerfile, vid
en git push. Tyvärr så hittade jag inte en badge för detta, det verkade som man kunde skapa en egen på något
sätt och det gjorde jag, men den är ej kopplad till om den lyckas eller ej. Däremot om man tittar på committen så ska man kunna se "docker passed" eller "docker failed".

När jag byggde min image så gjorde jag ungefär som jag bifogat nedan. Men egentligen så kan man skippa sista delen
och gå in i kitematic-programmet.

```
# Build it
$ docker build -t my_image .

# Run it
$ docker run -p 49160:8080 -d my_image

# Get id and check log
$ docker ps
$ docker logs <container id>

# Go to container and then curl
$ docker exec -it <container id> /bin/bash
$ curl host:port
```

## Sammanfattning

Det var inte ett stort kursmoment, men det var utmanande att få igång Docker. Att
skapa en egen Image var en riktigt bra övning och lärde mig verkligen hur Docker fungerar
eller hur det är tänkt att fungera. Nu har jag mer tid över och tänker spendera den med att
pilla lite på min app, så den kan komma några nya commits.

http://162.243.185.158/

https://cloud.docker.com/swarm/nicklas766/repository/docker/nicklas766/my_image/general

http://www.student.bth.se/~nien16/dbwebb-kurser/ramverk2/me/

https://github.com/Nicklas766/bth-ramverk2
