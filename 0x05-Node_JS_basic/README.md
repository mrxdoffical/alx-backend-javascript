# Node.js Basics

This project contains a series of exercises to learn and practice fundamental concepts of Node.js.

## Learning Objectives

By completing this project, you will be able to explain:

- How to run JavaScript using Node.js
- How to use Node.js modules
- How to use specific Node.js modules to read files
- How to use `process` to access command line arguments and the environment
- How to create a small HTTP server using Node.js
- How to create a small HTTP server using Express.js
- How to create advanced routes with Express.js
- How to use ES6 with Node.js with Babel-node
- How to use Nodemon to develop faster

## Requirements

- Operating System: Ubuntu 18.04 LTS
- Node.js version: 12.x.x
- All files should end with a new line
- A `README.md` file at the root of the project folder is mandatory
- Your code should use the `.js` extension
- Your code will be tested using Jest
- Your code will be verified against lint using ESLint
- Your code needs to pass all tests and lint. You can verify the entire project running `npm run full-test`

## Setup

```bash
# Install Node.js 12.x
curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt-get install -y nodejs

# Check Node.js and npm versions
node -v
npm -v

# Install project dependencies
npm install
```

## Files

### Task 0: Executing basic javascript with Node JS
- `0-console.js`: Contains a function that prints in STDOUT
- `0-main.js`: Test file for the console function

## Testing

```bash
# Run tests
npm test

# Run tests with coverage
npm run test-coverage
```

## Author
- ALX Software Engineering Program
