import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        <div className="md:w-1/3 bg-gray-300 ml-4 mt-2 pt-4">
            {/* <h3>Reading Time {readingTime}</h3> */}
            <h3 className="text-xl font-semibold text-gray-800">Total Reading Time: <span className="text-blue-600">{readingTime} min</span></h3>
            {/* <h2 className="text-3xl text-center">Bookmarked Blogs: {bookmarks.length}</h2> */}
            <h2 className="text-2xl font-bold text-center text-gray-900 my-4">Bookmarked Blogs: {bookmarks.length}</h2>
            {
                bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

Bookmarks.proptypes ={
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}

export default Bookmarks;