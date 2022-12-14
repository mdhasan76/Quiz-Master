import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../component/Topic/Topic';

const Topics = () => {
    const quizData = useLoaderData();
    return (
        <div className='px-5 grid gap-5 max-w-7xl mx-auto my-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
            {
                quizData.data.map(data => <Topic quiz={data} key={data.id}></Topic>)
            }
        </div>
    );
};

export default Topics;