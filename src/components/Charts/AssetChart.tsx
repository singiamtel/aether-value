import { Doughnut } from 'react-chartjs-2';
import { useSelector } from 'react-redux';

import { State } from '../../store/reducers';



const AssetChart = () => {

/* Acceso a la tienda */
let activePortfolio = useSelector((state:State) => state.activePortfolio[0])
let portfolio = useSelector((state:State) => state.portfolio[activePortfolio])
let totalPortfolio = useSelector((state:State) => state.portfolioTotal)


/* Emulamos un diccionario */
const dict: any = {}
const labels = []
const data = []


/* Rellenamos las industrias */
portfolio.forEach((stock) => (
  (dict[stock.api.meta.symbol] === undefined) ? dict[stock.api.meta.symbol]=((parseFloat(stock.api.values[0].close)*stock.amount)/totalPortfolio * 100) : dict[stock.api.meta.symbol]+=((parseFloat(stock.api.values[0].close)*stock.amount)/totalPortfolio * 100))
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
    },
    responsive: true,
    maintainAspectRatio: true 
}

  return (
    <div>
      <div className='text-center text-white'>
        <h1>Asset Diversification (%)</h1>
      </div>
      <Doughnut
        className="text-white"
        type="doughnut"
        data={dataList}
        options = {options}
      />
    </div>
  )};
export default AssetChart;
