import Dropdown from './Dropdown';
import './Topbar.css';
import {PortfolioType} from '../models/portfolio.interface'

type TopBarProps = {
	portfolio: {
		amount: number; targetPrice: number; api: { meta: { symbol: string; currency: string; exchange: string; type: string; }; values: { datetime: string; open: number; close: number; }[]; status: string; }; 
	  }[]
}

function TopBar({portfolio}:TopBarProps) {
	let prevTotal = 0
	let totalInvested:number = 0

	/* Stores the total value of the Portfolio from today and yesterday */
	let totalPortfolio = 0
	let prevTotalPortfolio = 0
	portfolio.map((stock)=> (
		totalPortfolio += stock.amount * stock.api.values[0].close, 
		prevTotalPortfolio += stock.amount * stock.api.values[1].close)
	)

	/* Day Change */
	let totalDayChange = totalPortfolio - prevTotalPortfolio
	let percentageDayChange = (totalPortfolio/prevTotalPortfolio -1) *100
	alert(percentageDayChange)

	/* Total Change */
	const totalChange = (totalPortfolio - totalInvested)
	const totalChangePercentage = (totalChange/totalInvested)*100

	return (
		<div className='text-white flex text-xs justify-center items-center h-full'>
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
