import "./App.css";
import PostsList from "./PostsList";
import Header from "./components/Header";
import Searchbar from "./components/Searchbar";
import Footer from "./components/Footer";


import { useState } from "react";
function App() {
  const [news, setNews] = useState([]);

  return (
    <div className="App">
     <Header />
      <h1 style={{ color: "blue" }}>
        Welcome to <strong>Hacker News</strong>
      </h1>
      <div>
       
        <Searchbar news={news} setNews={setNews} />
        <PostsList news={news} />        
      </div>
      <Footer />
    </div>
  );
}

export default App;
