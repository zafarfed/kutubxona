import React, {useContext} from 'react'
import './Header.css'
import {useNavigate} from 'react-router'
import { MyContext } from '../../context/context';

const Header = () => {
  const {user} = useContext(MyContext)
  const navigate = useNavigate()
  
  return (
    <div className='header'>
      <p onClick={()=>navigate('/')}>Home</p> 
      <p onClick={()=>navigate('/category')}>Category</p> 
      <p onClick={()=>navigate('/courses')}>Courses</p> 
      <p onClick={()=>navigate('/books')}>Books</p> 
      {user && <p onClick={()=>navigate('/user')}>{user}</p> }
      <p onClick={()=>navigate('/signin')}>SignIn / SignUp</p> 
      {/* <p onClick={()=>navigate('/signup')}>Sign Up</p>  */}
    </div>
  )
}

export default Header