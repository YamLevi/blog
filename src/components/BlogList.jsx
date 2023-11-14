import React from "react";
import { Link } from 'react-router-dom'

export default function BlogList(props) {
    const data = props.data
    const title = props.title

    return <div className="blogList">
        <h2>{title}</h2>
        {data.map((blog) => (
            <div
                className="blogPreview"
                key={blog.id}
            >
                <Link to={`/blogs/${blog.id}`}>
                    <h2>{blog.title}</h2>
                    <p>Written By: {blog.author}</p>
                </Link>
            </div>
        ))}
    </div>;
}
