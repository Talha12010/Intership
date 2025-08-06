const plans = [
    { name: 'Free', price: '$0', features: ['Basic Tasks', 'Reminders'] },
    { name: 'Pro', price: '$5/month', features: ['Advanced Scheduling', 'Team Support'] },
    { name: 'Team', price: '$15/month', features: ['Multi-user Access', 'Shared Boards'] },
  ];
  
  export default function price() {
    return (
      <section className="price">
        <h2>Pricing</h2>
        <div>
          {plans.map((plan, i) => (
            <div key={i} className={`plan ${plan.name === 'Pro' ? 'pro' : ''}`}>
              <h3>{plan.name}</h3>
              <p>{plan.price}</p>
              <ul>
                {plan.features.map((f, j) => (
                  <li key={j}> • {f}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    );
  }
  