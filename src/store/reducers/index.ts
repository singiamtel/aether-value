import {combineReducers} from "redux"
import portfolioReducer from "./portfolioReducers"
import transactionReducers from "./transactionReducers"
import portfolioTotalReducers from "./portfolioTotalReducers"
import activePortfolioReducers from "./activePortfolioReducers"
import settingsReducers from "./settingsReducers"


const reducers = combineReducers({
    portfolio: portfolioReducer,
    transactions: transactionReducers,
    portfolioTotal: portfolioTotalReducers,
    activePortfolio: activePortfolioReducers,
    settings: settingsReducers
})
export default reducers

export type State = ReturnType<typeof reducers>