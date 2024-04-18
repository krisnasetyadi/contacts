import React from "react"
import Navbar from "../components/navbar-component"

function Content (props) {
    const { children } = props

    return (
        <div className="flex flex-col m-10 md:m-6">
            <Navbar />
            <div className="w-full flex justify-center">
               {children}
            </div>
        </div>
    )
}

export default Content