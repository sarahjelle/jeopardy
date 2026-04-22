import { useState } from "react";

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
            <button className="btn btn--primary" onClick={() => setRevealed(true)}>
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



