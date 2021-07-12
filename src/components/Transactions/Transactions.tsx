import './Transactions.css';
import TransactionRow from './TransactionRow';
import {TransactionType} from '../../models/portfolio.interface'
import {VscTriangleDown,VscTriangleUp} from 'react-icons/vsc'
import { useSelector } from 'react-redux';
import { State } from '../../store/reducers';
import { updateTransactions } from '../../store/action-creators';

type TransactionsProps = {
	descending: boolean[],
	setDescending:React.Dispatch<React.SetStateAction<boolean[]>>
  }


function Transactions({descending, setDescending}:TransactionsProps) {

let numberOfRows = 0

/* Acceso a la tienda */
let transactions = useSelector((state:State) => state.transactions)



const setDescendingSingular = (index:number) => {
	let value = !descending[index]
	let aux = [false, false, false, false, false, false, false, false, false]

	for(let i = 0; i< descending.length; i++){
		(i === index ? aux[i]=value : aux[i] = false )
	}
	
	setDescending(aux)

	if (descending[index])
		updateTransactions(sortingFunction(index,transactions).reverse()) 
	else
		updateTransactions(sortingFunction(index,transactions))
}

const sortingFunction = (index:number, transactions: TransactionType[]) => {
	switch(index){
	case 1:
		transactions.sort((a,b)=> (a.asset <= b.asset ? 1 : -1))
		break;
	case 2:
		transactions.sort((a,b)=> (a.asset <= b.asset ? 1 : -1))
		break;
	case 3:
		transactions.sort((a,b)=> (a.amount <= b.amount ? -1 : 1))
		break;
	case 4:
		transactions.sort((a,b)=> (a.open_price <= b.open_price ? -1 : 1))
		break;
	case 5:
		transactions.sort((a,b)=> (a.amount <= b.amount ? -1 : 1))
		break;
	case 5:
		transactions.sort((a,b)=> (a.amount*a.open_price <= b.amount*b.open_price ? -1 : 1))
		break;
	case 7:
		transactions.sort((a,b)=> (a.date <= b.date ? -1 : 1))
		break;
	default:
		transactions.sort((a,b)=> (a.asset <= b.asset ? -1 : 1))
	}

	return transactions
}

return (
	<div>
		{/* Transaction Container */}
		<div className='grid grid-rows-8'>
			<div className='TransactionHeader row-span-1'>
				<div className="item w-full">
					<p>Name</p> 
					<button className="-right-3 relative focus:outline-none" onClick={() => (setDescendingSingular(0))} > 
						{(descending[0] ? <VscTriangleUp className="cursor-pointer"/> : <VscTriangleDown className="cursor-pointer" />)}
					</button>
				</div>
				<div className="item">
					Ticker
					<button className="-right-3 relative focus:outline-none" onClick={() => (setDescendingSingular(1))} >
					{(descending[1] ? <VscTriangleUp className="cursor-pointer" /> : <VscTriangleDown className="cursor-pointer" />)}
					</button>
				</div>
				<div className="item">
					Market
					<button className="-right-3 relative focus:outline-none" onClick={() => (setDescendingSingular(2))} >
					{(descending[2] ? <VscTriangleUp className="cursor-pointer" /> : <VscTriangleDown className="cursor-pointer" />)}
					</button>
					</div>
				<div className="item">
					Type
					<button className="-right-3 relative focus:outline-none" onClick={() => (setDescendingSingular(3))} >
					{(descending[3] ? <VscTriangleUp className="cursor-pointer" /> : <VscTriangleDown className="cursor-pointer" />)}
					</button>
					</div>
				<div className="item">
					Price
					<button className="-right-3 relative focus:outline-none" onClick={() => (setDescendingSingular(4))} >
					{(descending[4] ? <VscTriangleUp className="cursor-pointer" /> : <VscTriangleDown className="cursor-pointer" />)}
					</button>
					</div>
				<div className="item">
					Quantity
					<button className="-right-3 relative focus:outline-none" onClick={() => (setDescendingSingular(5))} >
					{(descending[5] ? <VscTriangleUp className="cursor-pointer" /> : <VscTriangleDown className="cursor-pointer" />)}
					</button>
					</div>
				<div className="item">
					Transaction Total
					<button className="-right-3 relative focus:outline-none" onClick={() => (setDescendingSingular(6))} >
					{(descending[6] ? <VscTriangleUp className="cursor-pointer" /> : <VscTriangleDown className="cursor-pointer" />)}
					</button>
					</div>
				<div className="item">
					Comision
					<button className="-right-3 relative focus:outline-none" onClick={() => (setDescendingSingular(7))} >
					{(descending[7] ? <VscTriangleUp className="cursor-pointer" /> : <VscTriangleDown className="cursor-pointer" />)}
					</button>
					</div>
				<div className="item">
					Date
					<button className="-right-3 relative focus:outline-none" onClick={() => (setDescendingSingular(8))} >
					{(descending[8] ? <VscTriangleUp className="cursor-pointer" /> : <VscTriangleDown className="cursor-pointer" />)}
					</button>
					</div>
				
				
			</div>
			<div className="TransactionBody row-span-6">
				{transactions.map((trans) => (<TransactionRow rowNumber={numberOfRows++} ticker={trans.asset} buyingPrice={trans.open_price} quantity={trans.amount} date={trans.date} />))}
			</div>
			<div className="TransactionHeader row-span-1">
				<div className="item">{numberOfRows} Transactions</div>
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
	</div>
);
}

export default Transactions;
