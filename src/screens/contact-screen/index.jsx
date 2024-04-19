import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { connect } from "react-redux"
import Card from "../../components/card-component";
import Content from '../layout'
import { ContactApi } from '../../services/index'
import { getContactListRequest, getContactListSuccess, getContactListFailure } from '../../stores/actions/index'
import { isBas64, isImage } from "../../utils/helper";
import { UserCircleIcon } from "../../assets/icons";

function IndexScreen(props) {
    const { getContactListRequest, getContactListSuccess, getContactListFailure} = props
    const [data, setData] = useState([])
    const navigate = useNavigate()
    
    useEffect(() => {
        getContactListRequest()
        ContactApi.get()
            .then(({ data }) => {
                setData(data)
                getContactListSuccess()
            })
            .catch(error => {
                toast.error(error.message || 'something went wrong')
                getContactListFailure()
            })
    }, [])

    return (
        <Content>
            <ul>
                {data.length > 0 && data?.map((item) => {
                    const { firstName, lastName, photo, id } = item
                    return (
                        <li className='flex justify-center border-b border-b-gray-400 hover:bg-blue-100 rounded-md' onClick={() => navigate(`${id}/show`)}>
                            <Card
                                key={id} 
                                firstName={firstName}
                                lastName={lastName}
                                photo={isImage(photo) ? photo : isBas64(photo) ? photo : UserCircleIcon}
                            />
                        </li>
                    )
                })}
            </ul>
         
        </Content>
    )
}

const dispatchToProps = {
    getContactListRequest,
    getContactListSuccess,
    getContactListFailure, 
};
export default connect(null, dispatchToProps)(IndexScreen)