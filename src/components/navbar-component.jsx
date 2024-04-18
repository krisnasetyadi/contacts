import React from "react"
import { AddCircleFilledIcon } from '../assets/icons'
import { useNavigate } from 'react-router-dom';
// import toast from "react-hot-toast"

function Navbar (props) {
    const navigate = useNavigate()

    return (
        <div className={`flex justify-between border-b border-b-gray-300 py-2 h-1/4 bg-yellow`}>
            <div className="font-bold text-xl" >
                Contacts
            </div>
            <button type="button" className="" onClick={() => navigate('/add')}>
                <img src={AddCircleFilledIcon} alt="Add button" />
            </button>
        </div>
    )
}


export default Navbar