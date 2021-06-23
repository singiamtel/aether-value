import './Watchlist.css';
import WatchlistRow from "./WatchlistRow";


/* Lista de Stocks [A reemplazar] */
const stockList = [
	{
		ticker: "DRM.TO",
		targetPrice: 32,
		price: 20.64,
	},
	{
		ticker: "BAM",
		targetPrice: 77,
		price: 50,
	},
	{
		ticker: "SAND",
		targetPrice: 13,
		price: 8.4,
	},
	{
		ticker: "BABA",
		targetPrice: 355,
		price: 217.04,
	},
	{
		ticker: "EBAY",
		targetPrice: 77,
		price: 64.07,
	},
	{
		ticker: "FB",
		targetPrice: 409,
		price: 326.04,
	},
	{
		ticker: "BTC",
		targetPrice: 500000,
		price: 38794.50,
	},
	
]

type WatchlistProps = {
	name: string,
}

let numberOfRows:number = 0

function Watchlist({name}:WatchlistProps) {
	numberOfRows = 0;
	return (
		<div className='grid grid-rows-10 h-full'>

			
			<div className='WatchlistHeader row-span-1'>
				<div className="item">Ticker</div>
				<div className="item">Target ($)</div>
				<div className="item">MoS</div>
				<div className="item">Price ($)</div>
			</div>
			<div className="WatchlistBody row-span-1">
				{stockList.map((stock, stockidx) => (<WatchlistRow key={stockidx} rowNumber={numberOfRows++} ticker={stock.ticker} targetPrice={stock.targetPrice} price={stock.price}/>))}
			</div>
			<div className="WatchlistHeader row-span-1">
				<div className="item">{numberOfRows} Assets</div>
				<div className="item"></div>
				<div className="item"></div>
				<div className="item"><i>{name}</i></div>
			</div>
		</div>
	);
}

export default Watchlist;
