import {PortfolioType} from '../../models/portfolio.interface'

type ActionType = {
    type: string,
    portfolio?: PortfolioType[]
}

const emptyPortfolio:PortfolioType[] = [
  {
    "amount": 0,
    "targetPrice": 0,
    "api": {
      "meta": {
        "symbol": "",
        "currency": "",
        "exchange": "",
        "type": ""
      },
      "values": [
        {
          "datetime": "",
          "open": "0",
          "close": "0"
        },
        {
          "datetime": "",
          "open":"0",
          "close": "0"
        }
      ],
      "status": ""
    }
  }
]


const reducer = (state = emptyPortfolio, action:ActionType) =>{  
    switch (action.type){
        case "fetch":
          if(action.portfolio != undefined)
            state = action.portfolio
          return state
        default:
            return state
    }

}

export default reducer;