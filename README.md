<!-- 

GitHub Link - https://github.com/akshaysonee/HumanChainAPI 

# AI Safety Incident Log API

This is a backend API service for logging and managing AI safety incidents. It uses Node.js, Express, TypeScript, and MongoDB to store and manage incidents.

## Table of Contents
- [Overview](#overview)
- [Technologies Used](#technologies-used)
- [Installation Instructions](#installation-instructions)
- [Configuration](#configuration)
- [API Endpoints](#api-endpoints)
- [Error Handling](#error-handling)
- [License](#license)

## Overview

The API provides endpoints to create, retrieve, and delete AI safety incidents. Each incident includes a title, description, severity level, and timestamp. 

## Technologies Used

- **Backend**: Node.js, Express.js
- **Language**: TypeScript
- **Database**: MongoDB (via Mongoose)
- **Development Tools**: ts-node-dev, dotenv

## Installation Instructions

### 1. Clone the Repository

git clone https://github.com/akshaysonee/HumanChainAPI

### 2. Navigate to the Project Directory

cd human-chain-api

### 3. Install Dependencies

npm install

### 4. Create Environment Variables

Create a .env file in the root directory:

PORT=5000
MONGODB_URI=mongodb+srv://theakshaykumar13:Akshay%40123@cluster0.psl9pka.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/HumanChainApi

### 5. Build TypeScript

npx tsc

### 6. Run the Server

npm run dev

## Configuration

Make sure MongoDB is installed and running. You can use a local MongoDB server or MongoDB Atlas.

Update the MONGODB_URI in the .env file with your connection string.

## API Endpoints

###1. Get All Incidents

GET /api/incidents

Retrieves all stored incidents.

[
  {
    "id": "1",
    "title": "AI Malfunction",
    "description": "The AI system crashed unexpectedly.",
    "severity": "High",
    "reported_at": "2025-04-10T12:34:56Z"
  }
]


### 2. Create a New Incident

POST /api/incidents

{
  "title": "New Incident Title",
  "description": "Detailed description of the incident",
  "severity": "Medium"
}

{
  "id": "2",
  "title": "New Incident Title",
  "description": "Detailed description here",
  "severity": "Medium",
  "reported_at": "2025-04-02T18:00:00Z"
}


### 3. Get Incident by ID
GET /api/incidents/{id}

Fetches a specific incident by ID.

{
  "id": "1",
  "title": "AI Malfunction",
  "description": "The AI system crashed unexpectedly.",
  "severity": "High",
  "reported_at": "2025-04-10T12:34:56Z"
}


### 4. Delete Incident by ID

DELETE /api/incidents/{id}

{
  "message": "Incident deleted successfully"
}


## Error Handling
-The API returns appropriate HTTP status codes:
-400 Bad Request: Missing fields or invalid severity.
-404 Not Found: Incident not found.
-500 Internal Server Error: Unexpected server errors.

Example Error Response:

{
  "error": "Bad Request",
  "message": "Severity must be one of 'Low', 'Medium', 'High'."
}

##License
-This project is licensed under the MIT License.