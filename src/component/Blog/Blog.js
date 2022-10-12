import React from 'react';

const Blog = () => {
    return (
        <section>
            <div className='bg-teal-600 py-14 m-2 rounded-lg'>
                <h2 className='text-8xl font-extrabold px-4 opacity-70 md:pl-[100px] lg:pl-[100px]'>FAQ</h2>
            </div>

            <div className='max-w-xl mx-auto px-3'>
                <div className='mt-3'>
                    <h1 className='text-3xl font-semibold py-2'>1. What is the purpose of React Router?</h1>
                    <p className='opacity-80 text-justify text-lg leading-8'>
                        React router is a Standerd library for routing in React. we can easily route one from another page using react router. it has more powerfull component . Link is of them .Client side routing allows your app to update the URL from a link click without making another request for another document from the server. Instead, your app can immediately render some new UI and make data requests with fetch to update the page with new information.This enables faster user experiences because the browser doesn't need to request an entirely new document or re-evaluate CSS and JavaScript assets for the next page. It also enables more dynamic user experiences with things like animation.
                    </p>
                </div>
                <div className='my-4'>
                    <h1 className='text-3xl font-semibold py-3'>2. How does work Context API?</h1>
                    <p className='opacity-80 text-justify text-lg leading-8'>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux
                    </p>
                </div>
                <div className='mb-3'>
                    <h1 className='text-3xl font-semibold py-3'>3.Why we use useRef Hook?</h1>
                    <p className='opacity-80 text-justify text-lg leading-8'>The useRef is a hook that allows to directly create a reference to the DOM element in the functional component. The useRef Hook allows us to persist values between renders.It can be used to store a mutable value that does not cause a re-render when updated.It can be used to access a DOM element directly.
                    </p>
                </div>
            </div>

        </section>
    );
};

export default Blog;