import Sidebar from '../Sidebar';
import Topbar from '../Topbar';
import './Transactions.css';
import { useState, useEffect, Component, MouseEvent } from 'react';
import TransactionRow from './TransactionRow';
import { GetPortfolioContents, GetTransactions } from '../../api/getEndpoints';
import {PortfolioType, TransactionType} from '../../models/portfolio.interface'
import {VscTriangleDown} from 'react-icons/vsc'


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

function Transactions() {
	//Llama a al backend y nos devuelve un portfolio (Según el índice dado)
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
let totalPortfolio = 0
let activePortfolio = 0

//Para actualizar el componente cuando el backend nos devuelva el portfolio
useEffect(() => {
	getPortfolio(activePortfolio)
}, [])
useEffect(() => {
	portfolio.map((stock) => (totalPortfolio += stock.amount * parseFloat(stock.api.values[0].close)))
}, [portfolio])
	

let numberOfRows = 0

return (
	<div className="Home">
		{/* Sidebar */}
		<div className="Sidebar">
			<Sidebar activeElement="Transactions"/>
		</div>

		<div className="Topbar">
			<Topbar portfolio={portfolio} transactions={transactions}/>
		</div>
		{/* Main */}
		<div className="Main p-7">
			{/* Portfolio Container */}
			<div className='grid grid-rows-8'>
				<div className='TransactionHeader row-span-1'>
					<div className="item w-full">Name
						<button onClick={() => (setTransactions(transactions.sort( (a,b)=> (a.asset <= b.asset ? -1 : 1) )))} >
							<VscTriangleDown className="-right-10 relative" style={{cursor: 'pointer'}} />
						</button>
					</div>
					<div className="item">Ticker
						<button onClick={() => (setTransactions(transactions.reverse()))} >
							<VscTriangleDown className="-right-10 relative" style={{cursor: 'pointer'}} />
						</button>
					</div>
					<div className="item">Market</div>
					<div className="item">Type</div>
					<div className="item">Price</div>
					<div className="item">Quantity</div>
					<div className="item">Transaction Total</div>
					<div className="item">Comision</div>
					<div className="item">Date</div>
					
					
				</div>
				<div className="TransactionBody row-span-6">
					{transactions.map((trans) => (<TransactionRow rowNumber={numberOfRows++} ticker={trans.asset} buyingPrice={trans.open_price} quantity={trans.amount} date={trans.date} />))}
					
				</div>
				<div className="TransactionHeader row-span-1">
					<div className="item">{numberOfRows} Transactions</div>
					<div className="item"></div>
					<div className="item"></div>
					<div className="item"></div>
					<div className="item"></div>
					<div className="item"></div>
					<div className="item"></div>
					<div className="item"></div>
					<div className="item"></div>
				</div>

			</div>
			

		</div>
		
	</div>
);
}

export default Transactions;
