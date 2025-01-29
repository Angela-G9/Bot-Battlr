import React from 'react';

const BotSpecs = ({ bot, onEnlist }) => {
  return (
    <div className="bot-specs">
      <h2>{bot.name}</h2>
      <img src={bot.avatar_url} alt={bot.name} />
      <p>{bot.description}</p>
      <button onClick={() => onEnlist(bot)}>Enlist</button>
    </div>
  );
};

export default BotSpecs;
