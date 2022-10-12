import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLoaderData } from 'react-router-dom';
import Question from './Question';

const Quiz = () => {
    const quizData = useLoaderData();
    const { name, questions } = quizData.data;


    //Eye Clicke Show right Answer 
    const rightAnswer = (correctAnswer) => {
        toast.success(`Correct answer is: ${correctAnswer}`,
            { position: toast.POSITION.TOP_CENTER })
    };


    // Validation Right Answer
    const validation = (params, correctAnswer) => {
        // console.log(params)
        if (params === correctAnswer) {
            toast.success('Right Answer!!',
                { position: toast.POSITION.TOP_CENTER });
        }
        else {
            toast.error('wrong anwser',
                { position: toast.POSITION.TOP_CENTER })
        }
    }

    return (
        <div>
            <h2 className='text-center text-4xl font-medium my-4 py-5 bg-cyan-500 text-white'>{name}</h2>

            <div className='max-w-xl mx-auto'>
                {
                    questions.map(question => <Question rightAnswer={rightAnswer} validation={validation} key={question.id} faq={question} />)
                }
            </div>

            <ToastContainer />
        </div>
    );
};

export default Quiz;