export default function blog({ post }) {
    return (
      <div className="blog-card">
        <img src={post.image} alt={post.title} />
        <h3>{post.title}</h3>
        <p>{post.description}</p>
        <span>{post.date}</span>
      </div>
    );
  }
  