import React, { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { connect } from "react-redux"
import toast from "react-hot-toast"
import { ContactApi } from "../../services"
import { UserCircleIcon } from "../../assets/icons"
import HeaderContactDetail from "../../components/header-contact-detail"
import InputReadOnly from "../../components/input-read-only-component"
import { getContactDetailRequest, getContactDetailSuccess, getContactDetailFailure } from '../../stores/actions/index'
import { isBas64, isImage } from "../../utils/helper"

function ShowScreen(props) {
    const { getContactDetailRequest, getContactDetailSuccess, getContactDetailFailure } = props
    const { id } = useParams()
    const [data, setData] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        getContactDetailRequest()
        ContactApi.find(id)
            .then(({ data }) => {
                setData(data)
                getContactDetailSuccess()
            })
            .catch(error => {
                getContactDetailFailure()
                toast.error(error.message || 'Something went wrong')
            })
    }, [])

    return (
        <div className="flex flex-col justify-center items-center">
             <HeaderContactDetail title="Contact Detail" submitText="Edit" onClick={() => navigate(`/${id}/edit`) }/>
             <div className="flex justify-center rounded-full items-center my-1.5" >
                <img 
                    src={isImage(data?.photo) ? data.photo : isBas64(data.photo) ? data.photo  : UserCircleIcon} 
                    alt={`${data?.firstName}-contact`} 
                    className="rounded-full h-14 w-14" 
                />
             </div>
             <div>
                <InputReadOnly name="age" value={`${data?.age || ''}` }/>
             </div>
             <div className="flex flex-col justify-center gap-2">
                <InputReadOnly name="firstName" value={`${data?.firstName || ''} ${data?.lastName || ''}`}/>
          
            </div>
            
           
        </div>
    )
}
const dispatchToProps = {
    getContactDetailRequest,
    getContactDetailSuccess,
    getContactDetailFailure, 
  };
  
export default connect(null, dispatchToProps)(ShowScreen)