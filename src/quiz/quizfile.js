import React from 'react'
import Quiz from './Quizm'
import "./Quizfile.css"
import { QuizProvider } from './quiz';

function Quizfile() {
  return (
    <div>
        <React.StrictMode>
            <QuizProvider>
            <Quiz/>

            </QuizProvider>
        </React.StrictMode>
    </div>
  )
}

export default Quizfile;