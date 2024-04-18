import React from "react"
import { useNavigate } from "react-router-dom"
import { LeftArrowIcon } from "../assets/icons"

function HeaderContactDetail (props) {
    const { submitDisable, title='' } = props

    const navigate = useNavigate()
    
    return (
        <div className="flex justify-between items-center w-5/6 h-14">
            <button onClick={(e) => { e.preventDefault(); navigate(-1)}}>
                <img src={LeftArrowIcon} alt="back icon" />
            </button>

            <div className="font-bold">
                {title}
            </div>
            <button className="text-blue-800 font-semibold disabled:text-blue-400" disabled={submitDisable}>
                Save
            </button>
        </div>
    )
}

export default HeaderContactDetail