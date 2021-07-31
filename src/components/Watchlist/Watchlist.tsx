import './Watchlist.css';
import WatchlistRow from "./WatchlistRow";
import { useSelector } from 'react-redux';
import { State } from '../../store/reducers';

  
const Watchlist =() => {
	let numberOfRows = 0;

	
	/* Acceso a la tienda */
	let activeWatchlist = useSelector((state:State) => state.activePortfolio[1])
	let watchlist = useSelector((state:State) => state.portfolio[activeWatchlist])
	
	let name = JSON.parse(sessionStorage.getItem('wallets')!)[activeWatchlist].name

	return (
		<div className='grid grid-rows-8'>
			<div className='WatchlistHeader row-span-1'>
				<div className="item">{name}</div>
				<div className="item text-center">Target</div>
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
  