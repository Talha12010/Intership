import BlogCard from "./blogcard"; // ✅ matches your file name

export default function BlogList({ posts }) {
  if (posts.length === 0) {
    return (
      <p style={{ textAlign: "center", padding: "40px" }}>
        No posts found 😢
      </p>
    );
  }

  return (
    <div className="blog-grid">
      {posts.map(post => (
        <BlogCard key={post.id} post={post} />
      ))}
    </div>
  );
}
