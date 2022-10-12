import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'

// toast.configure()

const Question = ({ faq, rightAnswer, validation }) => {

    const { correctAnswer, question, options } = faq;

    return (
        <div className='my-7 bg-cyan-100 py-4'>
            <div className='text-right px-5'>
                <FontAwesomeIcon icon={faEye} onClick={() => rightAnswer(correctAnswer)}></FontAwesomeIcon>
            </div>
            <p className='m-7 text-lg font-medium'> {question.slice(3, -4)}</p>

            {
                options.map(option => <button className=" block w-10/12 mx-auto m-3 rounded p-4 bg-blue-500 text-white font-semibold text-lg hover:bg-blue-800" onClick={() => validation({ option }.option, correctAnswer)}>  {option}</button>)
            }
        </div>
    );
};

export default Question;