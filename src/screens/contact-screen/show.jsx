import React, { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { connect } from "react-redux"
import toast from "react-hot-toast"
import { ContactApi } from "../../services"
import HeaderContactDetail from "../../components/header-contact-detail"
import InputReadOnly from "../../components/input-read-only-component"
import { getContactDetailRequest, getContactDetailSuccess, getContactDetailFailure } from '../../stores/actions/index'
import { capitalize } from "../../utils/helper"
import Image from "../../components/image-component"

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
                <Image image={data?.photo} alt={`${data?.firstName}-contact`} />
             </div>
             <div>
                <InputReadOnly name="age" value={`${data?.age || ''}` }/>
             </div>
             <div className="flex flex-col justify-center gap-2">
                <InputReadOnly name="firstName" value={`${capitalize(data?.firstName) || ''} ${capitalize(data?.lastName) || ''}`}/>
          
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