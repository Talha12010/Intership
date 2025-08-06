import { useParams, useNavigate } from 'react-router-dom';
import { useJobs } from '../context/JobContext';
import { useState } from 'react';

export default function JobDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { jobs, deleteJob, updateJob } = useJobs();
    const job = jobs.find(j => j.id === id);

    const [edit, setEdit] = useState(false);
    const [form, setForm] = useState(job);

    const handleUpdate = () => {
        updateJob(id, form);
        setEdit(false);
    };

    if (!job) return <p className="p-4">Job not found</p>;

    return (
        <div className="p-4 max-w-xl mx-auto">
            <h1 className="text-xl font-bold mb-4">Job Details</h1>
            {edit ? (
                <div className="space-y-4">
                    <input type="text" className="w-full p-2 border" value={form.company} onChange={e => setForm({ ...form, company: e.target.value })} />
                    <input type="text" className="w-full p-2 border" value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} />
                    <select className="w-full p-2 border" value={form.status} onChange={e => setForm({ ...form, status: e.target.value })}>
                        <option>Applied</option>
                        <option>Interviewing</option>
                        <option>Offer</option>
                        <option>Rejected</option>
                    </select>
                    <input type="date" className="w-full p-2 border" value={form.date} onChange={e => setForm({ ...form, date: e.target.value })} />
                    <textarea className="w-full p-2 border" value={form.notes} onChange={e => setForm({ ...form, notes: e.target.value })}></textarea>
                    <button onClick={handleUpdate} className="bg-blue-500 text-white px-4 py-2 rounded">Update</button>
                </div>
            ) : (
                <div className="space-y-2">
                    <p><strong>Company:</strong> {job.company}</p>
                    <p><strong>Title:</strong> {job.title}</p>
                    <p><strong>Status:</strong> {job.status}</p>
                    <p><strong>Date:</strong> {job.date}</p>
                    <p><strong>Notes:</strong> {job.notes}</p>
                    <div className="flex gap-4 mt-4">
                        <button onClick={() => setEdit(true)} className="bg-yellow-400 px-4 py-2 rounded">Edit</button>
                        <button onClick={() => { deleteJob(id); navigate('/'); }} className="bg-red-500 text-white px-4 py-2 rounded">Delete</button>
                    </div>
                </div>
            )}
        </div>
    );
}
