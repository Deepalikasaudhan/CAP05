1. What is React?
Ans.  React is a JavaScript library for building user interfaces. Learn what React is all about on our homepage or in the tutorial.

2. Who made React?
Ans. React was created by Jordan Walke, a software engineer at Facebook. It was first deployed on Facebook's News Feed in 2011 and later on Instagram in 2012.[citation needed] It was open-sourced at JSConf US in May 2013.

3. What is Babel?
Ans. Babel React is a JavaScript compiler that allows developers to write contemporary JavaScript syntax, such as ECMAScript 2015+ (ES6+), and convert it into a backward-compatible version of JavaScript that can operate on earlier browsers. Babel’s goal is to ensure that developers can use the most recent JavaScript features without worrying about compatibility concerns with older browsers.

4. How does Babel convert html code in React into valid code?
Ans. Babel converts HTML code into valid code by using the JSX code and converter. A user can essentially use future JavaScript in the browsers of today thanks to Babel, a very well-known transpiler.

5. What is ReactDOM used for? Write an example?
Ans. ReactDOM is used to render components and elements on the web. It is a part of the React library used to create user interfaces and dynamic web applications, as well as reusable and composable components that can be used in different applications.

6. What are the packages that you need to import for react to work with?
Ans.The packages that must to be imported before using react are react,react-dom,babel,react-scripts, Node.js and npm.

7. How do you add react to a web application?
Ans. we can add react in two ways first is to a new project and second is to an exisiting project both of them involves the following step:

To a new project: a> install create React App globally(if not installed)

npm install -g create-react-app

b>create a new React app

npm create-react-app app-name

c> navigate into your new app's directory

cd app-name

d> start the development server:

npm start

To an existing project:

a>initialize a new npm project(if not already initialized):

npm init -v

b> install React and reactDom

npm install react react-dom

c> create a file with a root domain d> create a javaScript file for your React code: e>Run your application:

8. What is React.createElement?
Ans.eact. createElement Create and return a new React element of the given type. The type argument can be either a tag name string (such as 'div' or 'span' ), a React component type (a class or a function), or a React fragment type.

9. What are the three properties that createElement accept?
Ans.  The  three type you have passed.
props : The props you have passed except for ref and key . 
ref : The ref you have passed. 
key : The key you have passed, coerced to a string.

10. what is the meaning of render and root?
Ans. In React render is the process of create a virutal representaion of the React elements or user interface elements and updating the DOM to reflect these changes.And the Root is the DOM element where the top-level React Components is mounted.

