# Post Apocalypse Trading Hub
Developer : Sudin Acharya

## Overview

This is a s all Coding challenge, secure and password protected Trade Hub demonstrating core functionality for user authentication
and displaying a table for tradable supplies.

## Features
**Basic Authentication:** Users can log in with provided credentials 
**List of Tradable Supplies:** Displays the list of supplies in a table from the backend.
**Supply Details:** Shows name, type, quantity and image when clicked. ( room for improvement, provide more details in the dialog box)

## Technologies Used. 
**Backend:**  Java / Spring Boot
**Frontend:** React(Minimal)
**Build Tool for Backend :** Maven
**Containerization:** Docker

## How to Run
1. Ensure Docker is installed in your system.
2. Clone the repository and navigate to the directory
3. Run the following command: 
    `docker-compose up --build`
4. Once the services are running, you can access the frontend in your web browser at "http://localhost:3000"

## Login Credentials
**Username:** `user01`
**Password:** `ushallnotpass`

## Further Improvements (If given more time)
* **Backend:** 
* Implement proper user authentication with database storage and password hashing.
* Integrate a database (MongoDB, PostgresSql)
* Implement trading functionality
* Implement API documentation
* Implement user roles and permissions

* **Frontend**
* Implement more user friendly UI/UX.
* Implement filtering and sorting functionalities
* Implement user profiles and trading history

## Repository Structure
post-apocalypse-trade-hub

├── backend/
│   ├── src/
│   ├── pom.xml
│   └── Dockerfile
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── Dockerfile
├── docker-compose.yml
└── README.md

