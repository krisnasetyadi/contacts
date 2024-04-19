import React, { useState } from "react"
import toast from "react-hot-toast";
import { connect } from "react-redux";
import * as yup from "yup";
import { ContactApi } from "../../services";

import { UserCircleIcon } from "../../assets/icons";
import { createContactRequest, createContactSuccess, createContactFailure } from '../../stores/actions/index'
import HeaderContactDetail from "../../components/header-contact-detail"
import Input from "../../components/input-component"
import { useNavigate } from "react-router-dom";

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

function AddScreen () {
    const [fields, setFields] = useState(intialData);
    const [errors, setErrors] = useState(intialData)
    const navigate = useNavigate()
    
    const handleChange = (e) => {
        const { name, value } = e.target

        setFields(prev => ({
            ...prev,
            [name]: name === 'age' ? Number(value) : value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        createContactRequest()
        schema
        .validate(fields, { abortEarly: false })
        .then(() => {
          ContactApi.store(fields)
            .then(() => {
              toast.success("New contact successfully created!");
              createContactSuccess()
              setErrors({})
              navigate(`/`)
            })
            .catch((error) => {
              toast.error(
                error.message || "An error occurred. Please check your inputs!"
              );
              createContactFailure()
            });
        })
        .catch((err) => {
          const newErrors = {};
  
          err.inner.forEach((e) => {
            newErrors[e.path] = e.message;
          });
  
          setErrors(newErrors);
          createContactFailure()
        });
    }

    return (
        <form className="flex flex-col justify-center items-center" onSubmit={handleSubmit}>
            <HeaderContactDetail title="New Contact"  />
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
                    value={fields.firstName}
                    onChange={handleChange}
                    errors={errors}
                />
                <Input 
                    name='lastName' 
                    placeholder='Last name'
                    value={fields.lastName}
                    onChange={handleChange}
                    errors={errors}
                />
                <Input
                    name="age"
                    placeholder="Age"
                    value={fields.age || ''}
                    onChange={handleChange}
                    errors={errors}
                />
                <Input
                    name="photo"
                    placeholder="Photo"
                    value={fields.photo}
                    onChange={handleChange}
                    errors={errors}
                />
            </div>
        </form>
    )
}

const dispatchToProps = {
  createContactRequest,
  createContactSuccess,
  createContactFailure, 
};
export default connect(null, dispatchToProps)(AddScreen)