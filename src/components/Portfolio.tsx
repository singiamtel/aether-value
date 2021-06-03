import './Portfolio.css';
import PortfolioRow from "./PortfolioRow";


/* Lista de Stocks [A reemplazar] */
const stockList = [
	{
		name: "Dream Unlimited",
		ticker: "DRM.TO",
		industry:"Real Estate",
		targetPrice: 32,
		price: 20.64,
		quantity: 7
	},
	{
		name: "Brookfield Asset Management",
		ticker: "BAM",
		industry:"Real Estate",
		targetPrice: 77,
		price: 50,
		quantity: 11
	},
	{
		name: "SandStorm Gold",
		ticker: "SAND",
		industry:"Gold Royalties",
		targetPrice: 13,
		price: 8.4,
		quantity: 14
	},
	{
		name: "Alibaba",
		ticker: "BABA",
		industry:"Ecommerce",
		targetPrice: 355,
		price: 217.04,
		quantity: 3
	},
	{
		name: "Ebay",
		ticker: "EBAY",
		industry:"Ecommerce",
		targetPrice: 77,
		price: 64.07,
		quantity: 3
	},
	{
		name: "Facebook",
		ticker: "FB",
		industry:"Online Advertising",
		targetPrice: 409,
		price: 326.04,
		quantity: 2
	},
	{
		name: "Bitcoin",
		ticker: "BTC",
		industry:"Criptocurrency",
		targetPrice: 500000,
		price: 38794.50,
		quantity: 0.01671182
	},
]

type Portfolio = {
	name: string,
}

/* Variabla que guarda el valor total del portfolio en dólares */
var totalPortfolio:number = 0
stockList.forEach((stock) => (totalPortfolio += (stock.price*stock.quantity)))
totalPortfolio = Math.round(totalPortfolio*100)/100


function Portfolio({name}:Portfolio) {
	
	
	return (
		<div className='PortfolioContainer'>
			<div className='Header'>
				<div className="item"><i>{name}</i></div>
				<div className="item">Ticker</div>
				<div className="item">Industry</div>
				<div className="item">Target Price ($)</div>
				<div className="item">MoS 30%</div>
				<div className="item">Price ($)</div>
				<div className="item">Quantity</div>
				<div className="item">Total ($)</div>
				<div className="item">% of Portfolio</div>
			</div>
			<div className="body">
				{stockList.map((stock) => (<PortfolioRow stock={stock.name} ticker={stock.ticker} industry={stock.industry} targetPrice={stock.targetPrice} price={stock.price}  quantity={stock.quantity} totalPortfolio={totalPortfolio}/>))}
			</div>
			<div className="Header">
				<div className="item"></div>
				<div className="item"></div>
				<div className="item"></div>
				<div className="item"></div>
				<div className="item"></div>
				<div className="item"></div>
				<div className="item"></div>
				<div className="item">$ {totalPortfolio}</div>
				<div className="item"></div>

			</div>
		</div>
	);
}

export default Portfolio;
