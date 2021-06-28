import AddStock from '../AddStock';
import './Portfolio.css';
import PortfolioRow from "./PortfolioRow";

type PortfolioProps = {
  portfolio: {
    amount: number; targetPrice: number; api: { meta: { symbol: string; currency: string; exchange: string; type: string; }; values: { datetime: string; open: number; close: number; }[]; status: string; }; 
  }[]
}


const Portfolio =({portfolio}:PortfolioProps) => {
	let numberOfRows = 0;
	let portfolioName = JSON.parse(sessionStorage.getItem('wallets')!)[0].name

	/* Counts the number of assets */
	portfolio.map((stock) => ( numberOfRows++ ))

	/* Stores the total value of the Portfolio */
	let totalPortfolio = 0
	portfolio.map((stock)=> (totalPortfolio += stock.amount * stock.api.values[0].close) )
  console.log("totalPortfolio",totalPortfolio);

	return (
		<div className='grid grid-rows-8'>
			<div className='PortfolioHeader row-span-1'>
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
				
				{portfolio.map((stock, stockidx) => (<PortfolioRow key={stockidx} rowNumber={numberOfRows++} ticker={stock.api.meta.symbol} industry={stock.api.meta.type} targetPrice={stock.targetPrice} price={stock.api.values[0].close.toString()} closingPrice={stock.api.values[1].close} quantity={stock.amount} totalPortfolio={totalPortfolio}/>))}
				
			</div>
			<div className="PortfolioHeader row-span-1">
				<div className="item">{numberOfRows} Assets</div>
				<div className="item">
					<AddStock />
				</div>
				<div className="item"></div>
				<div className="item"></div>
				<div className="item"></div>
				<div className="item"></div>
				<div className="item"></div>
				<div className="item"></div>
				<div className="item"></div>
				<div className="item"></div>
				<div className="item">{portfolioName}</div>
				<div className="item"></div>
				
			</div>
		</div>
	);
}

export default Portfolio;
