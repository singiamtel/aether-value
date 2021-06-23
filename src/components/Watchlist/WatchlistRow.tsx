import './WatchlistRow.css';

type WatchlistRowProps = {
	rowNumber: number,
	ticker: string,
	targetPrice: number,
	price: number,
}

let MoS:number

function WatchlistRow({rowNumber, ticker, targetPrice, price }:WatchlistRowProps)  {
	MoS = Math.round((targetPrice/price -1)*10000)/100;
	const evenRow = (rowNumber % 2 === 0)

	return (
		<div className={"WatchlistRowContainer "+ (evenRow ? 'even' : 'odd') }>
			<div className="item">{ticker}</div>
			<div className="item">$ {targetPrice}</div>
			<div className="item">{MoS} %</div>
			<div className="item">$ {price}</div>

		</div>
	);
}


export default WatchlistRow;
