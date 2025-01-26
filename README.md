# Bot Battlr

Welcome to **Bot Battlr**, the ultimate place to build and manage your own bot army! This React application allows users to browse a collection of bots, view their details, and manage their army.

## Features

### Core Functionality
- **Browse Bots**: View a list of all available bots in the `BotCollection`.
- **Enlist Bots**: Add a bot to your army by clicking on it. Bots can only be added to the army once.
- **Release Bots**: Remove a bot from your army by clicking on it in the `YourBotArmy` section.
- **Discharge Bots**: Permanently delete a bot from the backend and the interface using the red "Discharge" button.

### Advanced Features (Optional)
- **Filter Bots**: Filter bots by their class or other attributes.
- **Sort Bots**: Sort bots by health, damage, or armor.
- **Detailed View**: Display detailed information about a bot in a separate view.
- **Unique Class Enlistment**: Only one bot per class can be enlisted at a time.

---

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) installed on your system.
- [JSON Server](https://www.npmjs.com/package/json-server) installed globally or locally.

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/YOUR_USERNAME/bot-battlr.git
   cd bot-battlr
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Add the `db.json` file in the root of your project directory with the following content:
   ```json
   {
     "bots": [
       {
         "id": 101,
         "name": "wHz-93",
         "health": 94,
         "damage": 20,
         "armor": 63,
         "bot_class": "Support",
         "catchphrase": "1010010101001101100011000111101",
         "avatar_url": "https://robohash.org/nostrumrepellendustenetur.png?size=300x300&set=set1"
       },
       {
         "id": 102,
         "name": "RyM-66",
         "health": 86,
         "damage": 36,
         "armor": 77,
         "bot_class": "Medic",
         "catchphrase": "0110011100000100011110100110011000011001",
         "avatar_url": "https://robohash.org/quidemconsequaturaut.png?size=300x300&set=set1"
       }
     ]
   }
   ```

4. Start the JSON Server:
   ```bash
   json-server --watch db.json --port 8001
   ```

5. Start the React application:
   ```bash
   npm start
   ```

---

## Project Structure
```plaintext
src/
  ├── components/
  │     ├── BotCollection.jsx  // Displays the list of available bots.
  │     ├── YourBotArmy.jsx    // Displays the bots enlisted in the army.
  │     ├── BotCard.jsx         // Represents a single bot as a card.
  │     └── SortBar.jsx        // (Optional) Sorting and filtering controls.
  ├── App.jsx                  // Main application component.
  ├── index.jsx                // Entry point for the React app.
  └── index.cssx              // Styles for the application.
```

---

## Available Endpoints

### GET `/bots`
- Fetches all available bots.

### DELETE `/bots/:id`
- Deletes a bot with the specified `id`.

Example response:
```json
{}
```

---

## How to Use

1. Open the application in your browser.
2. Browse through the list of bots.
3. Click "Enlist" to add a bot to your army.
4. Click a bot in `YourBotArmy` to release it.
5. Click the red "Discharge" button to permanently delete a bot.

---

## Future Improvements
- Add filtering and sorting functionality.
- Implement a detailed view for each bot.
- Restrict enlistment to one bot per class.

---

## License
This project is licensed under the MIT License.

