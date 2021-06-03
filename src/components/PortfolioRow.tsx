import './PortfolioRow.css';

type PortfolioRow = {
	stock: string,
	ticker: string,
	industry: string,
	targetPrice: number,
	price: number,
	quantity: number,
	totalPortfolio: number
}

var total:number
var MoS30:number

function PortfolioRow({stock, ticker, industry, targetPrice, price, quantity, totalPortfolio}:PortfolioRow)  {
	total = Math.round(price * quantity *100)/100;
	MoS30 = Math.round(targetPrice *0.7 *100)/100;
	const percentageOfPortfolio = Math.round((total / totalPortfolio) *100);

	return (
		<div className='PortfolioRowContainer'>
			<div className="item">{stock}</div>
			<div className="item">{ticker}</div>
			<div className="item">{industry}</div>
			<div className="item">$ {targetPrice}</div>
			<div className="item">$ {MoS30}</div>
			<div className="item">$ {price}</div>
			<div className="item">{quantity}</div>
			<div className="item">$ {total}</div>
			<div className="item">{percentageOfPortfolio}%</div>
		</div>
	);
}

function getTotal(){
	return total;
}

export default PortfolioRow;
