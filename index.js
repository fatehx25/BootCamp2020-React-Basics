//Importing the two important libraries entitled as React and ReactDOM
import React from 'react';
import ReactDOM from 'react-dom';

//This is a plain JS function, Hi. What makes this function a React component is
//the fact that this function can return something which React can render.
function Hi() {
    return <div>Hello World!</div>; //This <div> statement is a JSX syntax. 
} //React basically calls this function, extracts the JSX, and renders its HTML
  //equivalent to the DOM. 

ReactDOM.render(<Hi/>, document.querySelector('#root')); //The way we are calling
//Hi function shows that we are not calling the function. Instead, we are passing
//Hi function into React.createElement() by which we are asking React to call the 
//component function. The line 12 is basically converted back into pure JS syntax
//and Babel converts line 12 into pure JS syntax: React.createElement(Hi).  