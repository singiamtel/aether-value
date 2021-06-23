import { Doughnut } from 'react-chartjs-2';



type IndustryChartProps = {
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
}

const IndustryChart = ({portfolio}:IndustryChartProps) => {

/* Emulamos un diccionario */
const dict: any = {}
const labels = []
const data = []


/* Stores the total value of the Portfolio */
var totalPortfolio = 0
portfolio.forEach((stock) => (totalPortfolio += (stock.price*stock.quantity)))
/* Rellenamos las industrias */
portfolio.forEach((stock) => (
  (dict[stock.industry] === undefined) ? dict[stock.industry]=((stock.price*stock.quantity)/totalPortfolio * 100) : dict[stock.industry]+=((stock.price*stock.quantity)/totalPortfolio * 100)
  )
)

/* Recorremos nuestro diccionario */
for(let key in dict) {
  labels.push(key)
  data.push(Math.round(dict[key]*100) / 100)
}

/* Formateamos para poder hacer la gráfica */
const dataList = {
  labels: labels,
  datasets: [
    {
      data: data,
      backgroundColor: [
        'rgb(128,128,128)',
        'rgb(192,192,192)',
        'rgb(211,211,211)',
        'rgb(220,220,220)',
        'rgb(119,136,153)',
        'rgb(112,128,144)',
      ],
      borderColor: [
        'rgb(255, 255, 255,0)',
      ],
      borderWidth: 1,
      
    },
    
  ],
  
};


const options = {
    plugins: {
        legend: {
          labels: {
            color: 'rgb(255, 255, 255)',
           }
        }
    }
}







  return (
    <div>
      <div className='text-center text-white'>
        <h1>Industry Diversification (%)</h1>
      </div>
      <Doughnut
        className="text-white"
        type="doughnut"
        data={dataList}
        options = {options}
      />
    </div>
  )};

export default IndustryChart;
