import React from 'react';
import { Link } from 'react-router-dom';
const Topic = ({ quiz }) => {
    const { logo, name, total, id } = quiz;
    const startQuiz = (quiz) => {
        // console.log(quiz)
    }
    return (
        <div>
            <div className="bg-blue-100 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">

                <img className="rounded-t-lg" src={logo} alt="" />

                <div className="p-5 bg-white">

                    <h5 className="mb-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>

                    <button className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white duration-500 bg-blue-500 rounded-lg hover:bg-blue-800" onClick={() => startQuiz(quiz)}>
                        <Link to={`/topic/${id}`}>Start Quiz</Link>
                        <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"></path></svg>
                    </button>
                    <h4 className='py-3 text-lg font-medium'>Total Question {total}</h4>
                </div>
            </div>
        </div>
    );
};

export default Topic;