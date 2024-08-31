
# Quiz App

## Project Overview

This project is a simple Quiz App built with React that allows users to answer questions within a set time limit. The app features a dynamic interface with several states, including loading, active gameplay, error handling, and finishing the quiz. The app maintains a high score and provides feedback on performance.

<img width="1294" alt="1" src="https://github.com/user-attachments/assets/694ee8f8-6640-4df6-accc-85b37f57a0a0">
<img width="1219" alt="2" src="https://github.com/user-attachments/assets/61a688cb-250e-43ef-bd7b-685cf2768b37">
<img width="1299" alt="3" src="https://github.com/user-attachments/assets/6e519683-cbf6-48c5-a359-7037fdac9d41">
<img width="1374" alt="4" src="https://github.com/user-attachments/assets/3d2248b1-9af8-43c6-89d3-23d78783991a">


## Features

- **Loading State**: Displays a loader while fetching questions from an external API.
- **Error Handling**: Displays an error message if there is an issue fetching the questions.
- **Start Screen**: Allows the user to start the quiz.
- **Active Gameplay**: Displays questions, tracks answers, and manages the quiz timer.
- **Progress Tracker**: Shows the user's progress through the quiz.
- **Timer**: Counts down the time remaining for the quiz.
- **Next Question**: Allows the user to move to the next question.
- **Finish Screen**: Displays the user's score, high score, and allows the user to restart the quiz.

## State Management

State management is handled using the `useReducer` hook in React. The `reducer` function manages various actions such as:

- **dataReceived**: Updates the state when questions are successfully fetched.
- **dataFailed**: Updates the state if there is a failure in fetching data.
- **start**: Starts the quiz and initializes the timer.
- **newAnswer**: Updates the points based on the correctness of the user's answer.
- **nextQuestion**: Moves to the next question.
- **finish**: Ends the quiz and updates the high score.
- **restart**: Restarts the quiz.
- **tick**: Decreases the timer and finishes the quiz when time runs out.

## Components

- **Header**: Displays the header of the app.
- **Main**: Wraps the main content of the app.
- **Loader**: Displays a loading animation while data is being fetched.
- **Error**: Displays an error message if data fetching fails.
- **StartScreen**: Initial screen that prompts the user to start the quiz.
- **Questions**: Displays the current question and possible answers.
- **NextButton**: Button to move to the next question.
- **Progress**: Displays the user's progress through the quiz.
- **FinishScreen**: Displays the final score, high score, and a button to restart the quiz.
- **Footer**: Contains the Timer and NextButton components.
- **Timer**: Counts down the time remaining in the quiz.

## How to Run

1. **Clone the Repository**
    ```
    git clone https://github.com/your-username/quiz-app.git
    ```
   
2. **Navigate to the Project Directory**
    ```
    cd quiz-app
    ```

3. **Install Dependencies**
    ```
    npm install
    ```

4. **Start the Development Server**
    ```
    npm start
    ```
    The app will be available at `http://localhost:3000`.

## API Endpoint

The questions are fetched from an API endpoint:
```
http://localhost:9000/questions
```
Ensure that your backend server is running and serving the questions from this endpoint.

## Customization

You can customize the questions by modifying the data served by the backend. Each question should include:
- The question text
- Possible answers
- The correct answer
- Points for the question

