import React from "react";
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className="navbar">
            <h1>The New Blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create" id="newBlogButton">New Blog</Link>
            </div>
        </nav>
    )
}
