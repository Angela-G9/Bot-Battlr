import React from "react";

const YourBotArmy = ({ army, onRelease, onDischarge }) => {
  return (
    <div className="your-bot-army">
      <h2>Your Bot Army</h2>
      {army.length > 0 ? (
        army.map((bot) => (
          <div key={bot.id} className="bot-card">
            <h3>{bot.name}</h3>
            <img src={bot.avatar_url} alt={bot.name} />
            <button onClick={() => onRelease(bot)}>Release</button>
            <button onClick={() => onDischarge(bot)}>Discharge</button>
          </div>
        ))
      ) : (
        <p>No bots enlisted yet!</p>
      )}
    </div>
  );
};

export default YourBotArmy;
