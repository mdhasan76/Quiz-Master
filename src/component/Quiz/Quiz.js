import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from './Question';

const Quiz = () => {
    const quizData = useLoaderData();
    const { logo, name, questions } = quizData.data;
    return (
        <div>
            <h2 className='text-center text-4xl font-medium'>{name}</h2>
            <div className='max-w-xl mx-auto'>
                {
                    questions.map(question => <Question key={question.id} faq={question} />)
                }
            </div>
        </div>
    );
};

export default Quiz;