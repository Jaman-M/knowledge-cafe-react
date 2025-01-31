import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from "prop-types";

const Blogs = ({handleAddBookmark, handleMarkAsRead}) => {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])

    return (
        <div className="w-2/3 mt-2">
            {/* <h2>This is blogs: {blogs.length}</h2> */}
            {
                blogs.map(blog => <Blog 
                    key={blog.id}
                    blog={blog}
                    handleAddBookmark={handleAddBookmark}
                    handleMarkAsRead={handleMarkAsRead}
                    ></Blog>)
            }
        </div>
    );
};

Blogs.prototypes = {
    handleAddBookmark: PropTypes.func,
    handleMarkAsRead: PropTypes.func
}

export default Blogs;