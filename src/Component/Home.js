import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItemsRequestPost, deleteData } from '../redux/action';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPencil } from '@fortawesome/free-solid-svg-icons';
const Home = () => {
    const dispatch = useDispatch();

    const [data, setData] = useState({
        name: '',
        email: '',
        address: '',
        password: '',
    })


    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(fetchItemsRequestPost(data))

    }


    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value })
    }
    
    return (
        <div>

            <form onSubmit={handleSubmit}>

                <label>Name:</label>
                <input type="text" placeholder="name" name="name" value={data.name} onChange={handleChange} />

                 <label>Email:</label>
                <input type="email" placeholder="email" name="email" value={data.email} onChange={handleChange} />

                {/* <label>Password:</label>
                <input type="password" placeholder="password" name="password" value={data.password} onChange={handleChange} /> */} 
                <button>Submit</button>

            </form>

        </div>
    )
}

export default Home
