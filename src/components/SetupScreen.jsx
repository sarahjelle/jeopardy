import { useState } from "react";

function SetupScreen({ onStart }) {
  const [teamCount, setTeamCount] = useState(2);
  const [teamNames, setTeamNames] = useState(["Lag 1", "Lag 2"]);

  function handleTeamCountChange(count) {
    const newCount = Number(count);
    setTeamCount(newCount);
    setTeamNames((prev) => {
      const updated = [...prev];
      while (updated.length < newCount) updated.push(`Lag ${updated.length + 1}`);
      return updated.slice(0, newCount);
    });
  }

  function handleNameChange(index, value) {
    setTeamNames((prev) => {
      const updated = [...prev];
      updated[index] = value;
      return updated;
    });
  }

  function handleStart() {
    const names = teamNames.map((n, i) => n.trim() || `Lag ${i + 1}`);
    onStart(names);
  }

  return (
    <div className="setup-screen">
      <h1 className="setup-title">🎯 Jeopardy</h1>

      <div className="setup-card">
        <label className="setup-label">
          Antall lag
          <select
            className="setup-select"
            value={teamCount}
            onChange={(e) => handleTeamCountChange(e.target.value)}
          >
            {[2, 3, 4, 5, 6].map((n) => (
              <option key={n} value={n}>
                {n} lag
              </option>
            ))}
          </select>
        </label>

        <div className="team-names">
          {teamNames.map((name, i) => (
            <label key={i} className="setup-label">
              Lagnavn {i + 1}
              <input
                className="setup-input"
                type="text"
                value={name}
                onChange={(e) => handleNameChange(i, e.target.value)}
                maxLength={20}
              />
            </label>
          ))}
        </div>

        <button className="start-button" onClick={handleStart}>
          Start spill
        </button>
      </div>
    </div>
  );
}

export default SetupScreen;
