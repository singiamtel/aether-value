import { PortfolioType, TransactionType } from '../../models/portfolio.interface'
import { Dispatch } from "redux"
import { GetPortfolioContents, GetTransactions } from '../../api/getEndpoints'

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

/* ACTIVE PORTFOLIO */

export const updateActivePortfolio = (activePortfolio:number) => {
  return  {
    type: "update",
    activePortfolio: activePortfolio
  }
}
