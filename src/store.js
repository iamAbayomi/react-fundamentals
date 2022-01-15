import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from "./reducer";
import { 
    sayHiOnDispatch,
    includeMeaningOfLife    
} from "./exampleAddons/enhancers";
import { print1, print2, print3 } from "./exampleAddons/middleware";

const middlewareEnhancer = applyMiddleware(print1, print2, print3)

// Pass enchancer as the second arg, since there's no preloadedState
const store = createStore(rootReducer, middlewareEnhancer)


// This example show us how to use enhancers in create store
// const composedEnhancer = compose(sayHiOnDispatch, includeMeaningOfLife)
// const store = createStore(rootReducer, undefined, composedEnhancer)


export default store