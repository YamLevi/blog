import React, { useState } from "react";
import { useHistory } from 'react-router-dom'

export default function Create() {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory()


    const handleSubmit = (e) => {
        e.preventDefault();

        const blog = { title, body, author }

        setIsLoading(true);

        fetch('http://localhost:8000/blogs', {

            method: 'POST',

            headers: {

                'Content-Type': 'application/json'

            },

            body: JSON.stringify(blog)

        })

            .then(() => {
                console.log('new blog added!')
                setIsLoading(false)
                history.push('/')
            })

            .catch(error => console.log(error));
    }

    return <div className="create">
        <h2>Add a new blog</h2>
        <form onSubmit={handleSubmit} >
            <label >Blog title:</label>
            <input
                type="text"
                required
                value={title}
                onChange={(e) => { setTitle(e.target.value) }}
            />
            <label >Blog body:</label>
            <textarea
                required
                value={body}
                onChange={(e) => { setBody(e.target.value) }}
            ></textarea>
            <label>Blog author</label>
            <select
                // value=''
                onChange={(e) => { setAuthor(e.target.value) }}
            >
                <option >Select author</option>
                <option value="Yam">Yam</option>
            </select>
            {!isLoading && <button>Add blog</button>}
            {isLoading && <button disabled>Adding blog...</button>}
        </form>
    </div>;
}
