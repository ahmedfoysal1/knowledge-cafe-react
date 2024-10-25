import PropTypes from "prop-types";
import { FaRegBookmark } from "react-icons/fa6";

const Blog = ({ blog, handleAddBookmark, handleMarkAsRead}) => {
    const {id, title, cover, author, author_img, reading_time, posted_date, hashtags} = blog;
  return (
    <div className="mb-20 space-y-4">
        <img className="w-full h-80 mb-8" src={cover} alt={`Cover picture of the title ${title}`} />
        <div className="flex justify-between mb-4">
            <div className="flex">
            <img className="w-14 rounded-full" src={author_img} alt="" />
            <div className="ml-6">
                <h2 className="text-2xl">{author}</h2>
                <p>{posted_date}</p>
            </div>
            </div>
            <div>
                <span>{reading_time} min read</span> <button onClick={() => handleAddBookmark(blog)} className="ml-2 text-2xl text-red-400"><FaRegBookmark /></button>
            </div>
        </div>
        <h2 className="text-4xl">{title}</h2>
        <p>
            {
                hashtags.map((hash, idx) => <span key={idx}><a href="">{hash}</a></span>)
            }
        </p>
        <button onClick={() => handleMarkAsRead(id, reading_time)} className="text-blue-700 font-bold underline">Mark as read</button>
    </div>
  ); 
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddBookmark: PropTypes.func.isRequired,
  handleMarkAsRead: PropTypes.func.isRequired
};
export default Blog;
