import Sidebar from '../Sidebar';
import Topbar from '../Topbar';
import { useState, useEffect, Component, MouseEvent } from 'react';
import Transactions from './Transactions';
import { GetPortfolioContents, GetTransactions } from '../../api/getEndpoints';
import {PortfolioType, TransactionType} from '../../models/portfolio.interface'



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

function TransactionsPage() {
	//Llama a al backend y nos devuelve un portfolio (Según el índice dado)
	//Portfolio necesario para topbar
	const getPortfolio = async (activePortfolio:number, portfolio?:PortfolioType[]) => {
	const token = sessionStorage.getItem("token")!
	const walletName = JSON.parse(sessionStorage.getItem('wallets')!)[activePortfolio].name

	let resWallet = await GetPortfolioContents(token, walletName)
	let resHistory = await GetTransactions(token, walletName)
	
	setPortfolio(resWallet.wallet)
	setTransactions(resHistory.history)
	}


	
//Declaración de variables
const [portfolio,setPortfolio] = useState<PortfolioType[]>(emptyPortfolio)
const [transactions,setTransactions] = useState<TransactionType[]>(emptyTransactions)
const [descending,setDescending] = useState([false, false, false, false, false, false, false, false, false])
const [activePortfolio, setActivePortfolio] = useState(0)
let totalPortfolio = 0


//Para actualizar el componente cuando el backend nos devuelva el portfolio
useEffect(() => {
	getPortfolio(activePortfolio)
}, [activePortfolio])
useEffect(() => {
	portfolio.map((stock) => (totalPortfolio += stock.amount * parseFloat(stock.api.values[0].close)))
}, [portfolio])
	

return (
	<div className="Home">
      {/* Sidebar */}
      <div className="Sidebar">
        <Sidebar activeElement="Transactions" activePortfolio={activePortfolio} setActivePortfolio={setActivePortfolio}/>
      </div>

      <header className="Topbar">
        <Topbar portfolio={portfolio} transactions={transactions} />
      </header>
      {/* Main */}
      <div className="Main p-7">
        <Transactions transactions={transactions} setTransactions={setTransactions} descending={descending} setDescending={setDescending}/>
	  </div>
    </div>
);
}

export default TransactionsPage;
