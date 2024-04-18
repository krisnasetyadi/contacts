import React, { useEffect, useState } from "react"
import { ContactApi } from '../../services/index'
import Card from "../../components/card-component";
import Content from '../layout'

function IndexScreen() {
    const [data, setData] = useState([])
    
    useEffect(() => {
        ContactApi.get()
            .then(({ data }) => {
                setData(data)
            })
            .catch(error => {
                console.log('erorrr', error)
            })
    }, [])
    return (
        <Content>
            <ul>
                {data.length > 0 && data?.map((item) => {
                    const { firstName, lastName, photo, id } = item
                    return (
                        <li className='flex justify-center'>
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

// import { useDispatch, connect } from "react-redux";
// import { createTodo, deleteTodo, getContactList } from "../stores/actions";
// import { ContactApi } from "../services";

// import Modal from "../components/modal-component"
// import Input from "../components/input-component"
// import Card from "../components/card-component";

// const dispatch = useDispatch()
// const [data, setData] = useState([])
// const [isOpen, setIsOpen] = useState(false)
// const [name, setName] = useState('')

// const handleSaveTodo = (e) => {
//     e.preventDefault();
//     dispatch(createTodo(ContactApi, name)); 
// }

// useEffect(() => {
//     dispatch(getContactList(ContactApi))
// }, [])

// console.log('todoData', todoData)

// useEffect(() => {
//     setData(todoData?.todo_list?.data?.map(item => ({
//         ...item,
//         selected: false
//     })) || [])
// }, [todoData])

// const handleDelete = (e, id) => {
//     e.preventDefault()
//     dispatch(deleteTodo(ContactApi, id));
// }


// <Modal 
// title="Create Todo"
// isOpen={isOpen} 
// onClose={() => setIsOpen(false)} 
// onSave={handleSaveTodo}>
// <Input   
//     placeholder="Enter your name"
//     value={name}
//     onChange={(e) => setName(e.target.value)} 
// />
// </Modal>