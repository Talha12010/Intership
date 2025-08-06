import { useState } from "react";
import postsData from "./data/posts";
import Header from "./components/header";
import BlogList from "./components/bloglist";
import CategoryFilter from "./components/category";
import SearchBar from "./components/searchbar";
import './App.css';

function App() {
  const [category, setCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const visibleLimit = 10;

  const categories = ["All", "Tech", "Travel", "Food"];

  const filteredPosts = postsData
    .filter(post => 
      category === "All" || post.category === category
    )
    .filter(post => 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter(post => 
      post.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

  const visiblePosts = searchTerm ? filteredPosts : filteredPosts.slice(0, visibleLimit);

  return (
    <div>
      <Header />
      <SearchBar onSearch={setSearchTerm} />
      <CategoryFilter
        categories={categories}
        current={category}
        onSelect={setCategory}
      />
      <BlogList posts={visiblePosts} />
    </div>
  );
}

export default App;
