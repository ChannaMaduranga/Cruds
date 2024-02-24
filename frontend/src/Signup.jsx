import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


function Signup() {
    const navigate = useNavigate();
    const [values, setValues] = useState({
        username: '',
        email: '',
        password: ''
    })


    const handleSubmit = (e) => {
        e.preventDefault();
        if(values.password.length >=8){
            axios.post('http://localhost:8081/user', values)
                .then((res) => {
                    if (res.data.message === true) {
                        alert("Register Success");
                    }
                    else {
                        alert("Already have username");
                    }
                })
                .catch(err => console.log(err));
            }
            else{
                alert("Password need 8 characters");
            }
    }


    return (
        <>
            <div className='flex  h-screen m-auto  w-[450px]   justify-center items-center'>
                <div className=' w-full bg-gray-200 rounded-md p-3  '>
                    <form onSubmit={handleSubmit}>
                        <h2>Sign up</h2>
                        <div className='mb-2'>
                            <label htmlFor="">User Name</label>
                            <input type="text" placeholder='Enter Name' required className='form-control' onChange={e => setValues({ ...values, username: e.target.value })} />
                        </div>
                        <div className='mb-2'>
                            <label htmlFor="">Email</label>
                            <input type="email" placeholder='Enter Email' required className='form-control' onChange={e => setValues({ ...values, email: e.target.value })} />
                        </div>
                        <div className='mb-2'>
                            <label htmlFor="">Password</label>
                            <input type="password" placeholder='Enter Password' required className='form-control' onChange={e => setValues({ ...values, password: e.target.value })} />
                        </div>
                        <button className='btn btn-success w-100 mt-2' type='submit'>Sign up</button>
                        <p>Do you have already Account</p>
                        <Link to='/signin' className='btn w-full border bg-white' type='submit'>Sign in</Link>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Signup