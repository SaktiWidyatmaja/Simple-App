# Simple App: Login and Registration System

This web app provides a user authentication system with login, registration, and homepage screens. It includes both the frontend built with ReactJS and the backend API built with Node.js and Express.

## Features

- User registration with username, email, and password
- User login using registered credentials
- Protected homepage accessible only to authenticated users

## Technologies Used

- **Frontend**: ReactJS (with TypeScript)
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **API Testing**: Postman

## Setup Instructions

### Frontend Setup

1. Clone the repository: `git clone https://github.com/SaktiWidyatmaja/Simple-App.git`
2. Navigate to the frontend folder: `cd Simple-App/client`
3. Install dependencies: `npm install`
4. Start the development server: `npm run dev`

### Backend Setup

1. Navigate to the backend folder: `cd Simple-Appp/server`
2. Install dependencies: `npm install`
3. Add `.env` file to this folder and fill the DB_URL with your database connection string
4. Start the backend server: `npm run devStart`

## API Endpoints

- **POST /user/register**: Register a new user
- **POST /user/login**: Authenticate user and provide a JWT token
- **GET /user/delete/{username}**: Protected route, requires JWT authentication

## API Testing

Use Postman to test the API endpoints. You can import the Postman collection from [here](https://github.com/SaktiWidyatmaja/Simple-App/blob/main/server/test/Simple%20App.postman_collection.json).

## Live Web App

The live version of the web app is deployed at https://simple-app-alpha.vercel.app/.
