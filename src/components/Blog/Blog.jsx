import PropTypes from 'prop-types';
import { MdOutlineBookmarks } from "react-icons/md";

const Blog = ({blog, handleToBookmarks, handleToReadingTime}) => {
    const {cover_photo, author_name, author_img, posted_date, reading_time, post_headline, hashtags } = blog;

    return (
        <div className='space-y-3 mt-3'>
           <img className='w-full rounded-2xl' src={cover_photo} alt="" />
            <div className='md:flex justify-between items-center'>
                <div className='md:flex items-center'>
                    <img className='w-14' src={author_img} alt={`this is an ${author_img}`} />
                    <div className='ml-4'> 
                        <h6 className="text-xl">{author_name}</h6>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className='space-x-2 flex items-center'>
                    <span>{reading_time}</span>min read 
                    <button className='text-xl' onClick={()=>handleToBookmarks(blog)}><MdOutlineBookmarks /></button>
                </div>
            </div>
            <h2 className="text-5xl font-bold">{post_headline}</h2>
            <p>
            {
                hashtags.map((has, idx) => <span className='ml-2' key={idx}>#{has}</span>)
            }
            </p>
            <button className='border rounded-xl bg-amber-600 p-3 hover:bg-amber-800' onClick={()=>handleToReadingTime(reading_time)}>Mark As Read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleToBookmarks: PropTypes.func.isRequired,
    handleToReadingTime: PropTypes.func.isRequired
}

export default Blog;