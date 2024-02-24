import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


function Signin() {
    const navigate = useNavigate();
    const [values, setValues] = useState({
        username: '',
        password: ''
    })


    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8081/login', values)
            .then((res) => {
                if (res.data.message === "invalid") {
                    alert("invalid user")
                }
                else if (res.data.success === true) {
                    navigate('/');
                }
                else {
                    alert("password incorrect");
                }

            })

            .catch(err => console.log(err))

        

    }


    return (
        <>
            <div className='flex  h-screen m-auto  w-[400px]   justify-center items-center'>
                <div className='w-full bg-gray-200 rounded-md p-3' >
                    <form onSubmit={handleSubmit}>
                        <h2>Sign in</h2>
                        <div className='mb-2'>
                            <label htmlFor="">User Name</label>
                            <input type="text" placeholder='Enter Name' className='form-control' onChange={e => setValues({ ...values, username: e.target.value })} />
                        </div>

                        <div className='mb-2'>
                            <label htmlFor="">Password</label>
                            <input type="password" placeholder='Enter Password' className='form-control' onChange={e => setValues({ ...values, password: e.target.value })} />
                        </div>
                        <button className='btn btn-success w-100 mt-2' type='submit'>Sign in</button>
                        <p>You can register</p>
                        <Link to='/signup' className='btn bg-white w-100 mt-1' >Sign up</Link>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Signin


