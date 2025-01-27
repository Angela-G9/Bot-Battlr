import React, { useState } from "react";
import BotCollection from "./Components/BotCollection.jsx";
import YourBotArmy from "./Components/YourBotArmy.jsx";
import BotCard from "./Components/BotCard.jsx";
import "./App.css";

const App = () => {
  const [army, setArmy] = useState([]);
  const [selectedBot, setSelectedBot] = useState(null);

  // Add bot to the army
  const enlistBot = (bot) => {
    if (!army.some((b) => b.id === bot.id) && !army.some((b) => b.bot_class === bot.bot_class)) {
      setArmy((prevArmy) => [...prevArmy, bot]);
    }
  };

  // Remove bot from the army
  const releaseBot = (bot) => {
    setArmy((prevArmy) => prevArmy.filter((b) => b.id !== bot.id));
  };

  // Discharge bot entirely
  const dischargeBot = (bot) => {
    setArmy((prevArmy) => prevArmy.filter((b) => b.id !== bot.id));
    // Call backend API to delete bot from server
    fetch(`http://localhost:3000/bots/${bot.id}`, { method: "DELETE" })
      .then((response) => {
        if (response.ok) {
          console.log(`Bot ${bot.name} has been discharged.`);
        } else {
          console.error("Failed to discharge bot.");
        }
      })
      .catch((error) => console.error("Error discharging bot:", error));
  };

  // Return to bot collection
  const goBackToCollection = () => setSelectedBot(null);

  return (
    <div className="app">
      <h1>Bot Battlr</h1>
      {selectedBot ? (
        <BotCard bot={selectedBot} onEnlist={enlistBot} onGoBack={goBackToCollection} />
      ) : (
        <>
          <BotCollection onEnlist={enlistBot} setSelectedBot={setSelectedBot} />
          <YourBotArmy army={army} onRelease={releaseBot} onDischarge={dischargeBot} />
        </>
      )}
    </div>
  );
};

export default App;
