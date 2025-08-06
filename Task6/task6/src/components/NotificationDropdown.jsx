import { useState } from 'react';

export default function NotificationDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const notifications = [
    'New message from client',
    'Payment received',
    'deadlines'
  ];
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="bg-gray-200 px-4 py-2 rounded"
      >
        Notifications
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-white border rounded shadow-md z-50">
          <ul>
            {notifications.map((note, idx) => (
              <li
                key={idx}
                className="px-4 py-2 border-b hover:bg-gray-100"
              >
                {note}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
