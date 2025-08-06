import { Link } from 'react-router-dom';
export default function Sidebar() {
  return (
    <div className="w-64 bg-gray-800 text-white p-4 space-y-4">
      <h1 className="text-xl font-bold">Dashboard</h1>
      <nav className="space-y-2">
        <Link to="/" className="block">Overview</Link>
        <Link to="/projects" className="block">Projects</Link>
        <Link to="/profile" className="block">Profile</Link>
      </nav>
    </div>
  );
}