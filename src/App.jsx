import { useState } from "react";
import "./App.css";
import SetupScreen from "./components/SetupScreen";
import Board from "./components/Board";
import QuestionCard from "./components/QuestionCard";
import Scoreboard from "./components/Scoreboard";
import questionsData from "./questions.json";

const TOTAL_CARDS = questionsData.categories.length * 5;

function App() {
  const [phase, setPhase] = useState("setup"); // "setup" | "game" | "finished"
  const [teams, setTeams] = useState([]);
  const [currentTeamIndex, setCurrentTeamIndex] = useState(0);
  const [usedCards, setUsedCards] = useState(new Set());
  const [activeCard, setActiveCard] = useState(null);

  function handleStart(teamNames) {
    setTeams(teamNames.map((name) => ({ name, score: 0 })));
    setCurrentTeamIndex(0);
    setUsedCards(new Set());
    setActiveCard(null);
    setPhase("game");
  }

  function handleSelectCard(colIndex, rowIndex, value) {
    const { question, answer } = questionsData.categories[colIndex].questions[rowIndex];
    setActiveCard({ colIndex, rowIndex, value, question, answer });
  }

  function handleBackToBoard() {
    setActiveCard(null);
  }

  function handleResult(correct) {
    const cardKey = `${activeCard.colIndex}-${activeCard.rowIndex}`;

    if (correct) {
      setTeams((prev) => {
        const updated = prev.map((t) => ({ ...t }));
        updated[currentTeamIndex].score += activeCard.value;
        return updated;
      });
    }

    const newUsed = new Set(usedCards);
    newUsed.add(cardKey);
    setUsedCards(newUsed);
    setActiveCard(null);

    setCurrentTeamIndex((prev) => (prev + 1) % teams.length);

    if (newUsed.size >= TOTAL_CARDS) {
      setPhase("finished");
    }
  }

  function getWinner() {
    return teams.reduce((best, t) => (t.score > best.score ? t : best), teams[0]);
  }

  if (phase === "setup") {
    return <SetupScreen onStart={handleStart} />;
  }

  if (phase === "finished") {
    const winner = getWinner();
    return (
      <div className="finished-screen">
        <h1 className="finished-title">🏆 Spillet er over!</h1>
        <p className="finished-winner">
          Vinneren er: <strong>{winner.name}</strong> med {winner.score} poeng!
        </p>
        <div className="finished-scores">
          {[...teams]
            .sort((a, b) => b.score - a.score)
            .map((t, i) => (
              <div key={i} className="finished-score-row">
                <span>
                  {i + 1}. {t.name}
                </span>
                <span>{t.score} poeng</span>
              </div>
            ))}
        </div>
        <button className="start-button" onClick={() => setPhase("setup")}>
          Spill igjen
        </button>
      </div>
    );
  }

  return (
    <div className="game-screen">
      <h1 className="game-title">🎯 Jeopardy</h1>
      <div className="turn-indicator">{teams[currentTeamIndex].name} sin tur</div>
      <Board usedCards={usedCards} onSelectCard={handleSelectCard} />
      <Scoreboard teams={teams} currentTeamIndex={currentTeamIndex} />

      {activeCard && (
        <QuestionCard
          question={activeCard.question}
          answer={activeCard.answer}
          value={activeCard.value}
          teamName={teams[currentTeamIndex].name}
          onResult={handleResult}
          onBack={handleBackToBoard}
        />
      )}
    </div>
  );
}

export default App;
