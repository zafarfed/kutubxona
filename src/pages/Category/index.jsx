import React, { useContext } from 'react'
import { useNavigate } from 'react-router';
import { MyContext } from '../../context/context';
import './category.css'

const Category = () => {

  const navigate = useNavigate()
  const {ctgr} = useContext(MyContext)

  return (
    <div className='category'>
        
            {ctgr.map((item, index)=>{
                return(
                  <div key={index+1} className='box' onClick={()=>navigate(`/category/${index}`)}>
                    <img src={`https://coursesnodejs.herokuapp.com/${item.imgUrl}`}/>
                    <p > {item.name} </p>
                  </div>
                )
            })}
        
    </div>
  )
}

export default Category;