# Backend with Node.js, Express, and MongoDB for Contact/Subscriber Management using MVC

[Project Link](https://mern-contacts-app.onrender.com/)

This repository contains the backend implementation for a contact management application built with Node.js, Express, and MongoDB. The backend follows the Model-View-Controller (MVC) pattern and provides RESTful API endpoints to create, update, and delete contacts.

It is the backend part of a fullstack app, MERN stack, [link to frontend, React repo](https://github.com/oolaoluwatobi/contatcts-app-mern-client)

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [MVC Pattern](#mvc-pattern)
- [RESTful API Endpoints](#restful-api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This backend implementation serves as the backend for a contact management application. It utilizes Node.js and Express to create a robust server, and MongoDB as the database for storing contact data.

## Features

- Model-View-Controller (MVC) pattern for organized code structure
- RESTful API endpoints for contact management
- Create, update, and delete contacts

## Installation

Follow these steps to set up and run the backend locally:

1. Clone the repository:

```bash
git clone https://github.com/oolaoluwatobi/backend-contact-app-mern.git
```

2. Change into the project directory:

```bash
cd backend-contact-app-mern
```

3. Install the required dependencies:
```bash
npm install
```

4. Set up environment variables:

Create a `.env` file in the root of the project and add the necessary environment variables, such as:
```bash
MONGODB_URI=your-mongodb-connection-uri

```


## Usage

To start the backend server, use the following command:

```bash
npm start
```

The server will start running on `http://localhost:5000`


## MVC Pattern

The backend follows the MVC pattern to structure the code into separate modules:

- Models:  Define data models and interact with the database.
- Views: Handle presentation and rendering of data (not applicable for the backend).
- Controllers:  Manage the application's logic and serve as an intermediary between models and views.

```bash
├── controllers
│   ├── authController.js
│   ├── userController.js
│   ├── subscriberController.js
│   └── ...
├── models
│   ├── userModel.js
│   ├── subscriberModel.js
│   └── ...
├── views
│   ├── userView.js
│   ├── subscriberView.js
│   └── ...
└── app.js
```

##  RESTful API Endpoints

The app interacts with a RESTful API to manage contacts. Some of the API endpoints include:

- Fetch all subscribers/contacts: `GET /` or `GET /subscribers`
- Fetch a single subscriber: `GET /subscribers/:id`
- Create a new subscriber/contact: `POST /subscribers`
- Update an existing subscriber/contact: `PUT /subscribers/:id`
- Delete a contact `DELETE /subscribers/:id`

Please refer to the source code for a complete list of available endpoints and their functionalities.

## Contributing

Contributions are welcomed from the community! If you encounter any issues or have suggestions for improvements, please feel free to open an issue or create a pull request.

Thank you for using our backend with Node.js, Express, and MongoDB for contact management! We hope this implementation of the MVC pattern and RESTful API endpoints serves as a helpful reference for your projects. Happy contact management!
## Screenshots

![App Screenshot](https://github.com/oolaoluwatobi/backend-contact-app-mern/blob/main/public/img/backend%20contacts%20app%202023-07-27%20100218.png)

