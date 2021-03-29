import { useState } from 'react'
/* import { Link, Route } from 'react-router-dom' */



const Blog = () => {
    const [blogs, setBlogs] = useState([
        {title: 'Nieuwe hondjes in Brussel!', body: 'lorem ipsum...', id:1},
        {title: 'Nieuwe hondjes in Limburg!', body: 'lorem ipsum...', id:2},
        {title: 'Nieuwe hondjes in Antwerpen!', body: 'lorem ipsum...', id:3}
    ]);

    return(
        <div className="blogPage">
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h3>{blog.title}</h3>
                    <p>{blog.body}</p>
                </div>
            ))}
        </div>
    );
}

export default Blog;

