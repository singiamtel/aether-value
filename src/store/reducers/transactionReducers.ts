import {TransactionType} from '../../models/portfolio.interface'

type ActionType = {
    type: string,
    transactions?: TransactionType[],
}

/* Empty Transactions*/
const emptyTransactions: TransactionType[] = [
  {
    "id": 0,
    "asset": "",
    "amount": 0,
    "open_price": 0,
    "date": ""
  }
]

  
const reducer = (state = emptyTransactions, action:ActionType) =>{    
    switch (action.type){
        case "update":
          if(action.transactions != undefined)
            state = action.transactions
          return state
        case "fetch":
          if(action.transactions != undefined)
            state = action.transactions
          return state
        default:
            return state
    }
} 
export default reducer;