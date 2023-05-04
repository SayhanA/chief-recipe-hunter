import React from 'react';
import jsPDF from 'jspdf';
import { FaDove } from 'react-icons/fa';

const Blog = () => {

    const generatePEF = () => {
        var doc = new jsPDF("p", "pt", "a4");
        doc.html(document.querySelector("#container"), {
            callback: function (pdf) {
                pdf.save("mypdf.pdf");
            }
        })
    }

    return (
        <div className='lg:p-20 p-2'>
            <button className='btn btn-warning block ml-auto mt-14' onClick={generatePEF} type='primary'>Generate PDF</button>

            <div id="container" className=' mx-auto max-w-[600px] flex flex-col gap-10'>
                <div className='lg:px-5'>
                    <h3 className='font-bold text-lg'>01. Tell us the differences between uncontrolled and controlled components.</h3>
                    Ans: In React, controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally.
                    Controlled components are those that are directly managed and rendered by the application's code. They are tightly integrated with the application and are responsible for handling user interactions, responding to data changes, and rendering the user interface. In other words, they are fully under the control of the application.
                    Uncontrolled components, on the other hand, are not managed directly by the application's code. Instead, they are typically third-party components or browser-native components that the application consumes as black boxes. They are responsible for handling their own state and rendering their own user interface, and the application simply passes them props or callbacks to interact with them.
                </div>
                <div className='lg:px-5'>
                    <h3 className='font-bold text-lg'>02. How to validate React props using PropTypes.</h3>
                    Ans: In React, a controlled component is a component that is controlled by React state, while an uncontrolled component is a component that maintains its own internal state.
                    A controlled component receives its current value and an update callback via props, and the parent component manages the state of the component. When the user interacts with the component, the parent component updates the state, which in turn updates the component's value.
                    An uncontrolled component, maintains its own internal state, and when the user interacts with the component, it updates its own state, which in turn updates the component's value.
                    First, install the prop-types package by running npm install prop-types in your terminal.
                    Import PropTypes into your component using import PropTypes from 'prop-types'.
                    Declare the propTypes for your component by creating a propTypes object after your component class. The keys of this object should match the name of the props being passed to the component, and the values should be a validation function from PropTypes that matches the expected data type.
                </div>
                <div className='lg:px-5'>
                    <h3 className='font-bold text-lg'>03. Tell us the difference between nodejs and express js.</h3>
                    Ans: This section analyses some various types of apps that can be built using this framework. When hiring, a NodeJS developers resume should have instances of contributing to the development of some of these applications.
                    As a server-side technology for modern web applications, NodeJS works well with single-page applications (SPAs) that are powered by JavaScript on the front end. Server-side rendering allows you to render your templates on the server as opposed to in the browser.
                    Many big companies use NodeJS in building their applications. Some of them are explored below. The range of such companies cuts across various industries including payments, B2B, social networking, entertainment, and so on. If big tech companies can trust NodeJS for building their flagship apps, then one can tell that it performs just well.
                    ExpressJS is a web application framework for NodeJS. That’s what mainly makes the difference between Express JS and Node JS. The former provides various features that make web application development fast and easy, which otherwise takes more time using only the latter. It provides a robust set of features for web and mobile applications.
                    ExpressJS can be used to build real-time services such as chat applications. It supports WebSockets, which allow you to stream data from your server to your client in real-time using persistent connections.
                </div>
                <div className='lg:px-5'>
                    <h3 className='font-bold text-lg'>04. What is a custom hook, and why will you create a custom hook?</h3>
                    Ans: Custom React JS hooks offer reusability as when a custom hook is created, it can be reused easily, which makes the code cleaner and reduces the time to write the code. It also enhances the rendering speed of the code as a custom hook does not need to be rendered again and again while rendering the whole code.
                    Custom hooks are created to solve a specific problem or provide a specific functionality that is not provided by the built-in React hooks. For example, if you have a complex form that needs to handle multiple input fields and validation rules, you can create a custom hook to handle the state management and validation logic, and then reuse that hook across different forms in your application.
                    Here are some reasons why you might want to create a custom hook in your React application:
                    Reusability: By encapsulating complex logic in a custom hook, you can reuse that logic across multiple components in your application, making your code more modular and easier to maintain.
                    Abstraction: Custom hooks can help abstract away implementation details, making it easier to use the functionality they provide without worrying about the underlying implementation.
                    Code organization: Custom hooks can help organize your code by separating concerns and keeping related logic together.
                    Better testing: By encapsulating logic in a custom hook, you can write tests for that hook separately, making it easier to test and debug your code.
                    Performance: Custom hooks can help improve the performance of your application by optimizing the way data is fetched and processed.
                </div>
            </div>
        </div>
    );
};

export default Blog;