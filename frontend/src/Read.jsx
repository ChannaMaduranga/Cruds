import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';


function Read() {
    const {id} = useParams();
    const [student,setStudent] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:8081/read/'+id)
        .then(res=>{
            console.log(res)
            setStudent(res.data[0]);
        })
        .catch(err=>console.log(err))
    },[])

    
  return (
    <div className='flex  h-screen m-auto  w-[450px]   justify-center items-center'>
        <div className=' w-full bg-gray-200 rounded-md p-3 ' >
            <div className='p-2'>
            <h2>Student Detail</h2>
            <h2>{student.id}</h2>
            <h2>{student.name}</h2>
            <h2>{student.email}</h2>
            <h2>{student.grade}</h2>

            </div>

            <Link to="/" className="btn btn-primary me-2">Back</Link>
            <Link to={`/edit/${student.id}`} className="btn btn-info me-2">Edit</Link>

        </div>
    </div>
  )
}

export default Read