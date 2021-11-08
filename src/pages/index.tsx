import React from "react"

import { Link } from "react-router-dom";

function Index() {
    return (
        <div>
            Index page
            <nav>
                <Link to="/home">Home Page</Link>
            </nav>
        </div>
    )

}
export default Index