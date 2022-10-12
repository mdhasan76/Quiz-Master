import React from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'

const Question = ({ faq }) => {
    // console.log(faq)
    const [alertEye, setalertEye] = useState();

    const rightAnswer = () => {
        setalertEye(correctAnswer)
        // toast(correctAnswer)
        alert(correctAnswer)
    };
    const { correctAnswer, question, options, id } = faq;
    const validation = (params) => {
        // console.log('clicked')
        if (params === correctAnswer) {
            alert(correctAnswer);
        }
        else {
            alert('wrong anwser')
        }
    }
    // const rightAnswer = () => {
    //     console.log('eye button clicked')
    // }

    return (
        <div className='my-7 bg-cyan-100 py-4'>
            <div className='text-right px-5'>
                <FontAwesomeIcon icon={faEye} onClick={() => rightAnswer()}></FontAwesomeIcon>
            </div>
            <p className='m-7 text-lg font-medium'> {question.slice(3, -4)}</p>

            {
                options.map(option => <button className=" block w-10/12 mx-auto m-3 rounded p-4 bg-blue-500 text-white font-semibold text-lg hover:bg-blue-800" onClick={() => validation({ option }.option)}>  {option}</button>)
            }

        </div>
    );
};

export default Question;