import React, { useContext } from 'react'
import { useNavigate } from 'react-router';
import { MyContext } from '../../context/context';

const Courses = () => {

  const {courses} = useContext(MyContext)
  console.log(courses)

  return (
    <div>
        {courses.length > 0 && courses.map((item, index)=>{
            return(
                <div key={index}> 
                    <img src={item.imgUrl} alt="" width={250} />
                    <p> {item.name}</p>
                    <p> {item.description}</p>
                </div>
        )
        })}
    </div>
  )
}

export default Courses