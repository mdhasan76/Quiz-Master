import React from 'react';

const Topic = ({ quiz }) => {
    const { logo, name, total } = quiz;
    return (
        <div>
            <div className="bg-gray-300 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">

                <img className="rounded-t-lg" src={logo} alt="" />

                <div className="p-5 bg-white">

                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>

                    <a href="/#" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Start Quiz
                        <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"></path></svg>
                    </a>
                    <h4>Total Question {total}</h4>
                </div>
            </div>
        </div>
    );
};

export default Topic;