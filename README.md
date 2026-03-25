# Community Events Web Application

Open this repository as a Codespace on GitHub (or as a container in VS Code.)

## Client-Side Development Server

All client-side code is located in the `client` directory.

1. Change to the `client` directory by running `cd client` in the Terminal.
2. Install the dependencies by running `npm install` in the Terminal.
3. Start the development server by running `npm run dev` in the Terminal.

Press Control+C in the terminal to stop the server.

## Server-Side Development Server

All server-side code is located in the `server` directory.

1. Change to the `server` directory by running `cd server` in the Terminal.
2. Install the dependencies by running `npm install` in the Terminal.
3. Start the development server by running `npm run dev` in the Terminal.

Press Control+C in the terminal to stop the server.

## Initializing Database with Server and Client-Side Development Server at the Same time

1. Type in `mongosh init.mongodb.js` in the Terminal.
2. Run `cd server/` in the Terminal.
3. Run `cd ..` in the Terminal.
4. Install the dependencies by running `npm install` in the Terminal.
5. Start the development server by running `npm run dev` in the Terminal.

Press Control+C in the terminal to stop the server.

## How to Test that `SearchEvents` is Searching as the User Queries

1. Type in `mongosh init.mongodb.js` in the Terminal.
2. Run `mongosh` in the Terminal.
3. This will bring you to `test>`
4. Run `use("app")`
5. This will bring you to `app>`
6. Run `db.events.find({ $text: { $search: "star" } })`
7. This will return all the events with the word `star` or "stars" in its event card.
