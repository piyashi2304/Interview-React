***Day1

Q1.What is SPA
Ans- A Single Page Application is a type of web application or website that interacts with the user by dynamically rewriting the current web page, rather than loading entire new pages from the server. SPAs use technologies like JavaScript to create a more fluid and responsive user experience.
Advantage-SPAs provide a smoother and more fluid user experience because they load a single HTML page and then dynamically update content as users interact with the application. This eliminates the need for full-page reloads, resulting in faster response times and a more app-like feel.




Q2.What is Virtual DOM ?
what is DOM?
Ans-DOM stands for document object model. Normally when a user requested a web page ,the browser receives the HTML document for that page from the server.The browser then build a logical tree like structure from the HTML to show the user requested page in the clint.

Problem of DOM?
Ans-DOM manupulation is the heart of the modern,interective web.Unfortynately it is much slower than othe Javascript operation.

Virtual DOM
Ans-
a.React contains lighter representation of real DOM on the memory called virtual dom
b.DOM get created when any react component get loaded on the screen for the first time.
c.when the user maks any changes like button click this will not godirectly to the real dom.
d.so we are haviny two virtual Dom .one VDOM is created at the time of mounting react component so it is simmiler to real dom.
e.another VDOM is created which contains the new changes and update the state variables.
f.now these two virtual dom compared each other and will check new changes ,this procedure is known as diffing algoritham.
g.now the changes update on the real dom and this procedure is known as Reconcilation.


Q3.What is difference between class and functional component
Ans-Function-Based Components	Class-Based Components
Functional components is a plain JavaScript, you do not have a choice to set the state in functional component.	Class components we have a feature to set the set state in component
There is no render function we are using in functional components.	In class components, we have a render function which is use to return the react elements.
Function components only accept the props as an arguments.	In class componsnts, we have a render function which is use to return the react elements.
Functional components are somethimes called stateless components.	Class components are sometimes called stateful components

Q4.Difference between Props and state?




Q5.What is package.json
Ans-package.json is a file used in JavaScript-based projects, particularly those developed with Node.js, to manage project dependencies, metadata, and configuration. It's an essential part of the Node.js ecosystem and plays a crucial role in building, testing, and deploying JavaScript applications



Q6.What is JSX and why do we use it instead of js?
Ans-JSX, which stands for JavaScript XML, is an extension or syntax extension for JavaScript. It is primarily associated with React, a popular JavaScript library for building user interfaces. JSX allows  to write HTML-like code within  JavaScript code, making it easier to define the structure and layout of components in application.
Here's why JSX is used in React and why it is preferred over writing raw JavaScript for defining user interfaces:
1.Declarative UI : JSX allows to declare what the UI should look like and React takes care of updating the actual DOM to match the declared structure. This makes code more readable and maintainable.
2.Component-Based Development : UI components as functions or classes that return JSX, making it easy to create, reuse, and compose complex user interfaces.
3.Readability : JSX code closely resembles HTML, which is familiar to most web developers. This familiarity enhances the readability and understandability of the code, especially for those transitioning from traditional web development.
4.Efficiency : Writing JSX is generally more efficient and less error-prone than manually creating and manipulating DOM elements with JavaScript. It minimizes the risk of introducing bugs related to missing or mismatched HTML elements.


Q7.What is the Difference between react and react native? Which one is library or framework?
Ans-
* Difference between framework and library?



 	
Q8.Difference b/w Stateful and stateless Component ?
Ans - a.Stateful components, also known as class components, have the ability to manage and hold component-level state. They can use the this.state object to store and manage data that can change over time.
b.Stateful components can define and use lifecycle methods such as componentDidMount, componentDidUpdate, and componentWillUnmount to perform actions at specific points in the component's lifecycle.
c. Stateful components use a render method to define what the component should render. This method is called whenever the component's state or props change.
d.Stateful components are defined as JavaScript classes that extend the React.Component class.

a.stateless components, also known as functional components, do not manage or hold their own state. They rely on the props passed to them for data and behavior.
b.Stateless components do not define lifecycle methods. They are focused on rendering UI based on the provided props.
c.Stateless components are defined as JavaScript functions that return JSX based on the input props. They do not have a render method.


Q9.What do you know about NPM?







 