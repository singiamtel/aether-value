import { Doughnut } from 'react-chartjs-2';

const stockList = [
  {
    industry:"Real Estate",
    price: 20.64,
    quantity: 7
  },
  {
    industry:"Real Estate",
    price: 50,
    quantity: 11
  },
  {
    industry:"Gold Royalties",
    price: 8.4,
    quantity: 14
  },
  {
    industry:"Ecommerce",
    price: 217.04,
    quantity: 3
  },
  {
    industry:"Ecommerce",
    price: 64.07,
    quantity: 3
  },
  {
    industry:"Online Advertising",
    price: 326.04,
    quantity: 2
  },
  {
    industry:"Cryptocurrency",
    price: 38794.50,
    quantity: 0.01671182
  },
  
]

/* Emulamos un diccionario */
const dict: any = {}
const labels = []
const data = []

/* Rellenamos las industrias */
stockList.forEach((stock) => (
  (dict[stock.industry] === undefined) ? dict[stock.industry]=(stock.price*stock.quantity) : dict[stock.industry]+=(stock.price*stock.quantity)

  )
)

/* Recorremos nuestro diccionario */
for(let key in dict) {
  labels.push(key)
  data.push(dict[key])
}

/* Formateamos para poder hacer la gráfica */
const dataList = {
  labels: labels,
  datasets: [
    {
      data: data,
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const IndustryChart = () => {
  return (
    <div>
      <div className='text-center'>
        <h1>Industry Diversification</h1>
      </div>
      <Doughnut
        type="doughnut"
        data={dataList}
      />
    </div>
  )};

export default IndustryChart;
