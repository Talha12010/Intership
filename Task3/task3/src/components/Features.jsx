const features = [
    { icon: '📅', title: 'Smart Scheduling', desc: 'Auto-prioritize your day.' },
    { icon: '✅', title: 'Task Clarity', desc: 'Visualize your progress.' },
    { icon: '🔔', title: 'Reminders', desc: 'Stay ahead with timely alerts.' }
  ];
  
  export default function Features() {
    return (
      <section className="features">
        <h2>Features</h2>
        <div className="feature-grid">
          {features.map((feat, i) => (
            <div key={i} className="feature-card">
              <div className="icon">{feat.icon}</div>
              <h3>{feat.title}</h3>
              <p>{feat.desc}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }

  


  