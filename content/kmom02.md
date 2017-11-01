# Kmom02


## Har du jobbat med Docker eller andra virtualiseringstekniker innan?

Jag har inte riktigt arbetat på detta sättet. I linx-kursen så använde vi virtualbox, men
det första jag kan tänka på är Travis. Jag antar att de gör på detta sätt när jag gör en
git push, ifall jag kopplat ett repo till dem. Däremot på detta sätt så kan jag lägga upp
egna tester på olika miljöer.

Det Jag tyckte var väldigt intressant med just Docker är att man kan skapa tester till
olika miljöer utan att behöva installera mjukvaran på sin egna datorn.


Det tog ett tag att komma igång med Docker, men efter jag fick igång en bra miljö med
deras DockerToolbox, så flöt det på mycket bättre.

## Hur ser du på möjligheterna att använda dig av Docker för att jobba med tester av ditt repo?

Den största möjligheten som jag ser är att man kan skriva tesbar kod för virtuella miljöer.
Så om jag t.ex skriver tester på min Windows 10, så kan jag sedan ladda ner mitt GitHub repo och
börja jobba på det från min Macbook t.ex, man slipper den jobbiga biten med att installera en miljö.

## Gick allt smidigt eller stötte du på problem?

Det var lite huvudvärk i början med att få igång allt. Jag har Windows Home 10,
så då behövde man använda deras DockerToolbox. Så jag får via min Windows använda en virtuellmaskin
som pratar med Docker. Det var lite svårt att komma igång, när jag gjorde en `curl localhost:8080`, så
fungerade det inte. Detta löste jag genom att använda deras "Kitematic", den var mycket användarvänlig och
gav mig den rätta IP-adressen till servern jag hade skapat i deras "Docker Quickstart Terminal". Så när jag
fick den rätta adressen så kunde jag se att jag verkligen startat servern, även fast att den gick via en annan
IP-adress än localhost.

Jag fick fixa och trixa mycket med portarna för `docker-compose.yml`, tillslut så fick jag till det, så alla med
hjälp av DBWEBB_PORT, får en egen port, så kan jag öppna dem som jag vill. Jag provade alla sevrar med min webbläsare,
sedan i "Kitematic" så kunde jag se att när jag gjorde en GET på t.ex port 1337 så hände inget på port 8082. Det kanske
ser lite konstigt ut med "1336:1336", men det fungerade så jag körde på det.

## Skapade du din egen image, berätta om den?

https://cloud.docker.com/swarm/nicklas766/repository/docker/nicklas766/my_image/general

https://nodejs.org/en/docs/guides/nodejs-docker-webapp/

https://github.com/nodejs/docker-node/blob/master/README.md#nodeversion

Jag tittade på nodejs.org för en guide hur man kan skapa images och deras readme
på deras Github-repo "docker-node". Så efter jag hade tittat klart på dessa så kände jag att jag hade
bra koll på hur jag kunde skapa egna node images eller hur jag kan använda dem med Docker Composer.

Att ladda upp den var lite jobbigt, jag skapde ett repo på Docker och försökte få ihop allt, men
under vägen så blev jag allt mer bekvämt med alla `docker` och lekte lite med min Dockerfile.
Jag la in min egna image i min docker-compose.yml, så jag kunde se så det verkligen fungerar.

Jag kopplade även ihop mitt Docker repo med mitt egna GitHub Repo, så den startar min Dockerfile, vid
en git Push


Jag skapade en egen image. Jag kör en npm install och npm test innan.


Jag bygger den

docker build -t my_image .

jag börjar med att köra den
docker run -p 49160:8080 -d my_image

Sedan så skaffar jag id:et och tittar i loggen
$ docker ps
$ docker logs <container id>


Sedan så går jag in i min container och gör en curl -i localhost:49160
docker exec -it <container id> /bin/bash

eller så kan jag gå in i "Kitematic" efter en run för att se där direkt.


bra docker-compose up -d
