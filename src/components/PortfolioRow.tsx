import './PortfolioRow.css';
type PortfolioRow = {
	stock: string,
	ticker: string,
	market: string,
	price: number,
	quantity: number
}
function PortfolioRow({stock, ticker, market, price, quantity}:PortfolioRow)  {
	const total = price * quantity;

	return (
		<div className='PortfolioRowContainer'>
			<div className="item">{stock}</div>
			<div className="item">{ticker}</div>
			<div className="item">{market}</div>
			<div className="item">{price}</div>
			<div className="item">{quantity}</div>
			<div className="item">{total}</div>
		</div>
	);
}



export default PortfolioRow;
