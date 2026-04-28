# 🎯 Jeopardy-workshop
I denne workshopen skal vi lage et digitalt Jeopardy-spill i React!

Når vi er ferdige vil spillet ha:

-   Et 5×5 brett med kategorier og poengsummer
-   Spørsmål som dukker opp når man trykker på et kort
-   Mulighet til å vise fasit

Ingen kunnskap om React er nødvendig på forhånd, vi forklarer det som trengs underveis. 🚀

---

## Sett opp og publisere en nettside 🏄
Følg guiden for "React" her: https://github.com/bekk/prosjektutgangspunkt

---

## Emoji-guide

Du vil se noen emojis i oppgavene:

-   🏆 **Oppgave:** Her er hva du skal gjøre
-   💡 **Tips / forklaring:** Nyttig info for å løse oppgaven
-   🚨 **Løsningsforslag:** Komplett kode du kan sammenligne med

---

## React på 2 minutter

Hvis du aldri har brukt React før så kan du lese mer her for å lære det viktigste!

<details>
<summary>Klikk her for en rask introduksjon til React</summary>

### Hva er React?

React er et JavaScript-bibliotek for å bygge brukergrensesnitt. I stedet for å skrive HTML og JavaScript separat, kombinerer React dem i noe som heter **komponenter**.

### Hva er en komponent?

En komponent er rett og slett en **JavaScript-funksjon som returnerer HTML-lignende kode**. Tenk på det som en gjenbrukbar byggekloss:

```jsx
function Hilsen() {
    return <h1>Hei, verden!</h1>;
}
```

Funksjonsnavnet må starte med stor forbokstav. Du kan bruke komponenten din som om den var en HTML-tag:

```jsx
function App() {
    return <Hilsen />;
}
```

### Hva er JSX?

Den HTML-lignende syntaksen (`<h1>`, `<div>`, osv.) inne i JavaScript kaller vi **JSX**. Det ser ut som HTML, men er egentlig JavaScript. Noen forskjeller å huske på:

-   Skriv `className` i stedet for `class` (fordi `class` er et reservert ord i JavaScript)
-   Alle tagger må lukkes, også `<img />` og `<br />`
-   Du kan sette inn JavaScript i JSX med krøllparenteser: `{2 + 2}` viser `4`

```jsx
function MinKomponent() {
    const navn = "Sara";
    return <p className="tekst">Hei, {navn}!</p>;
}
```

### Hva er props?

**Props** er data du sender inn til en komponent – akkurat som attributter på HTML-tagger. Komponenten mottar dem som et objekt:

```jsx
function Hilsen(props) {
    return <h1>Hei, {props.navn}!</h1>;
}

// Bruk den slik:
<Hilsen navn="Sara" />
```

Du kan også bruke **destrukturering** for å hente ut props direkte:

```jsx
function Hilsen({ navn }) {
    return <h1>Hei, {navn}!</h1>;
}
```

### Hva er state (tilstand)?

**State** er React sin måte å huske informasjon som kan endre seg over tid. Når state endres, tegner React komponenten på nytt automatisk.

For å bruke state bruker vi `useState`-hooken:

```jsx
import { useState } from 'react';

function Teller() {
    const [antall, setAntall] = useState(0); // starter på 0

    return (
        <div>
            <p>Du har klikket {antall} ganger</p>
            <button onClick={() => setAntall(antall + 1)}>Klikk meg!</button>
        </div>
    );
}
```

-   `antall` er den nåværende verdien
-   `setAntall` er funksjonen du kaller for å oppdatere verdien
-   `useState(0)` betyr at startverdien er `0`

### Filer og eksport

Hver komponent lagres vanligvis i sin egen fil. På slutten av filen skriver du:

```jsx
export default MinKomponent;
```

For å bruke komponenten i en annen fil, importerer du den:

```jsx
import MinKomponent from './MinKomponent';
```

</details>

---

## Kom i gang

```bash
# Installer avhengigheter
npm install

# Start appen lokalt
npm run dev
```

Åpne [http://localhost:5173](http://localhost:5173) i nettleseren. Du skal se en enkel velkomstside. Den skal vi bytte ut med Jeopardy-spillet!

---

---

## Oppgave 1: Legg inn spørsmål og svar i en JSON-fil

Spørsmålene og svarene skal ligge i en egen fil slik at de er lette å endre uten å røre selve koden.

### Steg 1a – Lag filen

🏆 Lag filen `src/questions.json`.

### Steg 1b – Kopier inn spørsmålene

🏆 Kopier innholdet nedenfor inn i `src/questions.json`. Spørsmålene kan byttes ut om du vil lage ditt eget spill!

<details>
<summary>🚨 Spørsmål og svar som skal kopieres inn</summary>

```json
{
	"categories": [
		{
			"name": "Geografi",
			"questions": [
				{
					"value": 100,
					"question": "Hva er hovedstaden i Norge?",
					"answer": "Oslo"
				},
				{
					"value": 200,
					"question": "Hvilket land har flest innbyggere i verden?",
					"answer": "Kina"
				},
				{
					"value": 300,
					"question": "Hva heter den lengste elva i Afrika?",
					"answer": "Nilen"
				},
				{
					"value": 400,
					"question": "Hvilket land er både et kontinent og et land?",
					"answer": "Australia"
				},
				{
					"value": 500,
					"question": "Hva heter havet mellom Europa og Amerika?",
					"answer": "Atlanterhavet"
				}
			]
		},
		{
			"name": "Historie",
			"questions": [
				{
					"value": 100,
					"question": "Hvilket år ble Norge selvstendig fra Sverige?",
					"answer": "1905"
				},
				{
					"value": 200,
					"question": "Hvem var den første presidenten i USA?",
					"answer": "George Washington"
				},
				{
					"value": 300,
					"question": "Hvilket år begynte andre verdenskrig?",
					"answer": "1939"
				},
				{
					"value": 400,
					"question": "Hvem oppdaget Amerika i 1492?",
					"answer": "Kristoffer Columbus"
				},
				{
					"value": 500,
					"question": "Hva er navnet på det berømte kinesiske forsvarsbyggverket?",
					"answer": "Den kinesiske muren"
				}
			]
		},
		{
			"name": "Vitenskap",
			"questions": [
				{
					"value": 100,
					"question": "Hva er det kjemiske symbolet for vann?",
					"answer": "H₂O"
				},
				{
					"value": 200,
					"question": "Hva er den raskeste farten i universet?",
					"answer": "Lysets hastighet"
				},
				{
					"value": 300,
					"question": "Hvor mange bein har en edderkopp?",
					"answer": "8"
				},
				{
					"value": 400,
					"question": "Hva heter teorien Darwin er kjent for?",
					"answer": "Evolusjonsteorien"
				},
				{
					"value": 500,
					"question": "Hva er halvveringstiden til karbon-14?",
					"answer": "Ca. 5730 år"
				}
			]
		},
		{
			"name": "Sport",
			"questions": [
				{
					"value": 100,
					"question": "Hvor mange spillere er det på et fotballag på banen?",
					"answer": "11"
				},
				{
					"value": 200,
					"question": "Hvilket land har vunnet flest OL-gull i vinterlek?",
					"answer": "Norge"
				},
				{
					"value": 300,
					"question": "Hva heter tennisturneringen som spilles på gress i England?",
					"answer": "Wimbledon"
				},
				{
					"value": 400,
					"question": "Hvor mange hull er det på en standard golfbane?",
					"answer": "18"
				},
				{
					"value": 500,
					"question": "Hvor mange spillere er det på et basketballag på banen?",
					"answer": "5"
				}
			]
		},
		{
			"name": "Pop-kultur",
			"questions": [
				{
					"value": 100,
					"question": "Hvilken Disney-film handler om en ung løve som heter Simba?",
					"answer": "Løvenes Konge"
				},
				{
					"value": 200,
					"question": "Hva heter den magiske skolen i Harry Potter-bøkene?",
					"answer": "Galtvort (Hogwarts)"
				},
				{
					"value": 300,
					"question": "Hvilken norsk TV-serie om ungdommer ble en internasjonal hit på Netflix?",
					"answer": "SKAM"
				},
				{
					"value": 400,
					"question": "Hvem regisserte filmtrilogien «Ringenes Herre»?",
					"answer": "Peter Jackson"
				},
				{
					"value": 500,
					"question": "Hvilken norsk artist vant Eurovision i 2009?",
					"answer": "Alexander Rybak"
				}
			]
		}
	]
}
```

</details>

### Steg 1c – Forstå strukturen

Filen har en liste med kategorier (`categories`). Hver kategori har et navn (`name`) og en liste med spørsmål (`questions`). Hvert spørsmål har en poengverdi (`value`), selve spørsmålet (`question`) og svaret (`answer`).

> 💡 **Vite støtter JSON-import**
> Byggesystemet vi bruker (Vite) støtter å importere JSON-filer direkte i JavaScript. Slik importerer du spørsmålene:
>
> ```js
> import questionsData from './questions.json';
> // questionsData.categories er nå en liste med alle kategoriene
> ```

---

## Oppgave 2: Lag selve spillbrettet

Nå skal vi lage en `Board`-komponent som viser alle kategoriene og poengsummene. Foreløpig trenger ikke kortene å gjøre noe når man trykker på dem.

> 💡 **Hva er en komponent?**
> En komponent i React er en funksjon som returnerer JSX. Komponenten lagres i en egen fil og eksporteres, slik at den kan brukes andre steder i koden.

### Steg 2a – Lag en tom Board-komponent

🏆 Lag filen `src/components/Board.jsx` og skriv inn en enkel komponent som bare viser litt tekst.

<details>
<summary>💡 Slik ser en tom komponent ut</summary>

```jsx
function Board() {
    return <div>Hei, jeg er brettet!</div>;
}

export default Board;
```

`export default Board;` gjør at andre filer kan importere komponenten.

</details>

### Steg 2b – Importer Board i App.jsx

🏆 Åpne `src/App.jsx` og importer `Board`-komponenten. Erstatt innholdet av `return`-setningen med `<Board />` slik at du kan se den i nettleseren.

<details>
<summary>💡 Slik importerer og bruker du Board</summary>

```jsx
import Board from './components/Board';

function App() {
    return (
        <div className="game-screen">
            <h1 className="game-title">🎯 Jeopardy</h1>
            <Board />
        </div>
    );
}

export default App;
```

Sjekk at du ser teksten «Hei, jeg er brettet!» i nettleseren.

</details>

### Steg 2c – Importer spørsmålene og vis kategorinavnene

🏆 Oppdater `Board.jsx` til å importere `questionsData` og vise alle kategorinavnene.

> 💡 **Hva er `.map()`?**
> `.map()` er en JavaScript-funksjon som går gjennom hvert element i en liste og returnerer noe nytt. I React bruker vi `.map()` for å vise lister i JSX:
>
> ```jsx
> const frukter = ['eple', 'banan', 'pære'];
>
> return (
>     <ul>
>         {frukter.map((frukt, index) => (
>             <li key={index}>{frukt}</li>
>         ))}
>     </ul>
> );
> // Viser: eple, banan, pære som tre listepunkter
> ```
>
> `key` er påkrevd i React når du lager lister. Det hjelper React å holde styr på hvilke elementer som er hvilke. Bruk gjerne indeksen som nøkkel.

<details>
<summary>💡 Slik viser du kategorinavnene</summary>

```jsx
import questionsData from '../questions.json';

function Board() {
    const { categories } = questionsData;

    return (
        <div>
            {categories.map((category, index) => (
                <div key={index}>{category.name}</div>
            ))}
        </div>
    );
}

export default Board;
```

`const { categories } = questionsData;` henter ut `categories`-listen fra JSON-filen.

</details>

### Steg 2d – Legg til kort-knapper under hver kategori

🏆 For hver kategori, vis fem knapper med poengsummene 100, 200, 300, 400 og 500. Strukturen er én kolonne per kategori, med kategorinavnet øverst.

<details>
<summary>💡 Slik legger du til knapper</summary>

```jsx
import questionsData from '../questions.json';

function Board() {
    const { categories } = questionsData;

    return (
        <div className="board">
            {categories.map((category, categoryIndex) => (
                <div key={categoryIndex} className="board-column">
                    <div className="board-category">{category.name}</div>
                    {category.questions.map((question, questionIndex) => (
                        <button
                            key={questionIndex}
                            className="board-cell board-cell--available"
                        >
                            ${question.value}
                        </button>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default Board;
```

Vi bruker `.map()` to ganger: én gang for kategoriene (kolonnene) og én gang for spørsmålene (radene). `question.value` hentes direkte fra JSON-filen. `className`-verdiene er ferdiglagde CSS-klasser som gir brettet utseende.

</details>

<details>
<summary>🚨 Løsningsforslag – ferdig Board.jsx og App.jsx</summary>

`src/components/Board.jsx`:

```jsx
import questionsData from '../questions.json';

function Board() {
    const { categories } = questionsData;

    return (
        <div className="board">
            {categories.map((category, categoryIndex) => (
                <div key={categoryIndex} className="board-column">
                    <div className="board-category">{category.name}</div>
                    {category.questions.map((question, questionIndex) => (
                        <button
                            key={questionIndex}
                            className="board-cell board-cell--available"
                        >
                            ${question.value}
                        </button>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default Board;
```

`src/App.jsx`:

```jsx
import './App.css';
import Board from './components/Board';

function App() {
    return (
        <div className="game-screen">
            <h1 className="game-title">🎯 Jeopardy</h1>
            <Board />
        </div>
    );
}

export default App;
```

</details>

---

## Oppgave 3 – Vis spørsmålet når man trykker på et kort

Nå skal kortene gjøre noe! Når man trykker på et kort, skal spørsmålet vises i et overlay som dekker skjermen.

> 💡 **Hva er state (`useState`)?**
> State er React sin måte å huske data som kan endre seg. Hver gang state oppdateres, tegner React komponenten på nytt.
>
> ```jsx
> import { useState } from 'react';
>
> const [verdi, setVerdi] = useState(startverdi);
> ```
>
> -   `verdi` er den nåværende verdien
> -   `setVerdi` er funksjonen du kaller for å oppdatere den
> -   `startverdi` er hva state skal starte som

### Steg 3a – Legg til state for hvilket kort som er valgt

🏆 Åpne `src/App.jsx`. Importer `useState` og legg til en state-variabel `activeCard` som holder styr på det valgte kortet. Start med `null` (ingenting valgt).

<details>
<summary>💡 Slik legger du til state</summary>

```jsx
import { useState } from 'react';
import './App.css';
import Board from './components/Board';

function App() {
    const [activeCard, setActiveCard] = useState(null);

    return (
        <div className="game-screen">
            <h1 className="game-title">🎯 Jeopardy</h1>
            <Board />
        </div>
    );
}

export default App;
```

</details>

### Steg 3b – Lag en funksjon som setter aktivt kort

🏆 Lag funksjonen `handleSelectCard` i `App.jsx`. Den skal hente spørsmål og svar fra `questionsData` og lagre dem i `activeCard`.

<details>
<summary>💡 Slik lager du funksjonen</summary>

```jsx
import questionsData from './questions.json';

// Inne i App-funksjonen:
function handleSelectCard(categoryIndex, questionIndex, value) {
    const { question, answer } = questionsData.categories[categoryIndex].questions[questionIndex];
    setActiveCard({ categoryIndex, questionIndex, value, question, answer });
}
```

`categoryIndex` er indeksen til kategorien (kolonnen), `questionIndex` er indeksen til spørsmålet (raden), og `value` er poengsummen.

</details>

### Steg 3c – Send funksjonen ned til Board som prop

🏆 Send `handleSelectCard` ned til `Board` som en prop kalt `onSelectCard`.

> 💡 **Hva er props?**
> Props er data du sender inn til en komponent, akkurat som attributter på HTML-tagger. Du kan sende funksjoner som props – slik kan en barn-komponent «snakke tilbake» til forelder-komponenten.

<details>
<summary>💡 Slik sender du props</summary>

```jsx
// I App.jsx – send funksjonen ned til Board:
<Board onSelectCard={handleSelectCard} />
```

</details>

### Steg 3d – Ta imot og bruk onSelectCard i Board.jsx

🏆 Oppdater `Board.jsx` til å ta imot `onSelectCard` som prop og kalle den når en knapp trykkes.

<details>
<summary>💡 Slik tar du imot og bruker props i Board</summary>

```jsx
// Board mottar { onSelectCard } som prop
function Board({ onSelectCard }) {
    const { categories } = questionsData;

    return (
        <div className="board">
            {categories.map((category, categoryIndex) => (
                <div key={categoryIndex} className="board-column">
                    <div className="board-category">{category.name}</div>
                    {category.questions.map((question, questionIndex) => (
                        <button
                            key={questionIndex}
                            className="board-cell board-cell--available"
                            onClick={() => onSelectCard(categoryIndex, questionIndex, question.value)}
                        >
                            ${question.value}
                        </button>
                    ))}
                </div>
            ))}
        </div>
    );
}
```

`onClick={() => onSelectCard(categoryIndex, questionIndex, question.value)}` kaller `onSelectCard` med riktig kategori, spørsmål og verdi når knappen klikkes.

</details>

### Steg 3e – Vis overlayet betinget i App.jsx

🏆 Vis et overlay med spørsmålet når `activeCard` ikke er `null`. Legg til en «Tilbake»-knapp som setter `activeCard` tilbake til `null`.

> 💡 **Betinget rendering med `&&`**
> I JSX kan du bruke `&&` for å vise noe bare når en betingelse er sann:
>
> ```jsx
> {activeCard && <div>Noe vises bare når activeCard ikke er null</div>}
> ```

<details>
<summary>💡 Slik viser du overlayet</summary>

```jsx
{activeCard && (
    <div className="question-overlay">
        <div className="question-card">
            <div className="question-value">${activeCard.value}</div>
            <div className="question-text">{activeCard.question}</div>
            <div className="question-actions">
                <button
                    className="btn btn--secondary"
                    onClick={() => setActiveCard(null)}
                >
                    ← Tilbake til brettet
                </button>
            </div>
        </div>
    </div>
)}
```

</details>

<details>
<summary>🚨 Løsningsforslag – ferdig App.jsx</summary>

```jsx
import { useState } from 'react';
import './App.css';
import Board from './components/Board';
import questionsData from './questions.json';

function App() {
    const [activeCard, setActiveCard] = useState(null);

    function handleSelectCard(categoryIndex, questionIndex, value) {
        const { question, answer } = questionsData.categories[categoryIndex].questions[questionIndex];
        setActiveCard({ categoryIndex, questionIndex, value, question, answer });
    }

    return (
        <div className="game-screen">
            <h1 className="game-title">🎯 Jeopardy</h1>
            <Board onSelectCard={handleSelectCard} />

            {activeCard && (
                <div className="question-overlay">
                    <div className="question-card">
                        <div className="question-value">${activeCard.value}</div>
                        <div className="question-text">{activeCard.question}</div>
                        <div className="question-actions">
                            <button
                                className="btn btn--secondary"
                                onClick={() => setActiveCard(null)}
                            >
                                ← Tilbake til brettet
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default App;
```

</details>

---

## Oppgave 4 – Vis svaret

Nå skal vi legge til en «Vis svar»-knapp. Svaret skal være skjult til man trykker på knappen.

Vi skal også flytte spørsmålskortet til en egen komponent for å holde koden ryddig.

### Steg 4a – Lag en QuestionCard-komponent

🏆 Lag filen `src/components/QuestionCard.jsx`. Den skal ta imot `question`, `answer` og `value` som props og vise spørsmålet.

<details>
<summary>💡 Slik lager du en QuestionCard-komponent</summary>

```jsx
function QuestionCard({ question, answer, value, onBack }) {
    return (
        <div className="question-overlay">
            <div className="question-card">
                <div className="question-value">${value}</div>
                <div className="question-text">{question}</div>
                <div className="question-actions">
                    <button className="btn btn--secondary" onClick={onBack}>
                        ← Tilbake til brettet
                    </button>
                </div>
            </div>
        </div>
    );
}

export default QuestionCard;
```

`onBack` er en funksjon som sendes inn som prop fra `App.jsx` – den lukker kortet.

</details>

### Steg 4b – Legg til en `revealed`-state for å vise/skjule svaret

🏆 Legg til `useState(false)` inne i `QuestionCard` for å holde styr på om svaret er vist.

> 💡 **State i barnkomponenter**
> State trenger ikke å ligge i `App.jsx`. Her er det naturlig å ha `revealed`-state direkte i `QuestionCard`, fordi det kun er QuestionCard som trenger å vite om svaret er vist.

<details>
<summary>💡 Slik legger du til revealed-state</summary>

```jsx
import { useState } from 'react';

function QuestionCard({ question, answer, value, onBack }) {
    const [revealed, setRevealed] = useState(false);

    // ...
}
```

`revealed` starter som `false` (svaret er skjult). Når man klikker «Vis svar», settes den til `true`.

</details>

### Steg 4c – Vis knapp eller svar avhengig av state

🏆 Vis «Vis svar»-knappen når `revealed` er `false`. Når `revealed` er `true`, vis svaret i stedet.

<details>
<summary>💡 Slik bytter du mellom knapp og svar</summary>

```jsx
{!revealed && (
    <button className="btn btn--primary" onClick={() => setRevealed(true)}>
        Vis svar
    </button>
)}

{revealed && (
    <div className="answer-section">
        <div className="answer-label">Svar:</div>
        <div className="answer-text">{answer}</div>
    </div>
)}
```

`!revealed` betyr «når revealed er false». `{revealed && ...}` viser noe bare når `revealed` er `true`.

</details>

<details>
<summary>🚨 Løsningsforslag – ferdig QuestionCard.jsx</summary>

```jsx
import { useState } from 'react';

function QuestionCard({ question, answer, value, onResult, onBack }) {
    const [revealed, setRevealed] = useState(false);

    return (
        <div className="question-overlay">
            <div className="question-card">
                <div className="question-value">${value}</div>
                <div className="question-text">{question}</div>

                {!revealed && (
                    <div className="question-actions">
                        <button className="btn btn--secondary" onClick={onBack}>
                            ← Tilbake til brettet
                        </button>
                        <button
                            className="btn btn--primary"
                            onClick={() => setRevealed(true)}
                        >
                            Vis svar
                        </button>
                    </div>
                )}

                {revealed && (
                    <>
                        <div className="answer-section">
                            <div className="answer-label">Svar:</div>
                            <div className="answer-text">{answer}</div>
                        </div>

                        <div className="question-actions">
                            <button className="btn btn--primary" onClick={onResult}>
                                Ferdig
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default QuestionCard;
```

Og i `App.jsx`, erstatt overlay-koden med:

```jsx
import QuestionCard from './components/QuestionCard';

// Legg til disse to funksjonene i App:
function handleBackToBoard() {
    setActiveCard(null);
}

function handleResult() {
    setActiveCard(null);
}

// I JSX:
{activeCard && (
    <QuestionCard
        question={activeCard.question}
        answer={activeCard.answer}
        value={activeCard.value}
        onResult={handleResult}
        onBack={handleBackToBoard}
    />
)}
```

</details>

---

## Oppgave 5 – Merk kort som brukt

Nå skal vi sørge for at kort man allerede har besvart markeres som brukt, slik at de ikke kan velges igjen.

> 💡 **Hva er et Set?**
> Et `Set` er en JavaScript-samling som bare inneholder unike verdier – ingen duplikater. Vi bruker det for å holde styr på hvilke kort som er brukt: `usedCards.has('0-2')` sjekker om kortet i kategori 0, rad 2 er brukt.

### Steg 5a – Legg til usedCards-state i App.jsx

🏆 Legg til `useState(new Set())` i `App.jsx` for å holde styr på hvilke kort som er brukt.

<details>
<summary>💡 Slik legger du til usedCards-state</summary>

```jsx
const [usedCards, setUsedCards] = useState(new Set());
```

`new Set()` lager et tomt sett. Etter hvert som kort besvares, legger vi til nøkler på formen `` `${categoryIndex}-${questionIndex}` ``.

</details>

### Steg 5b – Lag handleResult-funksjonen

🏆 Lag `handleResult`-funksjonen i `App.jsx`. Den skal lage en kopi av `usedCards`-settet, legge til det aktive kortets nøkkel og oppdatere state.

> 💡 **Hvorfor kopiere settet?**
> React oppdager kun endringer dersom du setter en ny verdi med `setUsedCards`. Derfor lager vi en kopi med `new Set(usedCards)` før vi legger til, akkurat som vi lager en kopi av en liste med `[...liste]`.

<details>
<summary>💡 Slik lager du handleResult</summary>

```jsx
function handleResult() {
    const cardKey = `${activeCard.categoryIndex}-${activeCard.questionIndex}`;
    const newUsed = new Set(usedCards);
    newUsed.add(cardKey);
    setUsedCards(newUsed);
    setActiveCard(null);
}
```

</details>

### Steg 5c – Send usedCards og handleResult ned til riktige komponenter

🏆 Send `usedCards` som prop til `Board` og `onResult={handleResult}` som prop til `QuestionCard`.

<details>
<summary>💡 Slik sender du propsene</summary>

```jsx
// I App.jsx JSX:
<Board usedCards={usedCards} onSelectCard={handleSelectCard} />

{activeCard && (
    <QuestionCard
        question={activeCard.question}
        answer={activeCard.answer}
        value={activeCard.value}
        onResult={handleResult}
        onBack={handleBackToBoard}
    />
)}
```

</details>

### Steg 5d – Oppdater Board til å vise brukte kort annerledes

🏆 Oppdater `Board.jsx` til å ta imot `usedCards` som prop. Vis brukte kort med CSS-klassen `board-cell--used` og deaktiver dem.

<details>
<summary>💡 Slik viser du brukte kort annerledes</summary>

```jsx
function Board({ usedCards, onSelectCard }) {
    const { categories } = questionsData;

    return (
        <div className="board">
            {categories.map((category, categoryIndex) => (
                <div key={categoryIndex} className="board-column">
                    <div className="board-category">{category.name}</div>
                    {category.questions.map((question, questionIndex) => {
                        const cardKey = `${categoryIndex}-${questionIndex}`;
                        const isUsed = usedCards.has(cardKey);
                        return (
                            <button
                                key={questionIndex}
                                className={`board-cell ${isUsed ? 'board-cell--used' : 'board-cell--available'}`}
                                onClick={() => !isUsed && onSelectCard(categoryIndex, questionIndex, question.value)}
                                disabled={isUsed}
                            >
                                {isUsed ? '' : `$${question.value}`}
                            </button>
                        );
                    })}
                </div>
            ))}
        </div>
    );
}
```

`usedCards.has(cardKey)` returnerer `true` hvis kortet er brukt. Vi bruker det til å sette riktig CSS-klasse og deaktivere knappen.

</details>

<details>
<summary>🚨 Løsningsforslag – ferdig App.jsx og Board.jsx</summary>

`src/App.jsx`:

```jsx
import { useState } from 'react';
import './App.css';
import Board from './components/Board';
import QuestionCard from './components/QuestionCard';
import questionsData from './questions.json';

function App() {
    const [usedCards, setUsedCards] = useState(new Set());
    const [activeCard, setActiveCard] = useState(null);

    function handleSelectCard(categoryIndex, questionIndex, value) {
        const { question, answer } =
            questionsData.categories[categoryIndex].questions[questionIndex];
        setActiveCard({ categoryIndex, questionIndex, value, question, answer });
    }

    function handleBackToBoard() {
        setActiveCard(null);
    }

    function handleResult() {
        const cardKey = `${activeCard.categoryIndex}-${activeCard.questionIndex}`;
        const newUsed = new Set(usedCards);
        newUsed.add(cardKey);
        setUsedCards(newUsed);
        setActiveCard(null);
    }

    return (
        <div className="game-screen">
            <h1 className="game-title">🎯 Jeopardy</h1>
            <Board usedCards={usedCards} onSelectCard={handleSelectCard} />

            {activeCard && (
                <QuestionCard
                    question={activeCard.question}
                    answer={activeCard.answer}
                    value={activeCard.value}
                    onResult={handleResult}
                    onBack={handleBackToBoard}
                />
            )}
        </div>
    );
}

export default App;
```

`src/components/Board.jsx`:

```jsx
import questionsData from '../questions.json';

function Board({ usedCards, onSelectCard }) {
    const { categories } = questionsData;

    return (
        <div className="board">
            {categories.map((category, categoryIndex) => (
                <div key={categoryIndex} className="board-column">
                    <div className="board-category">{category.name}</div>
                    {category.questions.map((question, questionIndex) => {
                        const cardKey = `${categoryIndex}-${questionIndex}`;
                        const isUsed = usedCards.has(cardKey);
                        return (
                            <button
                                key={questionIndex}
                                className={`board-cell ${isUsed ? 'board-cell--used' : 'board-cell--available'}`}
                                onClick={() => !isUsed && onSelectCard(categoryIndex, questionIndex, question.value)}
                                disabled={isUsed}
                            >
                                {isUsed ? '' : `$${question.value}`}
                            </button>
                        );
                    })}
                </div>
            ))}
        </div>
    );
}

export default Board;
```

</details>

---

## Ferdig! 🎉

Gratulerer, du har nå laget et fullstendig Jeopardy-spill i React!

**Ideer til videre utvidelser:**

-   Lag et eget tema med dine egne spørsmål i `questions.json`
-   Legg til en tidsbegrensning per spørsmål
-   Legg til lyd eller animasjoner
-   Gjør spillet responsivt for mobil
