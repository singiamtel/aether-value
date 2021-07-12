import { PortfolioType, TransactionType } from '../../models/portfolio.interface'
import { Dispatch } from "redux"
import { GetPortfolioContents, GetTransactions } from '../../api/getEndpoints'


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

const emptyTransactions: TransactionType[] = [
  {
    "id": 0,
    "asset": "",
    "amount": 0,
    "open_price": 0,
    "date": ""
  }
]

/* PORTFOLIO ACTIONS */
export const fetchPortfolio = (activePortfolio:number) => async (dispatch:Dispatch) => {
  const token = sessionStorage.getItem("token")!
  const walletName = JSON.parse(sessionStorage.getItem('wallets')!)[activePortfolio].name
  let resWallet = (await GetPortfolioContents(token, walletName)).wallet

  return dispatch({
  type: "fetch",
  portfolio: resWallet
  })
}

/* PORTFOLIO TOTAL ACTIONS */

export const updateTotalPortfolio = (portfolio:PortfolioType[]) => {
  let totalPortfolio = 0
  portfolio.map((stock) => (totalPortfolio += (stock.amount * parseFloat(stock.api.values[0].close))))
  return  {
    type: "update",
    amount: totalPortfolio
  }
}

/* TRANSACTION ACTIONS */

export const updateTransactions = (transactions:TransactionType[]) =>  (dispatch:Dispatch) => {
  return dispatch({
    type: "update",
    transactions: transactions
  })
}

export const fetchTransactions = (activePortfolio:number) => async (dispatch:Dispatch) => {
  const token = sessionStorage.getItem("token")!
  const walletName = JSON.parse(sessionStorage.getItem('wallets')!)[activePortfolio].name
  let resHistory = (await GetTransactions(token, walletName)).history

  return dispatch({
  type: "fetch",
  transactions: resHistory
  })
}