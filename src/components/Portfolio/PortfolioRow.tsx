import './PortfolioRow.css';
import {FaTimes} from 'react-icons/fa'

type PortfolioRow = {
	rowNumber: number,
	onDelete: (ticker: string) => void
	stock: string,
	ticker: string,
	industry: string,
	targetPrice: number,
	price: number,
	day: number,
	quantity: number,
	totalPortfolio: number
}

var total:number
var MoS:number

function PortfolioRow({rowNumber, onDelete, stock, ticker, industry, targetPrice, price, day, quantity, totalPortfolio}:PortfolioRow)  {
	total = Math.round(price * quantity *100)/100;
	MoS = Math.round((targetPrice/price -1)*10000)/100;
	const percentageOfPortfolio = Math.round((total / totalPortfolio) *10000)/100;
	const dayCuant = Math.round((day*quantity) *100)/100;
	const evenRow = (rowNumber % 2 === 0)

	return (
		<div className={"PortfolioRowContainer "+ (evenRow ? 'even' : 'odd') }>
			{/* <div id="head" className="item">{stock}</div> */}
			{/* Ticker */}
			<div id="head" className="item">{ticker}</div>
			{/* Industry */}
			<div className="item border-r">{industry}</div>
			{/* Target Price */}
			<div className="item">{price==-1 ? "" : "$" + targetPrice}</div>
			{/* Margin Of Safety */}
			<div className="item border-r">{price== -1 ? "" : MoS + "%"} </div>
			{/* Price */}
			<div className="item">{price == -1 ? "" : "$" + price} </div>
			{/* Quantity */}
			<div className="item">{price == -1 ? "" : quantity}</div>
			{/* (Day Change * Cuantity) */}
			<div className={"item "+ (dayCuant > 0 ? 'green' : 'red') }><b>{price == -1 ? "" : "$" + dayCuant} </b></div>
			{/* Total */}
			<div className="item">{price == -1 ? "" : "$" + total}</div>
			{/* Total Change */}
			<div className="item border-r">{price == -1 ? "" : "$" + 138}</div>
			{/* Percentage of the portfolio */}
			<div className="item border-r">{price == -1 ? "" : percentageOfPortfolio +"%"} </div>
			{/* Cross */}
			<div className="item">{price == -1 ? "" : <FaTimes style={{cursor: 'pointer'}} onClick={() => onDelete(ticker)}/>}</div>
		</div>
	);
}

PortfolioRow.defaultProps = {
	onDelete: "",
	stock: "",
	ticker: "",
	industry: "",
	targetPrice: "",
	price: -1,
	quantity: "",
	totalPortfolio: "",

}

export default PortfolioRow;
