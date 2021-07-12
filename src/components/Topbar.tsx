import Dropdown from './Dropdown';
import './Topbar.css';
import { State } from '../store/reducers';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../store/store';



function TopBar() {

	/* =============================================================================== */
	/*		     MANTENEMOS EL PORTFOLIO Y LAS TRANSACCIONES ACTUALIZADAS		       */
	/* =============================================================================== */
	const dispatch = useDispatch()
	const { fetchPortfolio, updateTotalPortfolio, fetchTransactions } = bindActionCreators(actionCreators, dispatch)
	/* Acceso a la tienda */
	let portfolio = useSelector((state:State) => state.portfolio)
	let totalPortfolio = useSelector((state:State) => state.portfolioTotal)
	let transactions = useSelector((state:State) => state.transactions)
	let activePortfolio = useSelector((state:State) => state.activePortfolio)		

	/* Dependen del número de portfolio activo en este momento */
	useEffect(() =>{
		fetchPortfolio(activePortfolio)
		fetchTransactions(activePortfolio)
	},[activePortfolio])

	/* Depende del portfolio activo y del propio portfolio */
	useEffect(() =>{
		updateTotalPortfolio(portfolio)
	},[activePortfolio,portfolio])

	/* =============================================================================== */

	/* Stores the total value of the Portfolio from today and yesterday */
	let prevTotalPortfolio = 0

	/* Conseguimos el valor del portfolio */
	portfolio.map((stock) => ( 
		prevTotalPortfolio += stock.amount * parseFloat(stock.api.values[1].close))
	)

	/* Day Change */
	let totalDayChange = totalPortfolio - prevTotalPortfolio
	let percentageDayChange = (totalPortfolio/prevTotalPortfolio -1) * 100
	let invested = 0

	/* Sacamos el dinero total invertido */
	transactions.map((trans) => (invested += trans.amount*trans.open_price))

	const totalChange = (totalPortfolio - invested)
	const totalChangePercentage = (totalChange/invested)*100

	

	return (
		<div className='text-white flex text-xs justify-center items-center h-full'>
			<div className='flex-initial px-7'>
				{}
			</div>
			<div className='flex-initial px-7'>
				Portfolio: 
				<div className="text-xl"> ${totalPortfolio.toFixed(2)}</div>
			</div>
			<div className='flex-initial px-7'>
				Total:
				<div className={"text-xl "+ (totalChange > 0 ? 'greenTopbar' : 'red') }> $ {totalChange.toFixed(2)} ({totalChangePercentage.toFixed(2)}%)</div>
			</div>
			<div className='flex-initial px-7'>
				Year:
				<div className={"text-xl "+ (157 > 0 ? 'greenTopbar' : 'red') }> $ 0 (+0%)</div>
			</div>
			<div className='flex-initial px-7'>
				Day:
				<div className={"text-xl "+ (totalDayChange > 0 ? 'greenTopbar' : 'red') }> $ {totalDayChange.toFixed(2)} ({percentageDayChange.toFixed(2)}%)</div>
			</div>
			<div className='flex-initial px-7 absolute right-0'>
				<Dropdown/>
			</div>
		</div>
	);
}
export default TopBar;
