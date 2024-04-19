import React from "react"

function Loading(props) {
    const { text='Loading...', visible=false } = props

    return visible && (
        <div className="flex flex-col fixed inset-0 bg-gray-300 opacity-75 justify-center items-center gap-10">
            <div 
                className="animate-spin h-10 w-10 mr-3 border-indigo-500 border-t-1 border-b-2 rounded-full "
            >
            </div> 
            <span>{text}</span> 
            
        </div>
       
    )
}

export default Loading