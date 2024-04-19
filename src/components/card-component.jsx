import React from "react"
import Image from "./image-component"

function Card(props) {
    const { firstName, lastName, photo} = props

    return (
        <div className={`flex border-gray-200 rounded-md w-full h-20 items-center`}>
            <div className="flex justify-center rounded-full items-center" >
                <Image image={photo} alt={`${firstName}-contact`}/>
            </div>
            <div className="ml-5 flex justify-center items-center">
                <div className="font-bold py-2">{firstName} {lastName}</div>
            </div>
        </div>
    )
}

export default Card