export default function Projects() {
    const projects = [
      { name: 'Website Redesign', status: 'In Progress', deadline: '2025-08-15' },
      { name: 'Mobile App', status: 'Completed', deadline: '2025-07-30' }
    ];
    return (
      <div>
        <h3 className="text-xl font-bold mb-4">Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project, idx) => (
            <div key={idx} className="bg-white p-4 shadow rounded">
              <h4 className="font-semibold">{project.name}</h4>
              <p>Status: {project.status}</p>
              <p>Deadline: {project.deadline}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }