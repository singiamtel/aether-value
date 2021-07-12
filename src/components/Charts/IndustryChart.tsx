import { Doughnut } from 'react-chartjs-2';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { emptyPortfolio, emptyTransactions } from '../../models/emptyModels';
import { State } from '../../store/reducers';
import { actionCreators } from '../../store/store';


const IndustryChart = () => {

/* Acceso a la tienda */
let portfolio = useSelector((state:State) => state.portfolio)
let totalPortfolio = useSelector((state:State) => state.portfolioTotal)


/* Usamos un portfolio vacío mientras se resuelve la request*/
if(portfolio == undefined)
portfolio = emptyPortfolio


/* Emulamos un diccionario */
const dict: any = {}
const labels = []
const data = []

/* Rellenamos las industrias */
portfolio.forEach((stock) => (
  (dict[stock.api.meta.type] === undefined) ? dict[stock.api.meta.type]=((parseFloat(stock.api.values[0].close)*stock.amount)/totalPortfolio * 100) : dict[stock.api.meta.type]+=((parseFloat(stock.api.values[0].close)*stock.amount)/totalPortfolio * 100))
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

export default IndustryChart;
