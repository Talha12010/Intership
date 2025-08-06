import { createContext, useContext, useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';

const JobContext = createContext();

export const JobProvider = ({ children }) => {
  const [jobs, setJobs] = useState(() => {
    const saved = localStorage.getItem('jobs');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('jobs', JSON.stringify(jobs));
  }, [jobs]);

  const addJob = (job) => {
    setJobs([...jobs, { ...job, id: uuid() }]);
  };

  const updateJob = (id, updatedJob) => {
    setJobs(jobs.map((job) => (job.id === id ? { ...updatedJob, id } : job)));
  };

  const deleteJob = (id) => {
    setJobs(jobs.filter((job) => job.id !== id));
  };

  const exportJobs = () => {
    const blob = new Blob([JSON.stringify(jobs)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'job-applications.json';
    a.click();
  };

  const importJobs = (importedJobs) => {
    setJobs(importedJobs);
  };

  return (
    <JobContext.Provider value={{ jobs, addJob, updateJob, deleteJob, exportJobs, importJobs }}>
      {children}
    </JobContext.Provider>
  );
};

export const useJobs = () => useContext(JobContext);
