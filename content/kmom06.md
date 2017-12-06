# Kmom06

## Reflektera över vikten av infrastruktur för moduler för ett programmeringsspråk.

Det är viktigt, det är många välkända moduler som har kommit från stora företag
och från hemmet av programmerare. Med en packet-manager som t.ex composer eller
npm så kan vi enkelt hantera våra dependencies för våra projekt. Vi kan hålla koll
på vilken version som behövs för att hela alltet ska fungera eller olika delar.

Modular programmering ser till så vi slipper skriva mycket kod som skulle kunna skifta
fokus på vad vi faktiskt vill uppnå med vår applikation. Det blir lättare för
oss att hitta fel, då majoritet av koden ligger i moduler så kan vi hitta fel snabbare. Vi
kan även återanvända mycket av koden.

Ett exempel skulle kunna vara React som Facebook har skapat. Det är ett jättebra
ramverk, men sedan finns det en community bakom som har tillfört många bra moduler
som bygger vidare projektet. Vi kan skapa kod inriktat för t.ex React och ladda upp den
på NPM för att dela med oss. Om vi inte hade haft NPM så hade det inte varit lika
smidigt, då man hade behövt göra många saker manuellt (vem orkar egentligen göra det).

## Vill du ge dig på att förklara att just npm är den tjänsten som växt snabbast av de modulerkataloger som presenteras på webbplatsen “Module Counts”?

Vad jag hört och sett så är JavaScript väldigt trendigt. Javascript är ett språk
som fungerar på bra på både backenden och frontenden. Många stora företag som PayPal,
Yahoo och IBM har talat om att börja använda node.js för backend. Då många personer
väljer att använda Javascript för både frontend och backend, så blir allt mycket bredare
i vad man kan skapa för moduler. I PHP så kan vi t.ex inte skapa en "slider" för
bilder på frontenden.

Detta är inte något jag har data på, jag försöker resonera logiskt hur det kan ligga
till. Jag tänker att en stor del är inte bara att Javascript är trendigt. Jag tror
mer att det beror på att man kan använda Javascript till både backend och frontend.
Javascript alltså av två världar, backend och frontend, medan de andra språken endast har en värld.

## Reflektera över hur arbetet gick att välja, separera, publisera och sedan åter integrera module i din applikation.

Det gick otroligt smidigt. Jag har redan tänkt på ett modulart sätt när
jag skapade min "mongo-connecter"-modul, då artiklarna tipsade om det tankesättet.

Jag hade lagt min modul sedan tidigare i `/src`, så allt jag behövde göra var
att förflytta mina enhetstester och självaste modulen till en egen katalog. Därefter
kunde jag skapa en mer specialiserad miljö för min modul. Så arbetet var väldigt
behagligt och trevligt, då jag fick en bättre struktur på både min modul och redovisa-sida.
Sedan så var det bara att göra en `npm install mongo-connecter --save`, så var jag
tillbaka på ruta ett i min redovisa-sida (fast med mindre kod, då den ligger i node_modules).


## Sista uppgiften om att dokumentera och färdigställa redovisa-sidan, tog det mycket tid eller hade du allt klart?

I kmom05 så hade jag gjort en uppdatering av min readme.md, men jag har tagit bort
makefilen och använder endast npm nu, så en uppdatering av min readme var välbehövd.

Jag försökte givetvis göra det väldigt konkret och enkelt hur man kan få igång sin
miljö. Men jag fick skriva några extra meningar angående hur man kan göra ändringar
om man skulle behöva göra det.


https://github.com/Nicklas766/bth-ramverk2
https://www.npmjs.com/package/mongo-connecter
http://www.student.bth.se/~nien16/dbwebb-kurser/ramverk2/me/
http://162.243.185.158/crud
