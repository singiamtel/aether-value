import { Formik, Field, Form, FormikHelpers } from 'formik';
import { ImCross } from 'react-icons/im';
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
	/* stockList: {
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
	}[], */
	addRow: (ticker: string, quant: number, date: string) => void,
	popUpState: boolean,
	togglePopUpState: () => void,
}


function AddStock({addRow,popUpState,togglePopUpState}:AddStock) {
	
	return (
		<div className={"popup " + (popUpState ? " " : "hidden")}>
			<div className="popup_inner">
			<h1 id="header" >Introduce los datos
				<button onClick={togglePopUpState}>
					<div className="px-3 closeCross">
						<ImCross style={{fontSize:15}}/>
					</div>
				</button>
			</h1>
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
				
					<p className={"grid grid-cols-2 px-4 py-2 text-black"}>
					<label htmlFor="ticker">Ticker: </label>
					<Field id="ticker" name="ticker" placeholder="AAPL" />
					</p>
					
					<p className={"grid grid-cols-2 px-4 py-2 text-black"}>
					<label htmlFor="quant">Quantity: </label>
					<Field id="quant" name="quant" placeholder={0}/>
					</p>
					
					<p className={"grid grid-cols-2 px-4 py-2 text-black"}>
					<label htmlFor="date">Date: </label>
					<Field id="date" name="date" placeholder="2021-01-01"/>
					</p>
				
				<button className="p-1 addButton" id="submit" type="submit" onClick={togglePopUpState}>Añadir</button>
				</Form>
				
			</Formik>
			</div>
		</div>
	);
}

export default AddStock;
