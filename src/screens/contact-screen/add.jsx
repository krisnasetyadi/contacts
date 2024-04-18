import React, { useState } from "react"
import toast from "react-hot-toast";
import * as yup from "yup";
import { ContactApi } from "../../services";

import HeaderContactDetail from "../../components/header-contact-detail"
import Input from "../../components/input-component"
import { UserCircleIcon } from "../../assets/icons";

const schema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    age: yup
      .number()
      .positive("Age must be a positive number")
      .integer("Age must be an integer")
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

    const validateForm = Object.values(fields).every(value => value !== '');

    console.log('errors_errors', errors)
    
    const handleChange = (e) => {
        const { name, value } = e.target

        setFields(prev => ({
            ...prev,
            [name]: name === 'age' ? Number(value) : value
        }))

    
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        schema
        .validate(fields, { abortEarly: false })
        .then(() => {
          ContactApi.store(fields)
            .then(() => {
              toast.success("New contact successfully created!");
            })
            .catch((error) => {
              toast.error(
                error.message || "An error occurred. Please check your inputs!"
              );
            });
        })
        .catch((err) => {
          const newErrors = {};
  
          err.inner.forEach((e) => {
            newErrors[e.path] = e.message;
          });
  
          setErrors(newErrors);
        });
    }
    return (
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
                    type="number"
                    placeholder="Age"
                    value={fields.age}
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

export default AddScreen