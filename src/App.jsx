import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header/Header";

function App() {
  const [bookmarks, setBookmarks] = useState([])
  
    const handleToBookMark = bookmark =>{
      console.log('bookmark comming soon')
    }
  return (
    <>
      <div className="container mx-auto">
        <Header></Header>
        <div className="md:flex justify-center">
          <Blogs></Blogs>
          <Bookmarks></Bookmarks>
        </div>
      </div>
    </>
  );
}

export default App;
