import { Bar } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import { State } from '../../store/reducers';



const NetWorthChart = () => {


/* Formateamos para poder hacer la gráfica */
const dataList = {
  labels: ['2020', '2021','Now'],
  datasets: [
    {
      label: 'Net Worth (€)',
      data: [140, 1410, 2873],
      backgroundColor: [
        '#2E8B57',

      ],
      borderColor: [
        '#2E8B57',

      ],
      borderWidth: 1,
    },
  ],
};

const options = {
    scales: {
        yAxes: [
        {
            ticks: {
                beginAtZero: true,
            },
        },
        ],
    },
    plugins: {
        legend: {
            display: false,
        }
    }
};

return (
  <>
    <div>
      <div className='text-center text-black'>
        <h1>Net worth per year</h1>
      </div>
    </div>
    <Bar data={dataList} type="bar" options={options} />
  </>
)};
export default NetWorthChart;
