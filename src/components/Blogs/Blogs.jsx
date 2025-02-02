import { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import PropTypes from 'prop-types';

const Blogs = ({handleToBookmarks, handleToReadingTime}) => {
    const[blogs, setBlogs] = useState([])
    useEffect(() => {
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <div className='w-2/3 p-4 space-x-2'>
            <h2 className="text-2xl font-bold">Blogs = {blogs.length}</h2>
            {
                blogs.map(blog => <Blog key={blog.id} blog={blog} handleToBookmarks={handleToBookmarks} handleToReadingTime={handleToReadingTime} ></Blog>)
            }
        </div>
    );
};

Blogs.propTypes = {
    handleToBookmarks: PropTypes.func.isRequired,
    handleToReadingTime: PropTypes.func.isRequired
}

export default Blogs;
