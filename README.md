# Mongo Chat Application

## Description
This project is a simple chat application built using Node.js, Express, MongoDB, and EJS for templating. It allows users to create, view, update, and delete chat messages.

## Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/mongo-chat-app.git
   
2.Navigate into the project directory:
cd mongo-chat-app

3.Install the dependencies:
npm install

Usage
1.Start the MongoDB server (ensure MongoDB is installed and running on your machine)
2.Run the application
3.Open your browser and navigate to http://localhost:8080 to access the application.

Project Structure
  index.js: Main application file where Express server is set up and routes are defined.
  init.js: Initialization file to connect to MongoDB and seed initial chat data.
  models/chat.js: Mongoose model for chat messages.
  views/: Directory containing EJS templates for rendering HTML.
  
Dependencies
  express: ^4.19.2
  ejs: ^3.1.10
  method-override: ^3.0.0
  mongoose: ^8.4.4
  
Scripts
  start: Starts the server (node index.js).
  
Routes
  GET /: Test route to check if the server is running.
  GET /chats: Displays all chat messages.
  GET /chats/new: Displays a form to create a new chat message.
  POST /chats: Creates a new chat message.
  GET /chats/:id/edit: Displays a form to edit an existing chat message.
  PUT /chats/:id: Updates an existing chat message.
  DELETE /chats/:id: Deletes an existing chat message.

  
