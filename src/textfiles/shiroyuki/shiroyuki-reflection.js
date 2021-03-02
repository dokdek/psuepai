const text = "The bot is built on JavaScript implementing the Discord.js Node module, which is a wrapper for the Discord API that allows me to use call upon the Discord API using promises. Thus, all requests and functions related to interacting with the Discord API are either promises or async/await functions. It is connected to a MongoDB database via Mongoose to store and retrieve all the listing data. Compared to previous projects, I spent a lot more time thinking about the database model and how it should be implemented. There are individual data models for each server within the game, which should allow for faster search as a user should only be querying one server at a time. Additionally, a lot of the find/update functions have been simplified compared to previous projects because the models use less nested arrays as parameters. This ended up making a lot of the functions for reading and writing to the database are a lot simpler than my previous projects. The project was also a good exercise in asynchronous functions in JavaScript ";

export default text;