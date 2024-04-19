import React, { useEffect, useState } from "react"
import toast from "react-hot-toast";
import { connect } from "react-redux";
import * as yup from "yup";
import { ContactApi } from "../../services";

import HeaderContactDetail from "../../components/header-contact-detail"
import Input from "../../components/input-component"
import Modal from "../../components/modal-component"
import { UserCircleIcon } from "../../assets/icons";
import { useNavigate, useParams } from "react-router-dom";
import { 
  updateContactRequest,
  getContactDetailRequest, 
  removeContactRequest,
  updateContactSuccess,
  getContactDetailSuccess, 
  removeContactSuccess,
  updateContactFailure,
  getContactDetailFailure,
  removeContactFailure
} from '../../stores/actions/index'

const schema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    age: yup
      .string()
      .test('age', 'age must be a positive number', value => {
        console.log('valueee', value)
        return Number(value) > 0
      })
      .test('age', 'age length must be same or less than two', value => {
        return value.length <= 2 
      })
      .required(),
    photo: yup.string().required(),
  });

const intialData = {
    firstName: '',
    lastName: '',
    age: '',
    photo: ''
}

function EditScreen (props) {
    const {
      updateContactRequest,
      getContactDetailRequest,
      getContactDetailSuccess,
      updateContactSuccess, 
      getContactDetailFailure,
      updateContactFailure,
      isLoading,
    } = props
    const { id } = useParams()
    const navigate = useNavigate()
    const [data, setData] = useState(intialData)
    const [fields, setFields] = useState(intialData);
    const [errors, setErrors] = useState(intialData)
    const [openModal, setOpenModal] = useState(false)
    const validateForm = Object.values(fields).every(value => value !== '');

    useEffect(() => {
      getContactDetailRequest()
      ContactApi.find(id)
        .then(({ data }) => {
          setData({
            age: data.age,
            firstName: data.firstName,
            lastName: data.lastName,
            photo: data.photo
          })
          getContactDetailSuccess()
        })
        .catch(error => {
          toast.error(error.message || 'Something went wrong')
          getContactDetailFailure()
        })
    }, [])

    useEffect(() => {
      setFields(data)
    }, [data])
    
    const handleChange = (e) => {
        const { name, value } = e.target

        setFields(prev => ({
            ...prev,
            [name]: name === 'age' ? Number(value) : value
        }))    
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        updateContactRequest()
        schema
        .validate(fields, { abortEarly: false })
        .then(() => {
          ContactApi.update(id, fields)
            .then(() => {
              setErrors(intialData)
              navigate(`/${id}/show`)
              toast.success("New contact successfully created!");
              updateContactSuccess()
            })
            .catch((error) => {
              toast.error(
                error.message || "An error occurred. Please check your inputs!"
              );
              updateContactFailure()
            });
        })
        .catch((err) => {
          const newErrors = {};
  
          err.inner.forEach((e) => {
            newErrors[e.path] = e.message;
          });
          setErrors(newErrors);
          updateContactFailure()
        });
    }

    const handleDeleteContact = (e) => {
      e.preventDefault()
      removeContactRequest()

      ContactApi.delete(id)
        .then(() => {
          removeContactSuccess()
          setOpenModal(false)
          navigate('/')
        })
        .catch(error => {
          toast.error(error.message || 'Something went wrong')
          removeContactFailure()
        })
    }

    return (
      <>
      <Modal 
        isOpen={openModal} 
        onClose={() => setOpenModal(false)} 
        title='Delete Contact' 
        onSave={handleDeleteContact}
        submitButton= {{
          class: 'bg-white border-2 border-red-400 text-red-500 hover:bg-red-300',
          text: isLoading ? 'Loading ... ' : 'Delete'
        }}
      >
        Are you sure want to Delete <span className="font-bold">{data.firstName} {data.lastName}</span> from contact ?
      </Modal>
        <form className="flex flex-col justify-center items-center" onSubmit={handleSubmit}>
            <HeaderContactDetail title="New Contact" submitDisable={!validateForm} />
            <div className="flex justify-center rounded-full items-center my-1.5" >
                <img 
                    src={fields.photo.includes('http') ? fields.photo : UserCircleIcon} 
                    alt={`${fields.firstName}-contact`} 
                    className="rounded-full h-14 w-14" 
                />
            </div>
            <div className="flex flex-col gap-2">
                <Input 
                    name='firstName' 
                    placeholder='First name'
                    value={fields?.firstName || ''}
                    onChange={handleChange}
                    errors={errors}
                />
                <Input 
                    name='lastName' 
                    placeholder='Last name'
                    value={fields?.lastName || ''}
                    onChange={handleChange}
                    errors={errors}
                />
                <Input
                    name="age"
                    placeholder="Age"
                    value={fields?.age || ''}
                    onChange={handleChange}
                    errors={errors}
                />
                <Input
                    name="photo"
                    placeholder="Photo"
                    value={fields?.photo || ''}
                    onChange={handleChange}
                    errors={errors}
                />
              <button 
                type="button"
                className="border-2 border-red-400 rounded-lg my-2 text-red-400 font-semibold py-1"
                onClick={(e)=> {e.preventDefault(); setOpenModal(true)}}
              >
                Delete Contact
              </button>
            </div>
        </form>
      </>
    )
}

const stateProps = state => ({
  isLoading: state.root.loading,
});

const dispatchToProps = {
  updateContactRequest,
  getContactDetailRequest,
  removeContactRequest,
  getContactDetailSuccess,
  updateContactSuccess,
  removeContactSuccess,
  getContactDetailFailure,
  updateContactFailure, 
  removeContactFailure
};

export default connect(stateProps, dispatchToProps)(EditScreen)