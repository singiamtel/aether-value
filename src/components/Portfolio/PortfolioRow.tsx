import './PortfolioRow.css';
import {FaTimes} from 'react-icons/fa'
import {TransactionType} from '../../models/portfolio.interface'

type PortfolioRowProps = {
	rowNumber: number,
	ticker: string,
	industry: string,
	targetPrice: number,
	price: string,
	closingPrice: string,
	quantity: number,
	totalPortfolio: number
	transactions: TransactionType[]
}

function PortfolioRow({rowNumber, ticker, industry, targetPrice, price, closingPrice, quantity, totalPortfolio, transactions}:PortfolioRowProps)  {
	let total:number = 0
	let MoS:number = 0
 	let parsedPrice = parseFloat(price)
	const dayChange = parsedPrice - parseFloat(closingPrice)
	let invested:number = 0
	let averageEntryPrice:number = 0
	
	
	/* Sacamos el dinero invertido en esta posición */
	transactions.map((trans) => (invested += trans.amount*trans.open_price))
	/* Sacamos el precio medio de compra de la acción */
	transactions.map((trans) => (averageEntryPrice += ((trans.amount*trans.open_price)/quantity)))

	total = parsedPrice * quantity
	MoS = (targetPrice/parsedPrice -1)*100

	const totalChange = (total - invested)
	const totalChangePercentage = (totalChange/invested)*100
	const percentageOfPortfolio = (total / totalPortfolio) *100
	
	const dayCuant = (dayChange*quantity)
	const dayCuantPercentage = (dayChange / parseFloat(closingPrice)) *100
	const evenRow = (rowNumber % 2 === 0)
	/* We maintain this math.round for BTC */
	quantity = Math.round(quantity*100000000)/100000000

	return (
		<div className={"PortfolioRowContainer "+ (evenRow ? 'even' : 'odd') }>
			<div id="head" className="item">{ticker}</div>														
			<div className="item border-r">{industry}</div>														
			<div className="item">$ {targetPrice.toFixed(2)}</div>														
			<div className={"item border-r "+ (MoS > 5 ? 'green' : 'orange') }>{MoS.toFixed(2)} % </div>														
			<div className="item border-r">$ {averageEntryPrice.toFixed(2)} </div>														
			<div className="item">$ {parsedPrice.toFixed(2)} </div>
			<div className="item">{quantity}</div>																
			<div className={"item "+ (dayCuant > 0 ? 'green' : 'red') }><b>$ {dayCuant.toFixed(2)} ({dayCuantPercentage.toFixed(2)}%) </b></div>				
			<div className="item">$ {total.toFixed(2)}</div>															
			<div className={"item border-r "+ (totalChange > 0 ? 'green' : 'red') }><b>$ {totalChange.toFixed(2)} ({totalChangePercentage.toFixed(2)}%)</b></div>			
			<div className="item border-r">{percentageOfPortfolio.toFixed(2)} %</div>		
			<div className="item"><FaTimes style={{cursor: 'pointer'}} /></div>	
			
		</div>
	);
}


export default PortfolioRow;
