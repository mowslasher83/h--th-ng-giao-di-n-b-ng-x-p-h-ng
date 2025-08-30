import React from 'react';
import './PlayerRankings.css';

const players = [
  { name: 'Nguyễn Văn A', score: 2000 },
  { name: 'Trần Thị B', score: 1500 },
  { name: 'Lê Văn C', score: 3000 }
];

function PlayerRankings() {
  return (
    <div className="player-rankings">
      <ul>
        {players.map((player, index) => (
          <li key={index}>{index + 1}. {player.name} - {player.score} điểm</li>
        ))}
      </ul>
    </div>
  );
}

export default PlayerRankings;