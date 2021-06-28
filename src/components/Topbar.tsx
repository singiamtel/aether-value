import Dropdown from './Dropdown';
import './Topbar.css';
import {PortfolioType} from '../models/portfolio.interface'

type TopBarProps = {
	totalPortfolio:number
}

function TopBar({totalPortfolio}:TopBarProps) {
	/* Stores the total value of the Portfolio */
	let totalDayChange = 0
	let prevTotal = 0
	let percentageDayChange = 0
	let dayChange = 0
	let totalInvested:number = 0

	prevTotal = totalPortfolio + totalDayChange
	percentageDayChange = (totalDayChange / prevTotal) *100

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
