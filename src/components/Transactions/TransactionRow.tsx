import './TransactionRow.css';


type TransactionRowProps = {
	rowNumber: number,
	ticker: string,
	buyingPrice: number,
	quantity: number,
	date:string,
}

function TransactionRow({rowNumber, ticker, buyingPrice, quantity, date}:TransactionRowProps)  {
	const evenRow = (rowNumber % 2 === 0)

	/* We maintain this for BTC */
	quantity = Math.round(quantity*100000000)/100000000
	const totalTransaction = quantity*buyingPrice

	return (
		<div className={"TransactionRowContainer "+ (evenRow ? 'even' : 'odd') }>
			<div className="item border-r">NOMBRE</div>	
			<div className="item border-r">{ticker}</div>	
			<div className="item border-r">MARKET</div>
			<div className="item border-r">{quantity >= 0 ? "Buy" : "Sell"}</div>
			<div className="item">$ {buyingPrice.toFixed(2)} </div>
			<div className="item">{quantity}</div>
			<div className="item border-r">$ {totalTransaction.toFixed(2)}</div>	
			<div className="item border-r">$ 0.00</div>	
			<div className="item">{date.substring(0,10)} </div>		
		</div>
	);
}
export default TransactionRow;
