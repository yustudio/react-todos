# React Todo Application
## Steps to run todo app
* `npm install`
* `webpack`
* `webpack-dev-server`

## Reference:
* https://www.youtube.com/watch?v=IR6smI_YJDE
Note: there are two places in the video that store state attributes at subcomponent level and not at the root level. The recommended practice is to store all state attributes at root level. I've made this change in my code.

## Other references:
* https://facebook.github.io/react/docs/thinking-in-react.html  
"Thinking in React" facebook react official tutorial article.
This is a great starting point to help someone coming from Angular to adept to React way of divide and conque problem. 
* https://www.youtube.com/watch?v=MhkGQAoc7bc&list=PLoYCgNOIyGABj2GQSlDRjgvXtqfDxKm5b  
Comprehensive tutorial on React.

## My Understanding of React(as of December 22, 2016)
* React is a javascript framework that use the concept of "virtual DOM" to "summarize/concentrate/abstract" all the information to generate a html view into an object called "state". By compartmenting the webpage into different element, which is called "component" in react, the view rendering job, which is the most tedious work to interact with DOM, is done and hide by react framework. 
* Designer just need to spend time to abstract the webpage into components, leveraging concept of modular programing in javascript(means each module can be used anywhere and reused). That being said, the big difference I have learned react from angular, is angular use ng-model as two-way binding data and view, but react slice/seperate these two ways and give user the options/duty to take care of them seperately. 
* There are two concept in react are very important: props and state. The way react is you have top module and inside top module, usually you have level 2 module, and inside them you have lever 3, level 4 module, ideally, maybe, it is to have each bottom level module only incharge of one particually view, and it can be reusable. Usually, these end level module need an "input" through interface from top/parent to be able to render the correct view. props, is the interface, and it is "input" only interface. State, on the other hand, has more intelligence, usually reside in top level only, has all the information/variable that can regenerate the whole web page. Functions that can change the state(nothing but a bunch of object), are in top module, as well. and these functions are passed to lower/children module as props, so that children can call the function reside in the top level module to change the state, and whenever state changes( with setState), react re-render the view automatically. The beauty is react only re-render the views that related to the changed state, and don't have to re-load the whole DOM everytime anything changes. 
* each component can only have one render function, which return the jsx syntax. 
* each React component must have constructor function; pure function(don't have state) don't have constructor function. Constructor function has to have super() on the first line to initialize the this.state, or super(props) if need to use this.props in the constructor. 
