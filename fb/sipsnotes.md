bcryptjs: used to hash passwords before we store them in our database
body-parser: used to parse incoming request bodies in a middleware
concurrently: allows us to run our backend and frontend concurrently and on different ports
express: sits on top of Node to make the routing, request handling, and responding easier to write
is-empty: global function that will come in handy when we use validator
jsonwebtoken: used for authorization
mongoose: used to interact with MongoDB
passport: used to authenticate requests, which it does through an extensible set of plugins known as strategies
passport-jwt: passport strategy for authenticating with a JSON Web Token (JWT); lets you authenticate endpoints using a JWT
validator: used to validate inputs (e.g. check for valid email format, confirming passwords match)
axios: promise based HTTP client for making requests to our backend
classnames: used for conditional classes in our JSX
jwt-decode: used to decode our jwt so we can get user data from it
react-redux: allows us to use Redux with React
react-router-dom: used for routing purposes
redux: used to manage state between components (can be used with React or any other view library)
redux-thunk: middleware for Redux that allows us to directly access the dispatch method to make asynchronous calls from our actions
