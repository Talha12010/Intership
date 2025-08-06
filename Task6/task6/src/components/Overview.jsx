import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale } from 'chart.js';
ChartJS.register(BarElement, CategoryScale, LinearScale);

export default function Overview() {
  const data = {
    labels: ['Jan', 'Feb', 'Mar'],
    datasets: [{ label: 'Earnings', data: [1200, 1900, 3000], backgroundColor: 'black' }]
  };

  return (
    <div>
      <h3 className="text-xl font-bold mb-4">Overview</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 shadow rounded">Total Projects: 12</div>
        <div className="bg-white p-4 shadow rounded">Tasks Due: 5</div>
        <div className="bg-white p-4 shadow rounded">Earnings: $5300</div>
      </div>
      <div className="mt-6">
        <h4 className="text-lg font-semibold">Monthly Earnings</h4>
        <Bar data={data} />
      </div>
    </div>
  );
}
