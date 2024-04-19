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
                setData(data.sort())
                getContactListSuccess()
            })
            .catch(error => {
                toast.error(error.message || 'something went wrong')
                getContactListFailure()
            })
    }, [])
    
    const groupContacts = () => {
        const groupContacts = {}
        data.forEach((contact) => {
            const firstLetter = contact.firstName.charAt(0).toUpperCase()
            if(!groupContacts[firstLetter]) {
                groupContacts[firstLetter] = [];
            }
            groupContacts[firstLetter].push(contact)
        })
        return groupContacts
    }
    
    const groupedContact = groupContacts() 

    return (
        <Content>
           <ul>
                {Object.keys(groupedContact).map((letter) => {
                    return (
                        <div key={letter}>
                            <span className="text-xl font-bold text-gray-600">{letter}</span>
                      
                                {groupedContact[letter].map((item) => {
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
                          
                        </div>
                  
                    )
                }) }
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