import { Link } from "react-router-dom";
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import React from "react";


const BlogList = ({blogs, title}) => {
    return(
        <Row>
            <Col sm='3'>
                <Card body>
                <CardTitle tag="h5">Special Title Treatment</CardTitle>
                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                <Button>Go somewhere</Button>
                </Card>
            </Col>
        </Row>
    )

    
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