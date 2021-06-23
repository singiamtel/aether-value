import Dropdown from './Dropdown';
import './Topbar.css';

type TopBarProps = {
	portfolio:{
		name: string,
		ticker: string,
		industry: string,
		price: number,
		closingPrice: number,
		targetPrice: number,
		quantity: number,
		transactions: {
			quant: number,
			date: string,
			buyingPrice: number,
		}[];
	}[],
	totalRealizedGains:number
}

function TopBar({portfolio,totalRealizedGains}:TopBarProps) {
	/* Stores the total value of the Portfolio */
	let totalPortfolio = 0
	let totalDayChange = 0
	let prevTotal = 0
	let percentageDayChange = 0
	let dayChange = 0
	let totalInvested:number = 0

  portfolio.forEach((stock) => {
    dayChange = stock.price - stock.closingPrice
    totalPortfolio += (stock.price*stock.quantity)
    totalDayChange += dayChange*stock.quantity
    if(stock.quantity > 0){
      stock.transactions.map((trans) => (totalInvested += trans.quant*trans.buyingPrice))
    }
  })

	prevTotal = totalPortfolio + totalDayChange
	percentageDayChange = (totalDayChange / prevTotal) *100

	totalPortfolio += totalRealizedGains

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
