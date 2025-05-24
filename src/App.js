// App.js

import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Question from "./Components/Question";
import qBank from "./Components/QuestionBank";
import Score from "./Components/Score";
import "./App.css";

const App = () => {
    const [questionBank] = useState(qBank);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedOption, setSelectedOption] = useState("");
    const [score, setScore] = useState(0);
    const [quizEnd, setQuizEnd] = useState(false);

    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value);
    };

    const checkAnswer = () => {
        if (selectedOption === questionBank[currentQuestion].answer) {
            setScore((prevScore) => prevScore + 1);
        }
    };

    const handleNextQuestion = () => {
        if (currentQuestion + 1 < questionBank.length) {
            setCurrentQuestion((prev) => prev + 1);
            setSelectedOption("");
        } else {
            setQuizEnd(true);
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        checkAnswer();
        handleNextQuestion();
    };

    return (
        <div className="App d-flex flex-column align-items-center justify-content-center">
            <h1 className="app-title">QUIZ APP</h1>
            {!quizEnd ? (
                <Question
                    question={questionBank[currentQuestion]}
                    selectedOption={selectedOption}
                    onOptionChange={handleOptionChange}
                    onSubmit={handleFormSubmit}
                />
            ) : (
                <Score score={score} className="score" />
            )}
        </div>
    );
};

export default App;
