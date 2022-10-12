import React from 'react';
import { useLoaderData } from 'react-router';
import { BarChart, Tooltip, XAxis, YAxis, Bar, Legend, ResponsiveContainer } from 'recharts';

const Statistics = () => {
    const quizData = useLoaderData();
    console.log(quizData)
    const quiz = quizData.data;
    return (
        <div className=' max-w-3xl mx-auto mt-20'>
            <ResponsiveContainer height={400}>

                <BarChart data={quiz}>
                    <XAxis dataKey='name' />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey='total' barSize={40} fill={'#18dcff'} />
                </BarChart>
            </ResponsiveContainer>


        </div>

    );
};

export default Statistics;