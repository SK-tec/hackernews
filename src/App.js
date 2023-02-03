import "./App.css";
import PostsList from "./PostsList";
import Header from "./components/Header";
import Searchbar from "./components/Searchbar";
import Footer from "./components/Footer";

import { useState } from "react";
function App() {
  const [news, setNews] = useState([]);

  return (
    <div className="App ">
      <Header />
      <div>
        <Searchbar news={news} setNews={setNews} />
        <PostsList news={news} />
      </div>
      <Footer content={news.length} />
    </div>
  );
}

export default App;
