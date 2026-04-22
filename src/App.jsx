import { useState } from 'react';
import './App.css';
import Board from './components/Board';
import QuestionCard from './components/QuestionCard';
import questionsData from './questions.json';

function App() {
	const [usedCards, setUsedCards] = useState(new Set());
	const [activeCard, setActiveCard] = useState(null);

	function handleSelectCard(colIndex, rowIndex, value) {
		const { question, answer } =
			questionsData.categories[colIndex].questions[rowIndex];
		setActiveCard({ colIndex, rowIndex, value, question, answer });
	}

	function handleBackToBoard() {
		setActiveCard(null);
	}

	function handleResult() {
		const cardKey = `${activeCard.colIndex}-${activeCard.rowIndex}`;

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
