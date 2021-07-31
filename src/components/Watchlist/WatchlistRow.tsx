import './WatchlistRow.css';
import {FaTimes} from 'react-icons/fa'

type WatchlistRowProps = {
	rowNumber: number,
	ticker: string,
	targetPrice: number,
	price: string,
	closingPrice: string,
}

let MoS:number

function WatchlistRow({rowNumber, ticker, targetPrice, price, closingPrice }:WatchlistRowProps)  {
	const parsedPrice = parseFloat(price)
	const evenRow = (rowNumber % 2 === 0)

	const dayChange = parseFloat(price) - parseFloat(closingPrice)
	const dayChangePercentage = (dayChange / parseFloat(closingPrice)) *100

	MoS = Math.round((targetPrice/parseFloat(price) -1)*10000)/100;

	return (
		<div className={"WatchlistRowContainer "+ (evenRow ? 'even' : 'odd') }>
			<div className="item border-r ">{ticker}</div>
			<div className="item">$ {targetPrice}</div>
			<div className={"item border-r "+ (MoS > 5 ? 'green' : 'orange') }>{MoS} %</div>
			<div className="item">$ {parsedPrice.toFixed(2)}</div>
			<div className={"item border-r "+ (dayChange > 0 ? 'green' : 'red') }><b>{dayChangePercentage.toFixed(2)}% </b></div>
			<div className="item"><FaTimes style={{cursor: 'pointer'}} /></div>	
		</div>
	);
}


export default WatchlistRow;
