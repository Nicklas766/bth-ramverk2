# Kmom04


## Är du ny på realtidsprogrammering eller har du gjort liknande tidigare?

Jag är ny till realtidsprogrammering, tidigare så har jag arbetat med AJAX (Asynchronous JavaScript and XML),
som tillåter en att via klienten göra anrop till servern, för att hämta t.ex data.
Däremot med realtidsprogrammering, så tillåter websockets vår klient att öppna och hålla
en koppling till en server. Med hjälp av t.ex events så kan vi använda meddelanden
för att skicka data mellan de olika parterna.

En skillnad värd att nämna mellan Websockets och AJAX är att när man använder AJAX
så kan man inte skicka meddelanden till klienten från servern, man kan endast göra
anrop till servern från klienten.

## Hur gick det att jobba med konceptet realtidsprogrammering i webben, några reflektioner?

Det gick smidigt att arbeta med realtidsprogrammering, det är däremot alltid lite
jobbigt att komma igång med nya begrepp och koncept och detta kursmoment var inget
undantag.

Jag har definitivt en positiv inställning gentemot realtidsprogrammering, mest för
möjligheterna som öppnas upp. En chatt som vi fick göra i detta kursmomentet är
ett perfekt exempel. Vi vill givetvis att när vi skickar/gör saker så uppdateras det
till alla andra klienter på ett effektivt och smärtfritt sätt. Jag föredrar att man
med hjälp av servern kan uppdatera klienterna, istället för att göra t.ex ett AJAX-anrop
varje femte sekund. Jag märkte att min klient blev mycket lättare att koda för, då jag
kunde arbeta tillsammans med servern, istället för hur jag ska "möta servern".

Sedan så är det min server som har koll på alla sockets och sparar dem i en lista, sedan tar
den bort socketen om den t.ex disconnectar. Detta gör det lättare att arbeta från klienten
då jag vet att servern redan sköter all "hantering", jag behöver endast skicka meddelanden
till servern och vara beredd på att motta dem, men självklart så behöver min klient fortfarande
på något sätt hålla koll på sin egna socket, det skriver jag mer om i nästa fråga.

## Berätta om din chatt som du integrerade i redovisa-sidan.

Min chatt skapades jag med hjälp av `socket.io`. I min `/src/chat.js` så ligger modulen
till min chatt, det känns riktigt bra, då jag väldigt lätt kan flytta ut den till
t.ex ett npm-package i framtiden om jag vill. Sedan så skapade jag även två react-komponenter,
den ena kopplar upp användaren mot socket-servern, den andra består av chatten. Så jag
har alltså separerat uppkopplingen och självaste funktionen, det gör så kan jag återanvända
delar av koden till en applikation i framtiden som använder socket.io.

För att inte gå in för detaljerat på hur react-kompentenerna är byggda, så ska jag
kortfattat försöka beskriva hur de är byggda och hur de fungerar med servern.
React-komponenter har oftast sitt egna "state", de har även dessa två. När man
går in på länken "chat", så skapas en egen socket automatiskt åt dig via konstruktorn
i "Connect.js" som sparas i komponentens egna `state`, detta ser servern och väljer att
lägga till dig i sin `this.users = []`, med `{id: socket.id, name: `guest${this.users.length}`, typing: false}`.

Nu är du med i listan på "online-users", däremot så har du inte joinat chatten än. Detta gör du genom
att via input-fältet ange ett namn och klickar på "join chat", då skickas en `this.state.socket.emit('new user', this.state.name);`
och klienten uppdaterar även sitt "state" så att den skapar en ny child-komponent som är "Chat.js".
Precis som "Connect" så har "Chat" sitt egna state, "Chat" ärver "socketen" från "Connect".
Sedan så har "Chat" funktioner för att t.ex skicka ett meddelande till servern om någon
har mer än 1 karaktär i input-fältet, då ser alla det och man ser t.ex "Nicklas ...",
då klienten skickar det till servern. På grund av att "Chat" komponenten har ett eget state,
så kunde jag smidigt lägga till "roliga" och "coola" funktioner smärtfritt.

Sist men inte minst, angående när man joinar servern så skriver servern det i chatten, även när man lämnar
så ser Connect.js till så att vid unmount av komponenten så disconnectas man. "Server" ligger
i serverns `this.users = []`, så den är som en "marvin-bot".


## Berätta om den realtidsfunktionalitet du väljer att integrera i din klient/server applikation.

Jag är fortfarande osäker på vad min applikation ska gå ut på, ett spel kanske? Däremot så
vill jag att man ska kunna chatta med varandra. Jag är med andra ord så är jag 100% säker på att
min applikation ska ha en chatt. Så jag valde att integrera min chatt från min redovisa-sida
till applikationen.

Egentligen så kändes detta fel och onödigt, då jag hellre vill göra den
till ett node_package som vi gjorde i oophp med composer. Men jag kan alltid
omvandla den till ett eget npm-package. I ett eget repo för chatten så kan jag även
fokusera mer på "ren-kod", så det blir mindre filer att hålla reda på, men jag har
en bra grund för att förflytta chatten till ett eget repo. Dessutom så kanske det
till och med var bra att jag integrerade chatten, för då har jag iallafall en bas för realtidsprogrammering.
Sedan så har jag även för mig att vi ska göra det i kmom06, så det ser jag fram emot.
