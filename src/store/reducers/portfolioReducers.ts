import { emptyPortfolio } from '../../models/emptyModels'
import { PortfolioType } from '../../models/portfolio.interface'

type ActionType = {
    type: string,
    portfolio?: PortfolioType[],
    index: number
}
/* Asumimos máximos de 10 portfolio */
const initState = [emptyPortfolio,emptyPortfolio,emptyPortfolio,emptyPortfolio,emptyPortfolio,emptyPortfolio,emptyPortfolio,emptyPortfolio,emptyPortfolio,emptyPortfolio]

const reducer = (state = initState, action:ActionType) =>{  

    switch (action.type){
        case "fetch":
          if(action.portfolio!= undefined)
            state[action.index] = action.portfolio
          return state
        default:
            return state
    }

}
export default reducer;