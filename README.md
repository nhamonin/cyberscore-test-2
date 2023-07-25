# Dota 2 Match Data

This project is a single-page application that displays the current state of a Dota 2 match based on data received from the Steam API.

## Features

The app can display the following data for a given match:

- Match name: `{team_1} vs {team_2}`
- Match ID: `{match_id}`
- Current game time: `{mm:ss}`
- Score of each team: `{team_1_score} - {team_2_score}`
- List of players and their heroes from both teams
- State of each team's buildings (towers + barracks)

## Technologies Used

- Front-end: React (Create React App)
- Back-end: Node.js, Express
- Deployment: Vercel (front-end), The Host (back-end)
- Additional Libraries: cors, dotenv

## Local Development

Before starting, make sure to have Node.js and npm installed on your machine.

### Running the client

1. Navigate to the `client` directory: `cd client`
2. Install dependencies: `npm install`
3. Start the development server: `npm start`
4. Visit `http://localhost:3000` in your browser

### Running the server

1. Navigate to the `server` directory: `cd server`
2. Install dependencies: `npm install`
3. Start the development server: `npm start`
4. The server runs on `http://localhost:5543`

## License

[MIT](link-to-license)
