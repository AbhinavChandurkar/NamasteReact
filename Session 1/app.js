/**
 * Nested 
 */

// const heading = React.createElement(
//     "h1",
//     {id : "parent"},
//     React.createElement(
//         "h1",
//         {id : "child"},
//         React.createElement(
//             "h2",
//             {},
//             "I am h2 tag"
//         )
//     )
// );

//** using array of children */

const content = React.createElement(
    "div",
    {},
    [React.createElement("h1",{},"I am h1 tag"),React.createElement("h2",{},"I am h2 tag")]
)


console.log(content);//returns an object

const root =  ReactDOM.createRoot(document.getElementById("root"));//converts the js obj/react element to html tag 


root.render(content);