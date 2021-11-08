import React from "react"
import { Link } from "react-router-dom";



function Home() {
    return (
        <div>
            home page
            <nav>
                <Link to="/">Index Page</Link>
            </nav>
        </div>
    )

}
export default Home