import questionsData from "../questions.json";

function Board({ usedCards, onSelectCard }) {
  const { categories } = questionsData;
  const pointValues = [100, 200, 300, 400, 500];

  return (
    <div className="board">
      {categories.map((category, colIndex) => (
        <div key={colIndex} className="board-column">
          <div className="board-category">{category.name}</div>
          {pointValues.map((value, rowIndex) => {
            const cardKey = `${colIndex}-${rowIndex}`;
            const isUsed = usedCards.has(cardKey);
            return (
              <button
                key={rowIndex}
                className={`board-cell ${isUsed ? "board-cell--used" : "board-cell--available"}`}
                onClick={() => !isUsed && onSelectCard(colIndex, rowIndex, value)}
                disabled={isUsed}
              >
                {isUsed ? "" : `$${value}`}
              </button>
            );
          })}
        </div>
      ))}
    </div>
  );
}

export default Board;
