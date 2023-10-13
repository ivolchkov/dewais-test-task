# Word Count Service Test Task

This project involves creating an AWS Lambda service function and a React application to calculate the number of different types of words within provided text. The Lambda service function identifies and counts various word types, and the React application facilitates user interaction.

## Prerequisites
- Node.js and npm installed.
- Serverless Framework: `npm install -g serverless`.
- AWS account with CLI configured.
- React project created.

## Run project
1. Go to `backend` folder and run `npx serverless offline start --stage=local --region=localhost`
2. Go to `frontend` folder and run `react-scripts start`
3. Open browser and open `http://localhost:3000`