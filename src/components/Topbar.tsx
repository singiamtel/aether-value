import { RiStockLine } from "react-icons/ri"
import './Topbar.css';

type Sidebar = {
	portfolio:{
		name: string;
		ticker: string;
		industry: string;
		targetPrice: number;
		price: number;
		day: number
		quantity: number;
	}[],
}

function Sidebar({portfolio}:Sidebar) {
	/* Stores the total value of the Portfolio */
	let totalPortfolio = 0
	let totalDayChange = 0
	let prevTotal = 0
	let percentageDayChange = 0
	portfolio.forEach((stock) => (
		totalPortfolio += (stock.price*stock.quantity),
		totalDayChange += (stock.day*stock.quantity)
		))

	prevTotal = totalPortfolio + totalDayChange
	percentageDayChange = (totalDayChange / prevTotal) *100


	totalPortfolio = Math.round(totalPortfolio*100)/100
	totalDayChange = Math.round(totalDayChange*100)/100
	percentageDayChange = Math.round(percentageDayChange*100)/100

	return (
		<div className='text-white flex text-xs justify-center items-center h-full'>
			<div className='flex-initial px-7'>
				Portfolio: 
				<div className="text-xl"> ${totalPortfolio}</div>
			</div>
			<div className='flex-initial px-7'>
				Total:
				<div className="text-xl"> $ 354.91 (24.98%)</div>
			</div>
			<div className='flex-initial px-7'>
				Year:
				<div className="text-xl"> $ +157.01 (+11.53%)</div>
			</div>
			<div className='flex-initial px-7'>
				Day:
				<div className={"text-xl "+ (totalDayChange > 0 ? 'green' : 'red') }> $ {totalDayChange} ({percentageDayChange}%)</div>
			</div>
		</div>
	);
}

export default Sidebar;
