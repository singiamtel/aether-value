import Dropdown from './Dropdown';
import './Topbar.css';
import {PortfolioType, TransactionType} from '../models/portfolio.interface'

type TopBarProps = {
	portfolio:PortfolioType[]
	transactions: TransactionType[]
}

function TopBar({portfolio, transactions}:TopBarProps) {

	/* Stores the total value of the Portfolio from today and yesterday */
	let totalPortfolio = 0
	let prevTotalPortfolio = 0
	
	portfolio.map((stock)=> (
		totalPortfolio += stock.amount * parseFloat(stock.api.values[0].close), 
		prevTotalPortfolio += stock.amount * parseFloat(stock.api.values[1].close))
	)

	/* Day Change */
	let totalDayChange = totalPortfolio - prevTotalPortfolio
	let percentageDayChange = (totalPortfolio/prevTotalPortfolio -1) *100


	/* Total Change */
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
