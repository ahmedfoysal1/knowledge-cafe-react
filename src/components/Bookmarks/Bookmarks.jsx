
import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        <div className="md:w-1/3 bg-gray-100 ml-4 mt-2 rounded-lg p-1">
            <div className="text-center my-4 border border-sky-200 rounded-lg p-4 w-11/12 mx-auto bg-white">
                <h3 className="text-3xl">Reading Time : {readingTime} min</h3>
            </div>
            <h2 className="text-3xl text-center">Bookmarked Blogs : {bookmarks.length}</h2>
            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired,
    readingTime: PropTypes.number
}

export default Bookmarks;