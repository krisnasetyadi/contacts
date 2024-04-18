import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import Card from "../../components/card-component";
import Content from '../layout'
import { ContactApi } from '../../services/index'

function IndexScreen() {
    const [data, setData] = useState([])
    const [isLoadig, setIsLoading] = useState(false)
    const navigate = useNavigate()
    
    useEffect(() => {
        setIsLoading(true)
        ContactApi.get()
            .then(({ data }) => {

                setData(data)
                setIsLoading(false)
            })
            .catch(error => {
                toast.error(error.message || 'something went wrong')
                setIsLoading(false)
            })
    }, [])

    return (
        <Content>
            {isLoadig ? 'Loading ...' : ''}
            <ul>
                {data.length > 0 && data?.map((item) => {
                    const { firstName, lastName, photo, id } = item
                    return (
                        <li className='flex justify-center border-b border-b-gray-400 hover:bg-blue-100 rounded-md' onClick={() => navigate(`${id}/show`)}>
                            <Card
                                key={id} 
                                firstName={firstName}
                                lastName={lastName}
                                photo={photo}
                            />
                        </li>
                    )
                })}
            </ul>
         
        </Content>
    )
}

export default IndexScreen