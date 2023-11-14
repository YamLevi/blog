import React from "react";
import { useParams, useHistory } from 'react-router-dom'
import useFetch from "./useFetch";

export default function BlogDetails() {

    const { id } = useParams();
    const { data, error, isLoading } = useFetch('http://localhost:8000/blogs/' + id)
    const history = useHistory()


    const handleClick = () => {
        fetch('http://localhost:8000/blogs/' + data.id, {
            method: 'DELETE'
        })
            .then(() => {
                history.push('/')
            })
    }

    return <div className="blogDetails">
        {isLoading && <div>Loading...</div>}
        {error && <div>{error}</div>}
        {data && (
            <article>
                <h2>{data.title}</h2>
                <p>written By {data.author}</p>
                <div>{data.body}</div>
                <button onClick={handleClick}>Delete</button>
            </article>
        )}
    </div>;
}
