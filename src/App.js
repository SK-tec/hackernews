import "./App.css";
import PostsList from "./PostsList";
import { useState } from "react";
function App() {
  const [posts, setPosts] = useState([
    {
      id: 111,
      created_at: "2007-02-19T20:06:43.000Z",
      created_at_i: 1171915603,
      type: "story",
      author: "matt",
      title: "Add a little more random to your product",
      url: "http://headrush.typepad.com/creating_passionate_users/2007/01/add_a_little_mo.html",
      text: null,
      points: 9,
      parent_id: null,
      story_id: null,
      children: [
        {
          id: 454542,
          created_at: "2009-01-28T20:44:23.000Z",
          created_at_i: 1233175463,
          type: "comment",
          author: "Arrington",
          title: null,
          url: null,
          text: "<p>This is why we can't have nice things.</p>",
          points: null,
          parent_id: 111,
          story_id: 111,
          children: [],
          options: [],
        },
      ],
      options: [],
    },
    {
      id: 1,
      created_at: "2006-10-09T18:21:51.000Z",
      created_at_i: 1160418111,
      type: "story",
      author: "pg",
      title: "Y Combinator",
      url: "http://ycombinator.com",
      text: null,
      points: 61,
      parent_id: null,
      story_id: null,
      children: [
        {
          id: 454410,
          created_at: "2009-01-28T20:31:34.000Z",
          created_at_i: 1233174694,
          type: "comment",
          author: "Arrington",
          title: null,
          url: null,
          text: "<p>This is why we can't have nice things.</p>",
          points: null,
          parent_id: 1,
          story_id: 1,
          children: [],
          options: [],
        },
        {
          id: 82729,
          created_at: "2007-11-22T12:50:54.000Z",
          created_at_i: 1195735854,
          type: "comment",
          author: "vice",
          title: null,
          url: null,
          text: "<p>I'm nX 1 too</p><p>;)\n</p>",
          points: null,
          parent_id: 1,
          story_id: 1,
          children: [],
          options: [],
        },
      ],
    },
    {
      id: 11,
      created_at: "2006-10-09T19:24:44.000Z",
      created_at_i: 1160421884,
      type: "story",
      author: "frobnicate",
      title: "Participation Inequality: Encouraging More Users to Contribute",
      url: "http://www.useit.com/alertbox/participation_inequality.html",
      text: null,
      points: 1,
      parent_id: null,
      story_id: null,
      children: [
        {
          id: 454420,
          created_at: "2009-01-28T20:32:08.000Z",
          created_at_i: 1233174728,
          type: "comment",
          author: "Arrington",
          title: null,
          url: null,
          text: "<p>This is why we can't have nice things.</p>",
          points: null,
          parent_id: 11,
          story_id: 11,
          children: [],
          options: [],
        },
      ],
      options: [],
    },
  ]);
  return (
    <div className="App">
      <h1 style={{ color: "blue" }}>
        Welcome to <strong>Hacker News</strong> Project
      </h1>
      <div>
        <PostsList posts={posts} />
      </div>
    </div>
  );
}

export default App;
