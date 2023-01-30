import React, { useState,useEffect } from 'react';
import "../App.css";
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import {Button, Table} from 'react-bootstrap';
import {useNavigate,Link} from 'react-router-dom';
import { useSelector } from 'react-redux';


const TableData=()=>{
  const navigate=useNavigate();
  const students=useSelector(state=>state);
  const dispatch=useDispatch();
  const deleteStudent=(id,name)=>{
    dispatch({type:"DELETE_STUDENT",payload:id});
    toast.success(` ${name} is deleted from the student Mark List Successfully!!`);
  }
  const [logout,setLogout]=useState(false);

  useEffect(()=>{
   if(!localStorage.getItem('auth')) navigate("/login");
},[logout]);

 const logoutHandler=(e)=>{
  localStorage.removeItem('auth');
  setLogout(true);
}
    
return(
  <div className='container'>
     <div className='markSheet'><h1>STUDENT MARK LIST</h1></div>
    <Link className='create-btn' to={'/create'}>
      <Button className='my-3'>CREATE</Button>
    </Link>
    <div>
      <Table striped bordered hover size="sm">
         <thead>
          <tr>
          
            <th scope="col">Roll Number</th>
            <th scope="col">Student Name</th>
            <th scope="col">City</th>
            <th scope="col">Mark1</th>
            <th scope="col">Mark2</th>
            <th scope="col">Mark3</th>
            <th scope="col">Mark4</th>
            <th scope="col">Mark5</th>
            <th scope="col">Actions</th>
          </tr>
         </thead>
         <tbody>
         {
          students.map((student,id)=>(
            <tr key={id}>
              
              <td>{student.rollNum}</td>
              <td>{student.name}</td>
              <td>{student.city}</td>
              <td>{student.mark1}</td>
              <td>{student.mark2}</td>
              <td>{student.mark3}</td>
              <td>{student.mark4}</td>
              <td>{student.mark5}</td>
              <td className='actions'>
                <div className='buttons'>
                <Link to={`/edit/${student.id}`}  className="btn btn-success">
                  Edit
                </Link>   &nbsp;
                <Button type='button' onClick={()=>deleteStudent(student.id,student.name)}  className="btn btn-danger">
                  Delete
                </Button></div>
              </td>
            </tr>
          ))
         }
         </tbody>
      </Table>
    </div>
    <div className="button"><button className="btn btn-dark" onClick={logoutHandler}>Logout</button></div>
  </div>
 )
}

export default TableData;