import { Link } from "react-router-dom";

const BlogList = ({blogs, title}) => {


    return ( 
        <div class="container-fluid">
           <div class="row">
               <div class="col-xs-12 col-md-6 col-lg-3">
                   <div class="card">
                       <img class="card-img-top" src="http://placehold.it/250x150" alt="card image cap"></img>
                       <div class="card-block">     
                        <h4 class="card-title" >card title</h4>
                        <p class="card-text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                       </div>
                    <div class="card-footer">
                        <small class="text-muted">Last updated 3 minutes ago</small>
                    </div>
                   </div>
               </div>
           </div>
        </div>
     );
}

{/* <div className="blog-list">
<h2>{ title } </h2>
{blogs.map((blog) => (
    <div className="blog-preview" key={blogs.id}>
        <Link to={`/blogs/${blog.id}`}>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
        </Link>


    </div>
))} */}
 
export default BlogList;