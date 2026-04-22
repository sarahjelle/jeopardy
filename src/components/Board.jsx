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
								onClick={() =>
									!isUsed &&
									onSelectCard(
										categoryIndex,
										questionIndex,
										question.value,
									)
								}
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
