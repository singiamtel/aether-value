import './Watchlist.css';
import WatchlistRow from "./WatchlistRow";
import {PortfolioType, TransactionType} from '../../models/portfolio.interface'

type WatchlistProps = {
	name:string,
	watchlist: PortfolioType[],

  }
  
  
const Watchlist =({name, watchlist}:WatchlistProps) => {
	let numberOfRows = 0;

	/* Stores the total value of the Portfolio */
	let totalPortfolio = 0
	watchlist.map((stock)=> (totalPortfolio += stock.amount * parseFloat(stock.api.values[0].close)) )

	return (
		<div className='grid grid-rows-8'>
			<div className='WatchlistHeader row-span-1'>
				<div className="item">{name}</div>
				<div className="item text-center">Target Price</div>
				<div className="item">MoS</div>
				<div className="item">Price</div>
				<div className="item">Day +/-</div>
				<div className="item"></div>
			</div>
			<div className="WatchlistBody row-span-6">
				
				{watchlist.map((stock) => (<WatchlistRow rowNumber={numberOfRows++} ticker={stock.api.meta.symbol} targetPrice={stock.targetPrice} price={stock.api.values[0].close} closingPrice={stock.api.values[1].close} />))}
				
			</div>
			<div className="WatchlistHeader row-span-1">
				<div className="item">{numberOfRows} Assets</div>
				<div className="item"></div>
				<div className="item"></div>
				<div className="item"></div>
				<div className="item"></div>
				<div className="item"></div>
				
				
			</div>
		</div>
	);
}

export default Watchlist;
  