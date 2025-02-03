import React from 'react';

const BotSpecs = ({ bot, onEnlist, onBack }) => {
  return (
    <div className="bot-specs">
      <h2>{bot.name}</h2>
      <img src={bot.avatar_url} alt={bot.name} />
      <p><strong>Health:</strong> {bot.health}</p>
      <p><strong>Damage:</strong> {bot.damage}</p>
      <p><strong>Armor:</strong> {bot.armor}</p>
      <p><strong>Class:</strong> {bot.bot_class}</p>
      <p><strong>Catchphrase:</strong> {bot.catchphrase}</p>
      <button onClick={() => onEnlist(bot)}>Enlist</button>
      <button onClick={onBack}>Back to List</button>
    </div>
  );
};

export default BotSpecs;
