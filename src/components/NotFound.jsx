import React from "react";
import { useHistory, Link } from 'react-router-dom'

export default function NotFound() {
    const history = useHistory()

    return <div>
        <h2>Sorry</h2>
        <p>That page can not be found</p>
        <Link to='/'>Back to homepage</Link>
    </div>;
}
