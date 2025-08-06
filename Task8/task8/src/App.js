import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import AddJob from './pages/AddJob';
import JobDetails from './pages/JobDetails';
import { JobProvider } from './context/JobContext';

export default function App() {
  return (
    <JobProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/add" element={<AddJob />} />
          <Route path="/job/:id" element={<JobDetails />} />
        </Routes>
      </Router>
    </JobProvider>
  );
}