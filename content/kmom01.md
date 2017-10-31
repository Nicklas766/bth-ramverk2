# Kmom01

### Berätta utförligt om din syn på Express och Pug och hur de samverkar. Relatera till andra ramverk du jobbat med. Lyft fram de fördelar och eventuellt nackdelar du finner, eller bara notera skillnader och likheter.

Jag valde inte att använda Express och Pug, utan jag valde Express och sedan React för klienten.
Artikeln tog upp "MEAN" (Mongo, Express, Angular och NodeJS), jag kommer däremot använda en MERN (Mongo, Express, React och NodeJS),
detta begreppet såg jag när jag försökte få ihop React med Express. Vad jag har hört så ska vi lägga in en mongoDB, så det är trevligt
att veta att jag i stortsett följer MERN, jag vet inte riktigt vad det innebär däremot. Vill även poängtera att jag satt ihop alla pusselbitarna själv, jag
har inte följt en scaffold från mern.io, hittade hemsidan nu när jag skriver redovisningstexten.

Hursomhelst angående just Pug, så tyckte jag att det inte såg bra ut. Jag gillar att
arbeta med vanlig HTML, det blir mycket lättare att se vad som händer enligt mig. Däremot så
ser jag fördelar, t.ex så kan det bli mindre rader kod och nestade element kan vara lättare att läsa, med Pug.

Pug är ett "templating language", medan React är mycket mer kraftfull än vanliga templates engines, då det är ett stort
bibliotek, däremot så använder React "JSX" som också är ett slags template språk,
den är mer lik XML och HTML, så det tycker jag känns mer bekvämt att arbeta med. Man kan använda react för enbart
statisk "markup", men då kan man använda [denna](https://github.com/reactjs/express-react-views). Men jag är riktigt
nöjd att jag skapade en hel React-app för klienten istället.

Sedan så blev jag klar med Ramverk1 nyligen, där använde vi Anax och använde MVC mönstret. Så just delen
att hålla isär vyer och backend känns vanligt. Att ha Express.js för backenden känns riktigt bra, jag gillar verkligen
alla funktioner som Express erbjuder för routes, därefter kan man också skriva Javascript, som är roligt. Jag har precis
börjat men jag kan se likheter med anax-router, när man kunde skriva kod i routern och sedan visa en vy. Det känns som
React är min controller, då jag skickar saker till den och sedan så får den visa innehållet, jag kommer utveckla mer om detta i nästa
fråga.


### Berätta om din katalogstruktur och hur du organiserade din kod, hur tänkte du?

Jag gick in i rollen som en systemartiktekt som kurskomentet förslog och försökte få till en bra struktur.
Min Express-app är lik strukturen i artikeln, däremot så har jag ingen katalog `/views` istället så har jag en
`/client` och där ligger min React-app.

#### Server och Klient
Om jag börjar med min klient så har den en egen package.json, kravet var att man skulle ha en package.json,
men min idé är att man separerar backenden och frontenden, då kan frontend-utvecklarna göra som de vill
med klienten och de andra kan göra som de vill med backenden. Jag kände att just denna delen var okej att experimentera med, annars flyttar jag
de dependencies som ligger där till huvudkatalogen också.

Hursomhelst, i klienten så gör jag en `npm run build`, som ger mig en index.html och index-bundle.js som jag kan sedan förflytta till /public, då har jag alltså en
index.html och i den så ligger allt som har med vyer att göra, så jag slipper ha en "/views". I min react-app
så har jag `react-router`, denna sköter routes i självaste SPA:n, däremot om man gör en "GET" på t.ex routen "about",
så startas aldrig React (index.html), detta löste jag med `app.use(express.static(path.join(__dirname, 'public')));` på diverse routes i express.js delen.
Sedan så har React-appen en render för 404 om den inte har den routen, däremot så går den givetvis först via Express, så jag kan fortfarande
skicka en 404-kod från servern, detta är jag riktigt nöjd med. För API-delen (/routes/api.js) så skapade jag en route `/api`, så från min react-app, så behöver
jag enbart göra ajax-calls från t.ex `api/users`, så får jag svaret från servern.

#### Tester
Jag stötte på ett problem när jag skulle få igång Makefilen, eslint ville titta på min node_modules, även
fast jag hade en `.eslintignore`. Jag löste det genom att lägga till följande parameter i eslint kommandot
`eslint --ignore-path .eslintignore .`, detta gjorde så den inte gick in i node_modules, för att sedan ge mig ett hav av fel.

Jag valde att inte inkludera min klient i testet, detta är då React använder JSX som gav mig massor av felaktiga
valideringsfel. Hursomhelst så behövde jag även lägga till "/public" i .eslintignore då jag har en stor index-bundle.js, som också gav många fel.
Jag provade kommandot `eslint --ignore-path .eslintignore --fix .`, som rättade många indentation fel åt mig, som var riktigt skönt att använda, istället för att försöka rätta själv.
Sist men inte minst så gav eslint mig ett fel på min `next()` i app.js, så jag la till `"no-unused-vars": ["error", { "argsIgnorePattern": "next" }]` i dens config-filen.

### Använde du någon form av scaffolding som Express erbjuder?

Ja det var ett bra sätt att komma igång, jag använde `npm install express-generator -g`, därefter fick jag
automatiskt `jade` med mig, men den tog jag bort. Därefter så hade jag en bas för React som jag tidigare använt, när
jag under sommarlovet gick en React-kurs på nätet.

Jag har en webpack.config, som även har en proxy till servern så jag kan utveckla klienten riktigt effektivt.
Tycker det är riktigt roligt och skönt att uveckla med webpack.config.js, jag är inte riktigt säker om det är just den som
gör det. Men när jag sparar en fil, så uppdaterar React sig själv, så jag kan redigera CSS direkt i css filen och göra en `ctrl + s`.


### Jobbar du med Markdown för innehållet, eller annat liknande?

I /content så ligger alla markdown-filer, sedan med hjälp av `/api/reports` eller `/api/reports/:id`, så
kan klienten göra Ajax-anrop och hämta kursmomententstexter, riktigt nöjd med detta. I backenden så läser jag
markdown-filerna och skickar ett JSON-svar som består av en array med object för alla kursmomenten. Jag parserar inte
det till markdown i backenden, det gör jag i klienten med en dependency `react-markdown`. Jag ville göra den delen via
Express, men React klagade lite på att det var vanlig HTML jag gav den, så det fick bli på detta sättet.


### Bonus

Jag gav 5 dollar till digital ocean och fick 55 dollar på kontot med GitHubs studentpack. Skapade därefter en droplet och
DBWEBB_PORT hjälpte mycket med port 80. Behövdes sedan bara en ssh, git clone, cd bth-ramverk2, npm install, tmux, npm start. Riktigt nöjd och
trevlig att se att det fungerar "på riktigt".

[http://162.243.185.158/](http://162.243.185.158/)
