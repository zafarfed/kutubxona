import React, {useContext, useState} from 'react'
import { MyContext } from '../../context/context';
import axios from 'axios';

const Add = () => {


    const token = localStorage.getItem('token')
    console.log(token);
    const [newBook, setNewBook] = useState({
        title: '',
        descr: '',  
        pic: null,
        author:'',
        ebookUrl:''
    })

    const addPost =async (e)=>{
        e.preventDefault();
        try {   
            const res = await axios.post(`https://coursesnodejs.herokuapp.com/employee/book`, newBook, {headers:{'Authorization': `Bearer ${token}`}})
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    }
  return (

    <div>
                <div className='add'>
            <h1>Add Book</h1>

            <form onSubmit={addPost}>

                <label>Title</label>
                <input type="text" onChange={(e)=>{setNewBook({...newBook, title: e.target.value})}}/>
                <br/>
                <br/>

                <label>Description</label>
                <textarea onChange={(e)=>{setNewBook({...newBook, descr: e.target.value})}}/>
                <br/>
                <br/>

                <label>Image</label>
                <input type="file" onChange={(e)=>{setNewBook({...newBook, pic: e.target.value})}}/>
                <br/>
                <button type='submit'>add</button>

            </form>
        </div>
    </div>
  )
}

export default Add