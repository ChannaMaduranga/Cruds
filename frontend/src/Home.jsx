import React, { useEffect,useState } from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom'


function Home() {
  const [data,setData]= useState([])

    useEffect(()=> {
        axios.get('http://localhost:8081/')
        .then(res=> setData(res.data))
        .catch(err=> console.log(err));
    },[])


    const handleDelete = (id) => {
      axios.delete('http://localhost:8081/delete/'+id)
      .then(res =>{
       window.location.reload();
      })
      .catch(err => console.log(err))
    }


  return (
    <>
  <div className=' flex  h-screen m-auto  w-[600px]   justify-center items-center'>
    <div className='w-full bg-gray-200 rounded-md p-3 ' >
      <h2 className=''>Student List</h2>

      <div className='d-flex justify-content-end'>
        <Link to="/create" className='btn btn-success'>Create</Link> 
      </div>
      <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Grade</th>
          <th>Action</th>
        </tr>
        </thead>
        <tbody>
        {data.map((student,index) => {
          return <tr key={index}>
            <td>{student.id}</td>
            <td>{student.name}</td>
            <td>{student.email}</td>
            <td>{student.grade}</td>
            <td>
            <Link to={`/read/${student.id}`} className=' btn btn-sm btn-info mx-2'>Read</Link>
              
              <Link to={`/edit/${student.id}`} className='btn btn-sm btn-primary'>Edit</Link>

              <button onClick={() => handleDelete(student.id)} className=' btn btn-sm btn-danger mx-2'>Delete</button>
            </td>
          </tr>
          
        })}
        </tbody>
      </table>
    </div>
    </div>
    </>
  )
}

export default Home