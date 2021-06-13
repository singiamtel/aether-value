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
	closingPrice: number,
	quantity: number,
	transactions: {
		quant: number;
		date: string;
		buyingPrice: number;
	}[];
	totalPortfolio: number
}



function PortfolioRow({rowNumber, onDelete, stock, ticker, industry, targetPrice, price, closingPrice, quantity, transactions, totalPortfolio}:PortfolioRow)  {
	let total:number = 0
	let MoS:number = 0
	const dayChange = price - closingPrice
	let invested:number = 0
	let averageEntryPrice:number = 0
	
	transactions.map((trans) => (invested += trans.quant*trans.buyingPrice))
	transactions.map((trans) => (averageEntryPrice += ((trans.quant*trans.buyingPrice)/quantity)))

	total = Math.round(price * quantity *100)/100;
	MoS = Math.round((targetPrice/price -1)*10000)/100;

	const totalChange = Math.round((total - invested)*100)/100
	const totalChangePercentage = Math.round((totalChange/invested)*10000)/100
	const percentageOfPortfolio = Math.round((total / totalPortfolio) *10000)/100
	const dayCuant = Math.round((dayChange*quantity) *100)/100
	const evenRow = (rowNumber % 2 === 0)
	averageEntryPrice = Math.round((averageEntryPrice) *100)/100
	quantity = Math.round(quantity*100000000)/100000000

	return (
		<div className={"PortfolioRowContainer "+ (evenRow ? 'even' : 'odd') }>
			{/* <div id="head" className="item">{stock}</div> */}
			<div id="head" className="item">{ticker}</div>														{/* Ticker */}
			<div className="item border-r">{industry}</div>														{/* Industry */}
			<div className="item">$ {targetPrice}</div>														{/* Target Price */}
			<div className="item border-r">{MoS} % </div>														{/* Margin Of Safety */}
			<div className="item border-r">$ {averageEntryPrice} </div>														{/* Average Entry Price */}
			<div className="item">$ {price} </div>																{/* Price */}
			<div className="item">{quantity}</div>																{/* Quantity */}
			<div className={"item "+ (dayCuant > 0 ? 'green' : 'red') }><b>$ {dayCuant} </b></div>				{/* (Day Change * Cuantity) */}
			<div className="item">$ {total}</div>																{/* Total */}
			<div className={"item border-r "+ (totalChange > 0 ? 'green' : 'red') }><b>$ {totalChange} ({totalChangePercentage}%)</b></div>				{/* Total Change */}
			<div className="item border-r">{percentageOfPortfolio} %</div>		{/* Percentage of the portfolio */}
			<div className="item"><FaTimes style={{cursor: 'pointer'}} onClick={() => onDelete(ticker)}/></div>	{/* Cross */}
		</div>
	);
}


export default PortfolioRow;
