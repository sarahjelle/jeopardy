import { useState } from "react";

function QuestionCard({ question, answer, value, teamName, onResult, onBack }) {
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

            <div className="judge-section">
              <div className="judge-prompt">
                Svarte <strong>{teamName}</strong> rett?
              </div>
              <div className="judge-actions">
                <button className="btn btn--wrong" onClick={() => onResult(false)}>
                  ✗ Galt
                </button>
                <button className="btn btn--correct" onClick={() => onResult(true)}>
                  ✓ Rett (+{value})
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default QuestionCard;



