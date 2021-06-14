import { Formik, Field, Form, FormikHelpers } from 'formik';
import './AddStock.css';

interface Values {
	name: string
	ticker: string
	industry: string
	price: number
	closingPrice: number
	targetPrice: number
	quantity: number
	quant: number
	date:string
	buyingPrice:number
}


type AddStock = {
	stockList: {
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
	addRow: (ticker: string, quant: number, date: string) => void,
}


function AddStock({stockList,addRow}:AddStock) {
	
	return (
		<div className="form">
			<h1 id="header">Añadir Stock</h1>
			<Formik 
				initialValues={{
					name: "",
					ticker: "",
					industry: "",
					price: 0,
					closingPrice: 0,
					targetPrice: 0,
					quantity: 0,
					quant: 0,
					date:"",
					buyingPrice:0,
				}}
				
				onSubmit={(
				values: Values,
				{ setSubmitting }: FormikHelpers<Values> ) => {
				setTimeout(() => {
					
					addRow(values.ticker, values.quant, values.date)

					setSubmitting(false)
				}, 500)
				}}
			>
				<Form >
				<div className="formBody">
					<p className={"grid grid-cols-2"}>
					<label htmlFor="ticker">Ticker: </label>
					<Field id="ticker" name="ticker" placeholder="AAPL" />
					</p>
					
					<p className={"grid grid-cols-2"}>
					<label htmlFor="quant">Quantity: </label>
					<Field id="quant" name="quant" placeholder="quant"/>
					</p>
					
					<p className={"grid grid-cols-2"}>
					<label htmlFor="date">Date: </label>
					<Field id="date" name="date" placeholder="date"/>
					</p>
				</div>
				<button id="submit" type="submit">Submit</button>
				</Form>
			</Formik>
		</div>
	);
}

export default AddStock;
