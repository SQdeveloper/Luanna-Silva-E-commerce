import React from 'react';
import CardQAA from '../../Components/CardQAA/CardQAA';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import questions from '../../DB/questions';
import './QuestionAndAnswers.css';

const QuestionAndAnswers = () => {    
    return (
        <>
        <Header/>
        <section className='qa'>
            <h1 className='qa-title'>Question and Answers</h1>
            {questions.map(question=>(
                <CardQAA
                    key={question.id}
                    id={question.id}
                    question={question.question}
                    answer={question.answer}
                />    
            ))}
        </section>
        <Footer/>
        </>
    );
};

export default QuestionAndAnswers;