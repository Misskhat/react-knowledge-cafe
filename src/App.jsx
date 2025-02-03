import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header/Header";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0)
  const handleToReadingTime = (time, id) =>{
    let newReadingTime = readingTime + time;
    setReadingTime(newReadingTime);
    // remove bookmarks 
    const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id);
    setBookmarks(remainingBookmarks)
  }

  const handleToBookmarks = blog =>{
    const newBookmarks = [...bookmarks, blog]
    setBookmarks(newBookmarks)
  }
  return (
    <>
      <div className="container mx-auto">
        <Header></Header>
        <div className="md:flex justify-center">
          <Blogs handleToBookmarks={handleToBookmarks} handleToReadingTime={handleToReadingTime} ></Blogs>
          <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
        </div>
      </div>
    </>
  );
}

export default App;
