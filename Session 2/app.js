import React from "react";
import ReactDOM from "react-dom/client";

//* React Element

/**
 * jsx is not html in js , its html or xml  like syntax
 * jsx transpiled before it reaches js engine
 * transpiled done using parcel which give it to babel
 *  ? jsx => babel transpile it to React.createElement => ReactElement-js object => HTMLElement(render)
 * */

// const jsxHeading = (
//   <h1 id="heading" className="head">
//     Hello from react
//   </h1>
// );

//other way to write jsx
// const temp = (
//   <h1 id="heading" className="head">
//     Hello from react
//   </h1>
// );

//console.log(jsxHeading);

//* React Compoenet

/**
 *  class Based Component = OLD
 *  Functional Based component = NEW
 *  */

//React function compoent

const HeadingCompoenent = () => {
  return <h1>Namste react Funtional Heading compoenent</h1>;
};

//Diffrent way of writting react function compoenent
const HeadingComponent2 = () => (
  <div class="container">
    //!below is the example of (COMPOENET COMPOSTION)
    <HeadingCompoenent /> //*this way we can use the the function component in
    other fucntion
    <h1>Namste react Funtional compoenent</h1>
  </div>
);

const pi = 3.14;

//Heading componenent is an example of componenet compostion
const HeadingComponent3 = () => (
  <div class="container">
    {pi}

    <HeadingCompoenent />
    <HeadingCompoenent />
    {HeadingCompoenent()}
    <HeadingCompoenent></HeadingCompoenent>

    <h1>Namste react Funtional compoenent</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent3 />);
