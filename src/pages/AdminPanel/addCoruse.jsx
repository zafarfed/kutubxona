import React, {useContext, useState} from 'react'
import { MyContext } from '../../context/context';
import axios from 'axios';

const Add = () => {

    const token = localStorage.getItem('token')

    const [post, setPost] = useState({
        title: '',
        descr: '',  
        pic: null
    })

    const addPost =async (e)=>{
        e.preventDefault();
        try {   
            const res = await axios.post(`https://coursesnodejs.herokuapp.com/employee/course`, post, 
            {headers:{'Authorization': `Bearer ${token}`}})
            
        } catch (error) {
            console.log(error);
        }
    }
  return (

    <div>
        <div className='add'>
            <h1>Add Course</h1>

            <form onSubmit={addPost}>

                <label>Title</label>
                <input type="text" onChange={(e)=>{setPost({...post, title: e.target.value})}}/>
                <br/>
                <br/>

                <label>Description</label>
                <textarea onChange={(e)=>{setPost({...post, descr: e.target.value})}}/>
                <br/>
                <br/>

                <label>Image</label>
                <input type="file" onChange={(e)=>{setPost({...post, pic: e.target.value})}}/>
                <br/>
                <button type='submit'>add</button>

            </form>
        </div>
    </div>
  )
}

export default Add