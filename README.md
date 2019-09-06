# Rule of Thumb - Zemoga UI Test

This project was built with React (as our frontend framework) and NodeJS with mongoDB (as our backend).

## Technologies

- JS and Web api (es6 +)
- React (Version 16.9)
- NodeJS (Version 10.16)

## Branches

The projects is divided in 3 branches:

- **layout**: Branch with the HTML and CSS structure for the project.
- **interactive:** Branch that contains the interactive of the project (First with VanillaJS and then with React and NodeJS).
- **master:** Branch that contains the entire project.

**Note:** To run this project is mandatory to have installed git, nodeJS and mongoDB.

## Getting Started

### React - NodeJS

1. Clone the repository

        git clone https://github.com/lhernandezd/rule-thumb.git

2. Enter the project route

        cd rule-thumb

3. Install all the dependencies

        npm install

4. Create and .env file in the root of the project, using as a base the file .env.example
5. Run the NodeJS server

        npm run server

6. Fill the database with initial data (candidates)

        npm run toDatabase

7. Run the Frontend

        npm run dev

### Vanilla JS

The project is also made with VanillaJS.

To check the VanillaJS last commit enter:

    git checkout d05b603
