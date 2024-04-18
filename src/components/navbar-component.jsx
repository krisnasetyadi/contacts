import React from "react"
import { AddCircleFilledIcon } from '../assets/icons'
import { useNavigate } from 'react-router-dom';
// import toast from "react-hot-toast"

function Navbar (props) {
    const navigate = useNavigate()

    return (
        <div className={`flex justify-between border-b border-b-gray-300 py-2 h-1/4 `}>
            <div className="flex items-end">
                <div className="font-bold text-2xl" >
                    Contacts
                </div>
            </div>
           
            <button type="button" className="h-34 md:h-20" onClick={() => navigate('/add')}>
                <img src={AddCircleFilledIcon} alt="Add button" className="h-34" />
            </button>
        </div>
    )
}


export default Navbar