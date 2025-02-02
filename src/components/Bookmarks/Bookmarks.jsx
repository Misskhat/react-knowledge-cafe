import Bookmark from "../Bookmark/Bookmark";
import PropTypes from 'prop-types';

const Bookmarks = ({bookmarks, readingTime}) => {
  return (
    <div className="w-1/3 p-4 space-x-2">
        <h3 className="text-xl font-bold border-2 border-purple-600 bg-purple-200 text-center rounded-xl p-2 space-y-2">Spent Time On Read: {readingTime}</h3>
      <div className="bg-slate-200 rounded-xl p-4 border-2 font-bold border-gray-600 mt-2">
        <h3>BooksMarks Blogs: {bookmarks.length} </h3>
        <div>
            {
              bookmarks.map(bookmark => <Bookmark key={bookmark.id}  bookmark={bookmark}></Bookmark>)
            }
        </div>
      </div>
    </div>
  );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.object.isRequired,
    readingTime: PropTypes.number
}

export default Bookmarks;
