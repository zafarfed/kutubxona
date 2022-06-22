import axios from 'axios';
import React, {useContext, useState}from 'react'
import { Modal,ModalHeader ,ModalBody, ModalFooter} from 'react-bootstrap'
import { MyContext } from '../../context/context';
import './panel.css'
import {useNavigate} from 'react-router'

const Panel = () => {
    
    const navigate = useNavigate()
    const {courses, books} = useContext(MyContext)

    const Delete =async()=>{
      
    }

  return (
    <div className='panel'>

     <button onClick={()=>navigate('/user/addCourse')}>Add Course</button>
     <button onClick={()=>navigate('/user/addBook')}>Add Book</button>
     <button onClick={()=>navigate('/user/addCatgory')}>Add Category</button>
        <div className='mapped'>
          <h1>Courses</h1>
               {courses.length > 0 && courses.map((item, index)=>{
                return(
                <div key={index}> 
                    <img src={item.imgUrl} alt="" width={250} />
                    <p> {item.name}</p>
                    <p> {item.description}</p>
                    <button>Edit</button>
                    <button onClick={Delete}>Delete</button>
                </div>
                 )
                })}
                

         <div className="mapped">
          <h1>Books</h1>
            {books.length > 0 && books.map((item, index)=>{
              return(
              <div key={index}> 
                  <img src={item.imgUrl} alt="" width={250} />
                  <p> {item.name}</p>
                  <p> {item.ebookUrl}</p>
                  <button>Edit</button>
                  <button>Delete</button>
              </div>
              )
              })}
         </div>
        </div>
    </div>
  )
}

export default Panel;