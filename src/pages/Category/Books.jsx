import React, { useContext } from 'react'
import { useParams } from 'react-router';
import { MyContext } from '../../context/context';

const Books = () => {

    const {ctgr} = useContext(MyContext)
    const {id} = useParams()
    console.log(id);

    console.log(ctgr[id].books);

  return (
    <div>
        {ctgr[id].books.length > 0 && ctgr[id].books.map((item, index)=>{
            return(
                <div key={index}>
                    <img src={`https://coursesnodejs.herokuapp.com/${item.imgUrl}`}  alt="" />
                    <p>{item.name}</p>
                </div>
            )
        })}
    </div>
  )
}

export default Books;