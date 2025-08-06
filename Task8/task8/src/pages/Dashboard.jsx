import { Link } from 'react-router-dom';
import { useJobs } from '../context/JobContext';

export default function Dashboard() {
  const { jobs, exportJobs, importJobs } = useJobs();

  const handleImport = (e) => {
    const fileReader = new FileReader();
    fileReader.onload = () => {
      const data = JSON.parse(fileReader.result);
      importJobs(data);
    };
    fileReader.readAsText(e.target.files[0]);
  };

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Job Applications</h1>
      <div className="flex justify-between mb-4">
        <Link to="/add" className="bg-blue-500 text-white px-4 py-2 rounded">Add Job</Link>
        <div className="flex gap-2">
          <button onClick={exportJobs} className="bg-green-500 text-white px-4 py-2 rounded">Export</button>
          <input type="file" accept="application/json" onChange={handleImport} className="bg-white border p-2 rounded" />
        </div>
      </div>
      <ul className="space-y-2">
        {jobs.map(job => (
          <li key={job.id} className="border p-3 rounded shadow">
            <Link to={`/job/${job.id}`} className="font-semibold">{job.company} - {job.title}</Link>
            <p>Status: {job.status}</p>
            <p>Date: {job.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
