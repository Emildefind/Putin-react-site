
import './Quiz.css'
import React from 'react';
import { useState} from 'react';

 var flag = Boolean(false)


export const Quiz = () =>{
    
const [currentQuestion, setCurrentQuestion]= useState(0);
const [score, setScore] = useState(0);
const handleAnswerOptionClick = (isCorrect) =>{
    if ((isCorrect)&&(currentQuestion == questions.length-1)&&(flag == false)){
        setScore(score+1)
        flag = true
    }
    else if ((isCorrect)&&(currentQuestion == questions.length-1)&&(flag == true)){
        setScore(score)
    }
    else
    if (isCorrect){
        setScore(score+1)
    }
    const nextQuestion = currentQuestion +1
    if (nextQuestion  <questions.length){
        setCurrentQuestion(nextQuestion)
    }
}
const questions = [
    {
    questionText: 'Лучшая страна в мире?',
    answerOptions: [
        {answerText: "Германия", isCorrect: false},
        {answerText: "РОССИЯ", isCorrect: true},
        {answerText: "США", isCorrect: false},
        {answerText: "Англия", isCorrect: false}
        ],
    },
    { 
    questionText: 'Президент России?',
    answerOptions: [
        {answerText: "Алексей Hавальный", isCorrect: false},
        {answerText: "Владимер Путин", isCorrect: true},
        {answerText: "Я", isCorrect: false},
        {answerText: "Лукошенко", isCorrect: false}
        ],
    },
    { 
    questionText: 'Столица России?',
    answerOptions: [
        {answerText: "Москва", isCorrect: true},
        {answerText: "Санкт-Петербург", isCorrect: false},
        {answerText: "Уфа", isCorrect: false},
        {answerText: "Омск", isCorrect: false}
        ],
    },
    { 
    questionText: 'Какое политическое устройство России?',
    answerOptions: [
        {answerText: "Диктатура", isCorrect: false},
        {answerText: "Комунизм", isCorrect: false},
        {answerText: "Абсолютная монархия", isCorrect: false},
        {answerText: "Демократия", isCorrect: true}
        ],
    }
]
    return(
        <div>
            <div className='quiz'>
                <div className='question_section'>
                    <div className='question_count'>
                        <span>Вопрос {currentQuestion +1}</span>/{questions.length}
                    </div>
                    <div className='question_text'> {questions[currentQuestion].questionText}</div>
                </div>
                <div className='answer_section'>
                    {questions[currentQuestion].answerOptions.map(
                        item =>(<button className='answer_button' onClick=
                        {() => handleAnswerOptionClick(item.isCorrect)}>
                            {item.answerText}
                        </button>
                    ))}
                    <div className='score_section'>Правильных ответов {score} из {questions.length}</div>
                </div>
            </div>
        </div>
    )
}
