import { Bar } from 'react-chartjs-2';
import {
   Chart as ChartJS,
   CategoryScale,
   LinearScale,
   BarElement,
   Title,
   Tooltip,
   Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const data = {
   labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
   datasets: [
      {
         label: 'Прибыль',
         data: [20, 45, 60, 80, 100, 120],
         backgroundColor: [
            'rgba(75, 192, 192, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(153, 102, 255, 0.6)',
            'rgba(255, 159, 64, 0.6)',
         ],
         borderRadius: 10,
      },
   ],
};

const options = {
   responsive: true,
   plugins: {
      legend: {
         display: false,
      },
      title: {
         display: false,
      },
   },
   scales: {
      x: {
         grid: {
            display: false,
         },
         border: {
            display: false,
         },
      },
      y: {
         grid: {
            display: false,
         },
         ticks: {
            display: false,
         },
         border: {
            display: false,
         },
      },
   },
};

const CustomChart = () => <Bar data={data} options={options} />;

export default CustomChart;
