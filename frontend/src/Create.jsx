import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Create() {
    const navigate = useNavigate();
    const [values,setValues] = useState({
        name:'',
        email:'',
        grade:''
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8081/student',values)
        .then(res => console.log(res))
        .catch(err => console.log(err))

        navigate('/')
        
    }

  return (
    <>
    <div className='flex  h-screen m-auto  w-[450px]   justify-center items-center'>
    <div className='w-full bg-gray-200 rounded-md p-3'>
        <form onSubmit={handleSubmit}>
            <h2>Add student</h2>
            <div className='mb-2'>
                <label htmlFor="">Name</label>
                <input type="text" placeholder='Enter Name' className='form-control' onChange={e => setValues({...values,name:e.target.value})} />
            </div>
            <div className='mb-2'>
                <label htmlFor="">Email</label>
                <input type="email" placeholder='Enter Email' className='form-control' onChange={e=> setValues({...values,email:e.target.value})} />
            </div>
            <div className='mb-2'>
                <label htmlFor="">Grade</label>
                <input type="text" placeholder='Enter Grade' className='form-control' onChange={e=> setValues({...values,grade:e.target.value})} />
            </div>

            <button className='btn btn-success' type='submit'>Submit</button>

        </form>
    </div>
    </div>
    </>
  )
}

export default Create