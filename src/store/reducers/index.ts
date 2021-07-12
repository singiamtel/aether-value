import {combineReducers} from "redux"
import portfolioReducer from "./portfolioReducers"
import transactionReducers from "./transactionReducers"
import portfolioTotalReducers from "./portfolioTotalReducers"



const reducers = combineReducers({
    portfolio: portfolioReducer,
    transactions: transactionReducers,
    portfolioTotal: portfolioTotalReducers

})
export default reducers

export type State = ReturnType<typeof reducers>