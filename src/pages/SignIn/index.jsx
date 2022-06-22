import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './signin.css'
import {useNavigate} from 'react-router'

const SignIn = () => {
  const navigate = useNavigate()
  const [password, setPassword] = useState('')

const signing = async (e)=> {
    e.preventDefault()
    try {
        const res = await axios.post(`https://coursesnodejs.herokuapp.com/user/sign-in`, {password})

        console.log(res.data.data);
    } catch (error) {
        console.log(error);
    }
}
  return (
    <div className='signin'>
        <div className="wrapper">
            <h1>Login</h1>
            <br/>

            <form action="" onSubmit={signing}>
              <label>Password:</label>
              <input type="password" onChange={(e)=> setPassword(e.target.value)}/>
              <br/>

              <button onClick={()=>navigate('/user')}> Sign In </button> <Link to={'/signup'}>Register</Link>

            </form>

        </div>
    </div>
  )
}

export default SignIn;