import './PortfolioRow.css';

type PortfolioRow = {
	rowNumber: number,
	stock: string,
	ticker: string,
	industry: string,
	targetPrice: number,
	price: number,
	quantity: number,
	totalPortfolio: number
}

var total:number
var MoS:number

function PortfolioRow({rowNumber, stock, ticker, industry, targetPrice, price, quantity, totalPortfolio}:PortfolioRow)  {
	total = Math.round(price * quantity *100)/100;
	MoS = Math.round((targetPrice/price -1)*10000)/100;
	const percentageOfPortfolio = Math.round((total / totalPortfolio) *10000)/100;
	const evenRow = (rowNumber % 2 === 0)

	return (
		<div className={"PortfolioRowContainer "+ (evenRow ? 'even' : 'odd') }>
			<div className="item">{stock}</div>
			<div className="item">{ticker}</div>
			<div className="item">{industry}</div>
			<div className="item">$ {targetPrice}</div>
			<div className="item">{MoS} %</div>
			<div className="item">$ {price}</div>
			<div className="item">{quantity}</div>
			<div className="item">$ {total}</div>
			<div className="item">{percentageOfPortfolio}%</div>
		</div>
	);
}

export default PortfolioRow;
