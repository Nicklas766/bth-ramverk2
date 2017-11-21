# Kmom04


## Är du ny på realtidsprogrammering eller har du gjort liknande tidigare?

Jag har programmerat med AJAX, men då görs alltid ett anrop till servern via klienten.

## Hur gick det att jobba med konceptet realtidsprogrammering i webben, några reflektioner?


## Berätta om din chatt som du integrerade i redovisa-sidan.

Det är min server som har koll på alla sockets och sparar dem i en lista, sedan tar
den bort den om den t.ex disconnectar. Detta gör det lättare att arbeta från klienten
då jag vet att servern redan sköter all "hantering", jag behöver endast kalla mina egna
events

socket.io-client i react (klienten) och socket.io i express (servern)

## Berätta om den realtidsfunktionalitet du väljer att integrera i din klient/server applikation.
