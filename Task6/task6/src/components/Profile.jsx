export default function Profile() {
  return (
    <div>
      <h3 className="text-xl font-bold mb-4">Profile Settings</h3>
      <form className="space-y-4">
        <input type="text" placeholder="Enter the name" className="block w-full p-2 border rounded" />
        <input type="email" placeholder="Enter the email" className="block w-full p-2 border rounded" />
        <input type="password" placeholder="Enter the password"  className="block w-full p-2 border rounded" />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Update</button>
      </form>
    </div>
  );
}