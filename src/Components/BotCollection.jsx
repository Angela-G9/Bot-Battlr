import React, { useState, useEffect } from "react";

const BotCollection = ({ onEnlist, setSelectedBot }) => {
  const [bots, setBots] = useState([]);

  // Fetch bots from the JSON server
  useEffect(() => {
    fetch("http://localhost:3000/bots")
      .then((response) => response.json())
      .then((data) => setBots(data))
      .catch((error) => console.error("Error fetching bots:", error));
  }, []);

  // Delete a bot from the server
  const deleteBot = (botId) => {
    fetch(`http://localhost:3000/bots/${botId}`, { method: "DELETE" })
      .then((response) => {
        if (response.ok) {
          setBots((prevBots) => prevBots.filter((bot) => bot.id !== botId));
          console.log(`Bot with ID ${botId} deleted successfully.`);
        } else {
          console.error("Failed to delete bot.");
        }
      })
      .catch((error) => console.error("Error deleting bot:", error));
  };

  return (
    <div className="bot-collection">
      <h2>Bot Collection</h2>
      
      <div className="bot-collection"> 
      {bots.length > 0 ? (
        bots.map((bot) => (
          <div key={bot.id} className="bot-card" onClick={() => setSelectedBot(bot)}>
            <h3>{bot.name}</h3>
            <img src={bot.avatar_url} alt={bot.name} />
            <button
              onClick={(e) => {
                e.stopPropagation();
                onEnlist(bot);
              }}
            >
              Enlist
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                deleteBot(bot.id);
              }}
            >
              Discharge
            </button>
          </div>
        ))
      ) : (
        <p>No bots available!</p>
      )}
    </div>
    </div>
  );
};

export default BotCollection;
