import NotificationDropdown from './NotificationDropdown';
export default function Header() {
  return (
    <div className="bg-white shadow p-4 flex justify-between items-center">
      <h2 className="text-2xl font-semibold">Client Dashboard</h2>
      <NotificationDropdown/>
    </div>
  );
}