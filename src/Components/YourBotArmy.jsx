import React from 'react';

const YourBotArmy = ({ army, onRelease }) => {
  return (
    <div className="your-bot-army">
      <h2>Your Bot Army</h2>
      {army.length > 0 ? (
        army.map((bot) => (
          <div key={bot.id} className="army-bot">
            <h3>{bot.name}</h3>
            <img src={bot.avatar_url} alt={bot.name} />
            <p><strong>Health:</strong> {bot.health}</p>
            <p><strong>Damage:</strong> {bot.damage}</p>
            <p><strong>Armor:</strong> {bot.armor}</p>
            <p><strong>Class:</strong> {bot.bot_class}</p>
            <p><strong>Catchphrase:</strong> {bot.catchphrase}</p>
            {/* Discharge button to permanently remove a bot */}
            <button 
              className="discharge-btn" 
              onClick={() => onRelease(bot)}
            >
              Discharge
            </button>
          </div>
        ))
      ) : (
        <p>No bots enlisted yet!</p>
      )}
    </div>
  );
};

export default YourBotArmy;
