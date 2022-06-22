import React from 'react'
import { useState, useContext } from 'react'
import axios from 'axios'
import './signup.css'
import { MyContext } from '../../context/context'
import {useNavigate} from 'react-router'
import { Link } from 'react-router-dom'

const SignUP = () => {

    const navigate = useNavigate()

    const [data, setData] = useState({
        fullName: '',
        password: ''
    })

    const signup = async (e)=> {
        e.preventDefault()
        try {
            const res = await axios.post(`https://coursesnodejs.herokuapp.com/user/sign-up`, data)
            localStorage.setItem('token', res.data.data.token)
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <div className='signin'>
        <div className="wrapper">
            <h1>Register</h1>
            <br/>

            <form action="" onSubmit={signup}>
                <label>Username:</label>
                <input type="text" onChange={(e)=> {
                    setData({...data, fullName: e.target.value})
                }}/>
                <br/>
                <br/>


                <label>Password:</label>
                <input type="password" onChange={(e)=> {
                    setData({...data, password: e.target.value})
                }}/>
                <br/>

                <button onClick={()=>navigate('/user')}> Sign Up  </button><Link to={'/signin'}>Log in</Link>

            </form>
        </div>
    </div>
  )
}

export default SignUP;