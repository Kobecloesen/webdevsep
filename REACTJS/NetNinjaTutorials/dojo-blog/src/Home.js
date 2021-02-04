import { useState } from 'react';
import BlogList from './blogList';

const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: 'eerste brainstorm', body: 'Lorem Ipsum...', author:'Kobe', id: 1},
        {title: 'tweede brainstorm', body: 'Lorem Ipsum...', author:'Joty', id: 2},
        {title: 'derde brainstorm', body: 'Lorem Ipsum...', author:'Kobe', id: 3}
    ])

const handleDelete = (id) => {
    
}

    return (
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs!"/>
            <BlogList blogs={blogs.filter((blog) => blog.author === 'Kobe' )} title="Kobe's Blogs!"/>
        </div>
      );
}
 
export default Home;