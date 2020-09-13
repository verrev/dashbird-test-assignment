# Dashbird FE test assignment

This is a react application designed to implement the dashboard view test assignment for dashbird.io.

# Usage

Install the latest node and yarn. To start the app, first install the dependancies by executing:
> yarn

then, start the local server
> yarn start

then, point the browser to http://localhost:8080 and enjoy

To build the app for hosting, execute
> yarn build

and copy the files from the **dist** directory to a webserver.

## Dependancies

There are quite a few development dependancies to allow for robust tooling and consistent commits such as prettier and eslint. The build system is written as a custom webpack configuration. I started the app from a boilerplate that I use on all my FE apps as it has served me very well over the years. The dependancies that get shipped are as follows:

    "axios": "^0.20.0", - used to make HTTP requests
    "d3": "^6.1.1", - powerful and industry standard library for manipulating documents based on data
    "immer": "^7.0.8", - used to make reducers a little more succint
    "react": "^16.13.1", - this is a react app
    "react-dom": "^16.13.1", - used for dom manipulations
    "react-intl": "^5.8.0", - used to internationalize apps (in this app there is only one language but in my experience it's always easier to add this in the first place and avoid hardcoding texts into the views)
    "react-intl-redux": "^2.2.0", - bindings between react intl and redux
    "react-redux": "^7.2.1", - bindings between react and redux
    "react-redux-toastr": "^7.6.5", - used to render popups/toasts
    "redux": "^4.0.5" - used to store the global state of the application, it's not strictly necessary in this simpler app but it's here to show how I use it

## Key takeaways

Unfortunately I haven't done much with charts previously so learning about d3 and how I can render the proper charts took a very large chunk of my time which I wanted to use to add more nice features to the app and refactor it in a couple places.

What I did:
* Setup a modern react app with limited dependancies
* Create a custom webpack configuration to handle the needs of the project and not more
* Setup a file/directory structure where everything has its own place and if something new is to be added, its a matter of checking where such files are already placed
* Setup a style system which defines a limited set of colors to avoid problems with too many very similar but slightly different colors are used. This also allows for easier changes if the brands colors were to change. I wanted to also utilize the scss variables in the charts as well but I ended up configuring the charts programmatically instead of in CSS because it was quicker. I also added a function to enforce the 8pt grid such that the developer is reminded not to sway away from multiples of 8.
* Write a simple tech document which you are reading now
* Added a global spinner implementation listening to all requests
* Added a request system to make calls to APIs, I only added the primary chart's data to a 'service' to save time and because it is enough to demonstrate how the system would work if it fetched real data
* Used hooks and arrow function components. I generally use a mix of hooks and classes where classes are preferred for more complex components since hooks can get hard to follow at times

What I didn't have time for 😔:
* Implementing the chart dragging selector, I have an idea of how it should work but unfortunately ran out of time
* Generating nicer datasets that would be more similar to the ones shown in the design
* Adding dynamic time ranges to the chart
* Write tests (although in this case, there was less business logic and more visual work. That being said, tests are possible to generate using something like jest and making reference screenshots after each feature is implemented, then if something is changed later, the tests will alert the developer if something changed in the UI and if it might've been accidental)
* Adding SVG resizing - heights are hardcoded but widths are too and this should ideally be dynamic
* Mobile views

## Conclusion

This was an definitely an interesting project and I will learn more about charts and graphics in js going forwards. Thanks for the challange and have a great everything!
