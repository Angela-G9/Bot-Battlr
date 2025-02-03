import React from 'react';
const BotCollection = ({ bots, setSelectedBot, enlistBot }) => {
  return (
    <div className="bot-collection">
      {bots.map((bot) => (
        <div key={bot.id} className="bot-card">
          <h3>{bot.name}</h3>
          <img src={bot.avatar_url} alt={bot.name} />
          <p><strong>Health:</strong> {bot.health}</p>
          <p><strong>Damage:</strong> {bot.damage}</p>
          <p><strong>Armor:</strong> {bot.armor}</p>
          <p><strong>Class:</strong> {bot.bot_class}</p>
          <p><strong>Catchphrase:</strong> {bot.catchphrase}</p>
          <button 
            className="enlist-btn" 
            onClick={() => enlistBot(bot)}
          >
            Enlist
          </button>
        </div>
      ))}
    </div>
  );
};

      

export default BotCollection;
