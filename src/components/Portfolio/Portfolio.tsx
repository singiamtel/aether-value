import './Portfolio.css';
import PortfolioRow from "./PortfolioRow";


type Portfolio = {
	name: string,
	portfolio:{
		name: string;
		ticker: string;
		industry: string;
		price: number;
		closingPrice: number;
		targetPrice: number;
		quantity: number;
		transactions: {
			quant: number;
			date: string;
			buyingPrice: number;
		}[];
	}[],
	onDelete: (ticker: string) => void,
}





const Portfolio =({name,portfolio,onDelete}:Portfolio) => {
	let numberOfRows = 0;
	let numberOfStocks = 0;

	/* Counts the number of assets */
	portfolio.map((stock) => ((stock.price == -1 ? "" : numberOfStocks++)))

	/* Stores the total value of the Portfolio */
	var totalPortfolio = 0
	portfolio.forEach((stock) => (totalPortfolio += (stock.price*stock.quantity)))
	totalPortfolio = Math.round(totalPortfolio*100)/100


	return (
		<div className='grid grid-rows-8'>
			<div className='PortfolioHeader row-span-1'>
				{/* <div className="item"><i>{name}</i></div> */}
				<div className="item">Ticker</div>
				<div className="item">Industry</div>
				<div className="item">Target Price</div>
				<div className="item">MoS</div>
				<div className="item">Av. Price</div>
				<div className="item">Price</div>
				<div className="item">Quantity</div>
				<div className="item">Day +/-</div>
				<div className="item">Total</div>
				<div className="item">Total +/-</div>
				<div className="item">% of Portfolio</div>
				<div className="item"></div>
			</div>
			<div className="PortfolioBody row-span-6">
				{portfolio.map((stock) => (<PortfolioRow rowNumber={numberOfRows++} onDelete={onDelete} stock={stock.name} ticker={stock.ticker} industry={stock.industry} targetPrice={stock.targetPrice} price={stock.price} closingPrice={stock.closingPrice} quantity={stock.quantity} transactions={stock.transactions} totalPortfolio={totalPortfolio}/>))}
				

			</div>
			<div className="PortfolioHeader row-span-1">
				<div className="item">{numberOfStocks} Assets</div>
				<div className="item"></div>
				<div className="item"></div>
				<div className="item"></div>
				<div className="item"></div>
				<div className="item"></div>
				<div className="item"></div>
				<div className="item"></div>
				<div className="item"></div>
				<div className="item"></div>
				<div className="item"></div>
				<div className="item"></div>

			</div>
		</div>
	);
}

export default Portfolio;
