import { useState, useEffect} from 'react';
import BlogList from './blogList';
import useFetch from './useFetch';

const Home = () => {
    const {blogs}  = useFetch('http://localhost:8000/blogs');
    





    return (
        <div className="home">
          {blogs && <BlogList blogs={blogs} title="All Blogs!"/>   }      
        </div>
      );
}
 
export default Home;