import './PortfolioRow.css';
import {FaTimes} from 'react-icons/fa'

type PortfolioRowProps = {
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

function PortfolioRow({rowNumber, onDelete, stock, ticker, industry, targetPrice, price, closingPrice, quantity, transactions, totalPortfolio}:PortfolioRowProps)  {
	let total:number = 0
	let MoS:number = 0
	const dayChange = price - closingPrice
	let invested:number = 0
	let averageEntryPrice:number = 0
	
	transactions.map((trans) => (invested += trans.quant*trans.buyingPrice))
	transactions.map((trans) => (averageEntryPrice += ((trans.quant*trans.buyingPrice)/quantity)))

	total = price * quantity
	MoS = (targetPrice/price -1)*100

	const totalChange = (total - invested)
	const totalChangePercentage = (totalChange/invested)*100
	const percentageOfPortfolio = (total / totalPortfolio) *100
	const dayCuant = (dayChange*quantity)
	const evenRow = (rowNumber % 2 === 0)
	/* We maintain this math.round for BTC */
	quantity = Math.round(quantity*100000000)/100000000

	return (
		<div className={"PortfolioRowContainer "+ (evenRow ? 'even' : 'odd') }>
			{/* <div id="head" className="item">{stock}</div> */}
			<div id="head" className="item">{ticker}</div>														{/* Ticker */}
			<div className="item border-r">{industry}</div>														{/* Industry */}
			<div className="item">$ {targetPrice.toFixed(2)}</div>														{/* Target Price */}
			<div className="item border-r">{MoS.toFixed(2)} % </div>														{/* Margin Of Safety */}
			<div className="item border-r">$ {averageEntryPrice.toFixed(2)} </div>														{/* Average Entry Price */}
			<div className="item">$ {price.toFixed(2)} </div>																{/* Price */}
			<div className="item">{quantity}</div>																{/* Quantity */}
			<div className={"item "+ (dayCuant > 0 ? 'green' : 'red') }><b>$ {dayCuant.toFixed(2)} </b></div>				{/* (Day Change * Cuantity) */}
			<div className="item">$ {total.toFixed(2)}</div>																{/* Total */}
			<div className={"item border-r "+ (totalChange > 0 ? 'green' : 'red') }><b>$ {totalChange.toFixed(2)} ({totalChangePercentage.toFixed(2)}%)</b></div>				{/* Total Change */}
			<div className="item border-r">{percentageOfPortfolio.toFixed(2)} %</div>		{/* Percentage of the portfolio */}
			<div className="item"><FaTimes style={{cursor: 'pointer'}} onClick={() => onDelete(ticker)}/></div>	{/* Cross */}
			
		</div>
	);
}


export default PortfolioRow;
