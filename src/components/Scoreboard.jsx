function Scoreboard({ teams, currentTeamIndex }) {
  return (
    <div className="scoreboard">
      {teams.map((team, i) => (
        <div
          key={i}
          className={`score-card ${i === currentTeamIndex ? "score-card--active" : ""}`}
        >
          <div className="score-team-name">{team.name}</div>
          <div className="score-points">{team.score} poeng</div>
        </div>
      ))}
    </div>
  );
}

export default Scoreboard;
