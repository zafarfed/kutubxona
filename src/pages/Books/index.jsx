import React, {useContext} from 'react'
import { MyContext } from '../../context/context';

const Books = () => {

    const {books} = useContext(MyContext)

  return (
    <div>
        {books.length > 0 && books.map((item, index)=>{
            return(
                <div key={index}>
                    <img src={`https://coursesnodejs.herokuapp.com/${item.imgUrl}`} alt="" width={300}/>
                    <p>{item.name}</p>
                </div>
            )
        })}
    </div>
  )
}

export default Books