import AddStock from '../AddStock';
import './Portfolio.css';
import { useDispatch, useSelector} from "react-redux"
import {State} from "../../store/reducers"
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../store/store';
import { useEffect } from 'react';
import PortfolioRow from './PortfolioRow';
import { emptyPortfolio, emptyTransactions } from '../../models/emptyModels';

  

const Portfolio =() => {
	let numberOfRows = 0

	/* Redux */
	const dispatch = useDispatch()
	const { fetchPortfolio, updateTotalPortfolio, fetchTransactions } = bindActionCreators(actionCreators, dispatch)
	/* Acceso a la tienda */
	let portfolio = useSelector((state:State) => state.portfolio)
	let totalPortfolio = useSelector((state:State) => state.portfolioTotal)
	let transactions = useSelector((state:State) => state.transactions)
	updateTotalPortfolio(portfolio)

	/* Usamos un portfolio vacío mientras se resuelve la request*/
	if(portfolio == undefined)
		portfolio = emptyPortfolio
	

	/* Usamos un historial de transacciones vacío mientras se resuelve la request*/
	if(transactions == undefined)
		transactions = emptyTransactions


	useEffect(() =>{
		fetchPortfolio(0)
		fetchTransactions(0)
	},[])
	

	return (
		<div className='grid grid-rows-8'>
			<div className='PortfolioHeader row-span-1'>
				<div className="item">Ticker</div>
				<div className="item">Asset Type</div>
				<div className="item">Target Price</div>
				<div className="item">MoS</div>
				<div className="item">Av. Price</div>
				<div className="item">Price</div>
				<div className="item">Quantity</div>
				<div className="item">Day +/-</div>
				<div className="item">Total</div>
				<div className="item">Total +/-</div>
				<div className="item">% of Portfolio</div>
				<div className="item"></div>
			</div>
			<div className="PortfolioBody row-span-6">
				
				{portfolio.map((stock) => (<PortfolioRow rowNumber={numberOfRows++} ticker={stock.api.meta.symbol} industry={stock.api.meta.type} targetPrice={stock.targetPrice} price={stock.api.values[0].close} closingPrice={stock.api.values[1].close} quantity={stock.amount} totalPortfolio={totalPortfolio} transactions={transactions.filter(transaction => transaction.asset === stock.api.meta.symbol)}/>))}
				
			</div>
			<div className="PortfolioHeader row-span-1">
				<div className="item">{numberOfRows} Assets</div>
				<div className="item">
					<AddStock />
				</div>
				<div className="item"></div>
				<div className="item"></div>
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
	);
}

export default Portfolio;
