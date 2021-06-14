import './TransactionRow.css';
import {FaTimes} from 'react-icons/fa'

type TransactionRow = {
	rowNumber: number,
	stock: string,
	ticker: string,
	industry: string,
	buyingPrice: number,
	quantity: number,
	date:string,
}



function TransactionRow({rowNumber, stock, ticker, industry, buyingPrice, quantity, date}:TransactionRow)  {
	
	const evenRow = (rowNumber % 2 === 0)
	quantity = Math.round(quantity*100000000)/100000000
	const totalTransaction = Math.round(quantity*buyingPrice*100)/100
	return (
		<div className={"TransactionRowContainer "+ (evenRow ? 'even' : 'odd') }>
			<div id="head" className="item border-r">{stock}</div>
			<div id="head" className="item">{ticker}</div>														{/* Ticker */}
			<div className="item border-r">{industry}</div>														{/* Industry */}
			<div className="item">{date} </div>																	{/* Date */}
			<div className="item">{quantity}</div>																{/* Quantity */}
			<div className="item">$ {buyingPrice} </div>														{/* Price */}
			<div className="item">$ {totalTransaction}</div>													{/* Quantity * Buying Price */}
			</div>
	);
}


export default TransactionRow;