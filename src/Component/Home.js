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
    const [rating, setRating] = useState(0);


    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            name: data.name,
            email: data.email,
            rating: rating,
        };
        dispatch(fetchItemsRequestPost(formData))

    }


    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value })
    }


    const handleRatingChange = (newRating) => {
        setRating(newRating);
    };

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

            <div>
                    <p>Rating: {rating} stars</p>
                    <button onClick={() => handleRatingChange(1)}>1 Star</button>
                    <button onClick={() => handleRatingChange(2)}>2 Star</button>
                    <button onClick={() => handleRatingChange(3)}>3 Star</button>
                    <button onClick={() => handleRatingChange(4)}>4 Star</button>
                    <button onClick={() => handleRatingChange(5)}>5 Star</button>
                </div>

        </div>
    )
}

export default Home
