import Sidebar from './Sidebar';
import Topbar from './Topbar';
import './Transactions.css';
import { useState } from 'react';
import TransactionRow from './TransactionRow';


function Transactions() {

	const stockList = [
		{
			/* Info a pedir 1 vez */
			name: "Dream Unlimited",
			ticker: "DRM.TO",
			industry:"Real Estate",
			//Precio a inicio de cada año?
			/* Info a pedir cada vez */
			price: 21.23,
			closingPrice: 21.30,

			/* Info a guardar en la BBDD */
			targetPrice: 32,
			quantity: 0,
			//Notas???

			/* Transacciones */
			transactions: [
			{
				quant: 7,
				date: "2020-7-6",
				buyingPrice: 15.24
			},
			]
		},
		{
			name: "Brookfield Asset Management",
			ticker: "BAM",
			industry:"Real Estate",
			targetPrice: 77,
			price: 49.63,
			closingPrice: 49.88,
			quantity: 0,
			transactions: [
				{
					quant: 5,
					date: "2021-4-20",
					buyingPrice:45.55
				},
				{
					quant: 6,
					date: "2021-5-12",
					buyingPrice:45.65
				},
			]
		},
		{
			name: "SandStorm Gold",
			ticker: "SAND",
			industry:"Gold Royalties",
			targetPrice: 13,
			price: 8.92,
			closingPrice: 9.19,
			quantity: 0,
			transactions: [
				{
					quant: 14,
					date: "2021-3-31",
					buyingPrice: 6.815
				},
			]
		},
		{
			name: "Alibaba",
			ticker: "BABA",
			industry:"Ecommerce",
			targetPrice: 355,
			price: 211.64,
			closingPrice: 213.07,
			quantity: 0,
			transactions: [
				{
					quant: 2,
					date: "2021-4-12",
					buyingPrice:238.49
				},
				{
					quant: 1,
					date: "2021-5-12",
					buyingPrice:221.92
				},
			]
		},
		{
			name: "Ebay",
			ticker: "EBAY",
			industry:"Ecommerce",
			targetPrice: 77,
			price: 67.13,
			closingPrice: 66.75,
			quantity: 0,
			transactions: [
				{
					quant: 3,
					date: "2021-3-11",
					buyingPrice: 55.66
				},
			]
		},
		{
			name: "Facebook",
			ticker: "FB",
			industry:"Online Advertising",
			targetPrice: 409,
			price: 331.26,
			closingPrice: 332.46,
			quantity: 0,
			transactions: [
				{
					quant: 1,
					date: "2021-3-12",
					buyingPrice: 267.44
				},
				{
					quant: 1,
					date: "2021-3-19",
					buyingPrice: 290.63
				},
			]
		},
		{
			name: "Bitcoin",
			ticker: "BTC",
			industry:"Criptocurrency",
			targetPrice: 500000,
			price: 35937.40,
			closingPrice: 35558.20,
			quantity: 0,
			transactions: [
				{
					quant: 0.01840364,
					date: "2020-02-12",
					buyingPrice:11681.5
				},
				{
					quant: -0.01840364,
					date: "2020-02-12",
					buyingPrice:11467.02
				},
				{
					quant: 0.00189398,
					date: "2020-04-13",
					buyingPrice:7207
				},
				{
					quant:  0.0008383,
					date: "2020-04-20",
					buyingPrice:7520
				},
				{
					quant: -0.00273228,
					date: "2020-04-22",
					buyingPrice:7977.26
				},
				{
					quant: 0.00228864,
					date: "2020-05-09",
					buyingPrice:7833
				},
				{
					quant: 0.00533159,
					date: "2020-05-17",
					buyingPrice:10903.89
				},
				{
					quant: 0.005595,
					date: "2020-05-28",
					buyingPrice:10390.54
				},
				{
					quant: -0.01321523,
					date: "2020-06-05",
					buyingPrice:10352.22
				},
				{
					quant: 0.00090422,
					date: "2020-9-20",
					buyingPrice:9085
				},
				{
					quant: 0.00096426,
					date: "2020-10-5",
					buyingPrice:11587
				},
				{
					quant: -0.00186848,
					date: "2020-10-10",
					buyingPrice:11490.18
				},
				{
					quant: 0.00040691,
					date: "2020-11-4",
					buyingPrice:15342
				},
				{
					quant: 0.00036056,
					date: "2020-11-19",
					buyingPrice:18158
				},
				{
					quant: 0.00054722,
					date: "2020-11-19",
					buyingPrice:18158
				},
				{
					quant: 0.00902294,
					date: "2020-11-24",
					buyingPrice:19357.27
				},
				{
					quant: -0.003116,
					date: "2020-11-24",
					buyingPrice:19445.82
				},
				{
					quant: 0.00183887,
					date: "2020-11-30",
					buyingPrice:19566
				},
				{
					quant: 0.00016819,
					date: "2020-12-11",
					buyingPrice:21756
				},
				{
					quant: 0.00036661,
					date: "2020-12-27",
					buyingPrice:35835
				},
				{
					quant: 0.00010956,
					date: "2020-12-27",
					buyingPrice:35835
				},
				{
					quant: 0.00233224,
					date: "2021-01-09",
					buyingPrice:39941.93
				},
				{
					quant: -0.000912,
					date: "2021-01-09",
					buyingPrice:39925.01
				},
				{
					quant: 0.00026864,
					date: "2021-01-29",
					buyingPrice:35678
				},
				{
					quant: 0.00026988,
					date: "2021-01-29",
					buyingPrice:35678
				},
				{
					quant: -0.00634466,
					date: "2021-01-30",
					buyingPrice:34353.47
				},
				{
					quant: 0.00163461,
					date: "2021-02-11",
					buyingPrice:57266
				},
				{
					quant:  0.00006003,
					date: "2021-02-14",
					buyingPrice:57110
				},
				{
					quant: 0.00051475,
					date: "2021-02-26",
					buyingPrice:47254
				},
				{
					quant: 0.00238106,
					date: "2021-02-27",
					buyingPrice:47254
				},
				{
					quant: 0.00006258,
					date: "2021-03-02",
					buyingPrice:49601
				},
				{
					quant: 0.00235721,
					date: "2021-03-05",
					buyingPrice:49397.24
				},
				{
					quant: 0.00115951,
					date: "2021-04-23",
					buyingPrice:50137.62
				},
				{
					quant:  0.0000585,
					date: "2021-04-24",
					buyingPrice:59256
				},
				{
					quant: 0.0001051,
					date: "2021-04-27",
					buyingPrice:58361
				},
				{
					quant: -0.00105181,
					date: "2021-05-01",
					buyingPrice:57562.44
				},
				{
					quant: 0.00205553,
					date: "2021-05-11",
					buyingPrice:56647.02
				},
				{
					quant: 0.00232443,
					date: "2021-05-13",
					buyingPrice:50093.85
				},
				{
					quant: 0.00006993,
					date: "2021-05-17",
					buyingPrice:35991
				},
			]
		},
		//Posiciones cerradas
		{
			name: "Novatek PAO",
			ticker: "NOVKY",
			industry:"Oil and Gas Exploration and Production",
			targetPrice: 0,
			price: 0,
			closingPrice: 0,
			quantity: 0,
			transactions: [
				{
					quant: 1,
					date: "2020-2-27",
					buyingPrice: 157
				},
				{
					quant: -1,
					date: "2020-12-1",
					buyingPrice: 161.2
				},
			]
		},
		{
			name: "Vanda Pharmaceuticals",
			ticker: "VNDA",
			industry:"Biotechnology",
			targetPrice: 0,
			price: 0,
			closingPrice: 0,
			quantity: 0,
			transactions: [
				{
					quant: 4,
					date: "2020-3-2",
					buyingPrice: 10.96
				},
				{
					quant: -4,
					date: "2020-12-1",
					buyingPrice: 12
				},
			]
		},
		{
			name: "ENLABS AB",
			ticker: "NLAB",
			industry:"",
			targetPrice: 0,
			price: 0,
			closingPrice: 0,
			quantity: 0,
			transactions: [
				{
					quant: 20,
					date: "2020-3-6",
					buyingPrice: 2.44
				},
				{
					quant: -20,
					date: "2020-6-1",
					buyingPrice: 2.31
				},
			]
		},
		{
			name: "Advanced Emission Solutions Inc",
			ticker: "ADES",
			industry:"",
			targetPrice: 0,
			price: 0,
			closingPrice: 0,
			quantity: 0,
			transactions: [
				{
					quant: 6,
					date: "2020-3-9",
					buyingPrice: 8.47
				},
				{
					quant: 1,
					date: "2020-3-24",
					buyingPrice: 5.26
				},
				{
					quant: -7,
					date: "2020-6-2",
					buyingPrice: 5.04
				},
			]
		},
		{
			name: "AIRBUS",
			ticker: "",
			industry:"",
			targetPrice: 0,
			price: 0,
			closingPrice: 0,
			quantity: 0,
			transactions: [
				{
					quant: 2,
					date: "2020-4-6",
					buyingPrice: 62.94
				},
				{
					quant: -2,
					date: "2020-4-15",
					buyingPrice: 66.18
				},
			]
		},
		{
			name: "Camtek Ltd",
			ticker: "",
			industry:"",
			targetPrice: 0,
			price: 0,
			closingPrice: 0,
			quantity: 0,
			transactions: [
				{
					quant: 3,
					date: "2020-4-13",
					buyingPrice: 9.8
				},
				{
					quant: -3,
					date: "2020-6-5",
					buyingPrice: 13.4
				},
			]
		},
		{
			name: "Monster Beverage Corp",
			ticker: "",
			industry:"",
			targetPrice: 0,
			price: 0,
			closingPrice: 0,
			quantity: 0,
			transactions: [
				{
					quant: 1,
					date: "2020-4-28",
					buyingPrice: 60.4
				},
				{
					quant: -1,
					date: "2021-1-13",
					buyingPrice: 93.5
				},
				{
					quant: 1,
					date: "2020-3-22",
					buyingPrice: 89.03
				},
				{
					quant: -1,
					date: "2020-4-12",
					buyingPrice: 94.67
				},
			]
		},
		{
			name: "Coca-Cola",
			ticker: "",
			industry:"",
			targetPrice: 0,
			price: 0,
			closingPrice: 0,
			quantity: 0,
			transactions: [
				{
					quant: 1,
					date: "2020-4-28",
					buyingPrice: 47.06
				},
				{
					quant: -1,
					date: "2021-1-4",
					buyingPrice: 53.89
				},
			]
		},
		{
			name: "Ebix Inc",
			ticker: "",
			industry:"",
			targetPrice: 0,
			price: 0,
			closingPrice: 0,
			quantity: 0,
			transactions: [
				{
					quant: 3,
					date: "2020-6-2",
					buyingPrice: 24.08
				},
				{
					quant: 4,
					date: "2021-6-5",
					buyingPrice: 28
				},
				{
					quant: -1,
					date: "2021-6-8",
					buyingPrice: 31.01
				},
				{
					quant: -1,
					date: "2021-6-12",
					buyingPrice: 24.69
				},
				{
					quant: -2,
					date: "2021-11-16",
					buyingPrice: 30.55
				},
				{
					quant: -3,
					date: "2021-11-19",
					buyingPrice: 31.19
				},
			]
		},
		{
			name: "Novo Nordisk",
			ticker: "",
			industry:"",
			targetPrice: 0,
			price: 0,
			closingPrice: 0,
			quantity: 0,
			transactions: [
				{
					quant: 1,
					date: "2020-8-3",
					buyingPrice: 65.54
				},
				{
					quant: -1,
					date: "2021-3-22",
					buyingPrice: 71.09
				},
			]
		},
		{
			name: "Kirkland Lake Gold",
			ticker: "",
			industry:"",
			targetPrice: 0,
			price: 0,
			closingPrice: 0,
			quantity: 0,
			transactions: [
				{
					quant: 1,
					date: "2020-8-31",
					buyingPrice: 53.74
				},
				{
					quant: 3,
					date: "2021-1-19",
					buyingPrice: 39.8
				},
				{
					quant: -1,
					date: "2021-4-12",
					buyingPrice: 36.46
				},
				{
					quant: -3,
					date: "2021-4-20",
					buyingPrice: 37.82
				},
			]
		},
		{
			name: "Global Cord Blood Corp",
			ticker: "",
			industry:"",
			targetPrice: 0,
			price: 0,
			closingPrice: 0,
			quantity: 0,
			transactions: [
				{
					quant: 3,
					date: "2020-10-12",
					buyingPrice: 3.5
				},
				{
					quant: 6,
					date: "2020-10-15",
					buyingPrice: 3.51
				},
				{
					quant: 28,
					date: "2020-11-10",
					buyingPrice: 4.14
				},
				{
					quant: -16,
					date: "2021-3-11",
					buyingPrice: 4.66
				},
				{
					quant: -21,
					date: "2021-3-31",
					buyingPrice: 4.53
				},
			]
		},
		{
			name: "Charles Schwab",
			ticker: "",
			industry:"",
			targetPrice: 0,
			price: 0,
			closingPrice: 0,
			quantity: 0,
			transactions: [
				{
					quant: 2,
					date: "2020-12-7",
					buyingPrice: 50.895
				},
				{
					quant: -2,
					date: "2020-11-13",
					buyingPrice: 60.95
				},
				{
					quant: 2,
					date: "2021-2-1",
					buyingPrice: 52.35
				},
				{
					quant: -1,
					date: "2021-2-17",
					buyingPrice: 60.57
				},
				{
					quant: -1,
					date: "2021-2-19",
					buyingPrice: 62.99
				},
			]
		},
		{
			name: "SEI Investments Co",
			ticker: "",
			industry:"",
			targetPrice: 0,
			price: 0,
			closingPrice: 0,
			quantity: 0,
			transactions: [
				{
					quant: 1,
					date: "2021-1-4",
					buyingPrice: 57.98
				},
				{
					quant: 1,
					date: "2021-2-1",
					buyingPrice: 53.81
				},
				{
					quant: -2,
					date: "2021-3-12",
					buyingPrice: 59.91
				},
				
			]
		},
		{
			name: "Momo Inc",
			ticker: "",
			industry:"",
			targetPrice: 0,
			price: 0,
			closingPrice: 0,
			quantity: 0,
			transactions: [
				{
					quant: 8,
					date: "2021-1-6",
					buyingPrice: 13.96
				},
				{
					quant: 7,
					date: "2021-2-23",
					buyingPrice: 16.34
				},
				{
					quant: -8,
					date: "2021-3-12",
					buyingPrice: 16.22
				},
				{
					quant: -7,
					date: "2021-3-19",
					buyingPrice: 16.15
				},
				
			]
		},
		{
			name: "USANA Health Sciences Inc",
			ticker: "",
			industry:"",
			targetPrice: 0,
			price: 0,
			closingPrice: 0,
			quantity: 0,
			transactions: [
				{
					quant: 1,
					date: "2021-1-13",
					buyingPrice: 78.68
				},
				{
					quant: -1,
					date: "2021-1-19",
					buyingPrice: 81.63
				},
				
			]
		},
		{
			name: "Aflac",
			ticker: "",
			industry:"",
			targetPrice: 0,
			price: 0,
			closingPrice: 0,
			quantity: 0,
			transactions: [
				{
					quant: 2,
					date: "2021-1-27",
					buyingPrice: 45.71
				},
				{
					quant: -2,
					date: "2021-4-20",
					buyingPrice: 53.25
				},
				
			]
		},
		{
			name: "Jerash Holdings",
			ticker: "",
			industry:"",
			targetPrice: 0,
			price: 0,
			closingPrice: 0,
			quantity: 0,
			transactions: [
				{
					quant: 20,
					date: "2021-2-2",
					buyingPrice: 5.69
				},
				{
					quant: -20,
					date: "2021-2-23",
					buyingPrice: 5.9
				},
				
			]
		},
		{
			name: "Turtle Beach Corp",
			ticker: "",
			industry:"",
			targetPrice: 0,
			price: 0,
			closingPrice: 0,
			quantity: 0,
			transactions: [
				{
					quant: 2,
					date: "2021-2-8",
					buyingPrice: 30.33
				},
				{
					quant: 5,
					date: "2021-3-5",
					buyingPrice: 23.51
				},
				{
					quant: -2,
					date: "2021-3-19",
					buyingPrice: 28.25
				},
				{
					quant: -5,
					date: "2021-4-12",
					buyingPrice: 28.28
				},
			]
		},
		{
			name: "Geo Group",
			ticker: "",
			industry:"",
			targetPrice: 0,
			price: 0,
			closingPrice: 0,
			quantity: 0,
			transactions: [
				{
					quant: 9,
					date: "2021-2-17",
					buyingPrice: 8.53
				},
				{
					quant: 9,
					date: "2021-2-19",
					buyingPrice: 7.53
				},
				{
					quant: -18,
					date: "2021-3-19",
					buyingPrice: 8.04
				},
				
			]
		},
	]

let totalRealizedGains = 0
stockList.map((stock) => ((stock.transactions.map((trans) =>(stock.quantity += trans.quant)))))
stockList.map((stock) => ((stock.transactions.map((trans) =>(stock.quantity <= 0 ? totalRealizedGains += trans.buyingPrice*trans.quant : "")))))
totalRealizedGains *= -1

const [transactions,setTransactions] = useState(stockList)

let numberOfRows = 0

return (
	<div className="Home">
		{/* Sidebar */}
		<div className="Sidebar">
			<Sidebar activeElement="Transactions"/>
		</div>

		<div className="Topbar">
			<Topbar portfolio={transactions} totalRealizedGains={totalRealizedGains} />
		</div>
		{/* Main */}
		<div className="Main p-7">
			{/* Portfolio Container */}
			<div className='grid grid-rows-8'>
				<div className='TransactionHeader row-span-1'>
					<div className="item"><i>Name</i></div>
					<div className="item">Ticker</div>
					<div className="item">Industry</div>
					<div className="item">Date</div>
					<div className="item">Quantity</div>
					<div className="item">Asset Price</div>
					<div className="item">Transaction Total</div>
				</div>
				<div className="TransactionBody row-span-6">
					{transactions.map((stock) => (stock.transactions.map((trans, transidx) => (<TransactionRow key={transidx} rowNumber={numberOfRows++} stock={stock.name} ticker={stock.ticker} industry={stock.industry} buyingPrice={trans.buyingPrice} quantity={trans.quant} date={trans.date}/>))))}
					

				</div>
				<div className="TransactionHeader row-span-1">
					<div className="item">{numberOfRows} Transactions</div>
					<div className="item"></div>
					<div className="item"></div>
					<div className="item"></div>
					<div className="item"></div>
					<div className="item"></div>
					<div className="item"></div>
					
					

				</div>

			</div>
			

		</div>
		
	</div>
);
}

export default Transactions;
