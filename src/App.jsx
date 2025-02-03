import React, { useState, useEffect } from 'react';
import BotCollection from './Components/BotCollection';
import YourBotArmy from './Components/YourBotArmy';
import BotSpecs from './Components/BotSpecs';
import './App.css';

const App = () => {
  const [army, setArmy] = useState([]);
  const [bots, setBots] = useState([]);
  const [selectedBot, setSelectedBot] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sortOrder, setSortOrder] = useState('asc');
  const [searchTerm, setSearchTerm] = useState('');

  // Fetch bots from API
  useEffect(() => {
    fetch('https://bots-si0g.onrender.com/bots')
      .then((response) => response.json())
      .then((data) => {
        setBots(data);
        setLoading(false);
      })
      .catch((err) => {
        setError('Failed to load bots');
        setLoading(false);
      });
  }, []);

  // Sort and filter bots
  const sortedBots = bots
  .filter((bot) => bot.name.toLowerCase().includes(searchTerm.toLowerCase()))
  .sort((a, b) => {
    const [criteria, order] = sortOrder.split('-');
    if (criteria === 'name') {
      return order === 'asc' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
    } else {
      return order === 'asc' ? a[criteria] - b[criteria] : b[criteria] - a[criteria];
    }
  });

  // Enlist bot to the army
  const enlistBot = (bot) => {
    if (!army.some((b) => b.id === bot.id)) {
      setArmy([...army, bot]);
      alert(`${bot.name} has been enlisted!`);
    }
    setSelectedBot(null);
  };

  // Release bot from the army
  const releaseBot = (bot) => {
    if (window.confirm(`Are you sure you want to discharge ${bot.name}?`)) {
      // Remove from the army
      setArmy(army.filter((b) => b.id !== bot.id));
  
      // Delete from the backend
      fetch(`http://localhost:8001/bots/${bot.id}`, {
        method: 'DELETE',
      })
        .then((response) => {
          if (response.ok) {
            // Remove from the bots list
            setBots(bots.filter((b) => b.id !== bot.id));
          }
        })
        .catch((err) => console.error('Error discharging bot:', err));
    }
  };
   
  const handleBack = () => {
    setSelectedBot(null);
  };
  
  // In the render section:
  {selectedBot ? (
    <BotSpecs 
      bot={selectedBot} 
      onEnlist={enlistBot} 
      onBack={handleBack} 
    />
  ) : (
    <div className="collection-and-army">
      <BotCollection 
        bots={sortedBots} 
        setSelectedBot={setSelectedBot} 
        enlistBot={enlistBot} 
      />
      <YourBotArmy army={army} onRelease={releaseBot} />
    </div>
  )}

  
  return (
    <div className="app">
      <h1>Bot Battlr</h1>
      {loading && <p>Loading bots...</p>}
      {error && <p>{error}</p>}

      <div className="sort-bar">
        <input
          type="text"
          placeholder="Search for a bot"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select onChange={(e) => setSortOrder(e.target.value)} value={sortOrder}>
          <option value="asc">Sort by Name (A-Z)</option>
          <option value="desc">Sort by Name (Z-A)</option>
        </select>
      </div>

      <div className="content">
        {selectedBot ? (
          <BotSpecs bot={selectedBot} onEnlist={enlistBot} />
        ) : (
          <div className="collection-and-army">
            <BotCollection 
               bots={sortedBots} 
               setSelectedBot={setSelectedBot} 
              enlistBot={enlistBot} 
           />
            <YourBotArmy army={army} onRelease={releaseBot} />
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
