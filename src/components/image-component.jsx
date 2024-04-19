import React from "react"
import { isBas64, isFileImage, isImage } from "../utils/helper"
import { UserCircleIcon } from "../assets/icons"

function Image(props) {
    const { image, alt='' } = props

    const renderImage = () => {
        if(isImage(image) ||  isBas64(image)) {
            if(isFileImage(image)) {
                return UserCircleIcon
            }
            return image
        } else {
            return UserCircleIcon
        }
    }
    return (
        <img 
            src={renderImage()} 
            alt={alt} 
            className="rounded-full h-14 w-14" 
        />
    )
}

export default Image