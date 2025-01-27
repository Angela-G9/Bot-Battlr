import React from 'react';

const BotCard = ({ bot, onEnlist, onGoBack }) => {
  return (
    <div className="bot-specs">
      <h2>{bot.name}</h2>
      <img src={bot.avatar_url} alt={bot.name} />
      <p><strong>Health:</strong> {bot.health}</p>
      <p><strong>Damage:</strong> {bot.damage}</p>
      <p><strong>Armor:</strong> {bot.armor}</p>
      <p><strong>Class:</strong> {bot.bot_class}</p>
      <p><strong>Catchphrase:</strong> {bot.catchphrase}</p>

  <button onClick={onGoBack}>Back to Collection</button>
  <button onClick={() => onEnlist(bot)}>Enlist Bot</button>
</div>
  );
};

export default BotCard;