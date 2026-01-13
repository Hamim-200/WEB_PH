import { useState,useEffect } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({ handleBookMark }) => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    return (
        <div className="md:w-2/3">
            <h1 className="text-4xl">Blogs: {blogs.length}</h1>
            <div className='all-blogs grid grid-cols-2'>
                {
                    blogs.map((blog) => <Blog key={blog.id} blog={blog} handleBookMark={handleBookMark}></Blog>)
                }

            </div>
        </div>
    );
};
export default Blogs;