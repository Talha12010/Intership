import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useJobs } from '../context/JobContext';

export default function AddJob() {
    const [form, setForm] = useState({ company: '', title: '', status: 'Applied', date: '', notes: '' });
    const { addJob } = useJobs();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        addJob(form);
        navigate('/');
    };

    return (
        <div className="p-4 max-w-xl mx-auto">
            <h1 className="text-xl font-bold mb-4">Add Job Application</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input type="text" placeholder="Company" className="w-full p-2 border rounded" required
                    value={form.company} onChange={e => setForm({ ...form, company: e.target.value })} />
                <input type="text" placeholder="Job Title" className="w-full p-2 border rounded" required
                    value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} />
                <select className="w-full p-2 border rounded" value={form.status} onChange={e => setForm({ ...form, status: e.target.value })}>
                    <option>Applied</option>
                    <option>Interviewing</option>
                    <option>Offer</option>
                    <option>Rejected</option>
                </select>
                <input type="date" className="w-full p-2 border rounded" value={form.date} onChange={e => setForm({ ...form, date: e.target.value })} />
                <textarea placeholder="Notes" className="w-full p-2 border rounded" value={form.notes} onChange={e => setForm({ ...form, notes: e.target.value })}></textarea>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Save</button>
            </form>
        </div>
    );
}