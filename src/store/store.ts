import { createStore, applyMiddleware } from "redux"
import reducers from "./reducers/index"
import thunk from "redux-thunk"

export * as actionCreators from "./action-creators/index"


export const store = createStore(
    reducers, 
    applyMiddleware(thunk)
)

