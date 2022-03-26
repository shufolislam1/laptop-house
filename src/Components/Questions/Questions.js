import React from 'react';

const Questions = () => {
    return (
        <div>
            <h2>Q1:How react works?</h2>
            <p>Ans: React actually work through DOM.Whenever there is any changes occured in any part or in a components, React create a new virtual DOM for the changes and compare it side by side with main DOM.So that the changes could easily found and do change in exact point rather changing the whole thing and that's make the React unique.</p>
            <h2>Q2:How useState works?</h2>
            <p>Ans: useState is a react hook that contains a variable and a function in left side and  the right side, have to pass the initial value to the useState function.The variable returns current state value and the function update the value.</p>
        </div>
    );
};

export default Questions;