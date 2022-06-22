import axios from 'axios';
import { createContext, useState, useEffect,} from "react";


export const MyContext = createContext()

export const Context =({children})=>{

    const [ctgr, setCtgr] = useState([])
    const [courses, setCourses] = useState([])
    const [user, setUser] = useState(null)
    const [books, setBooks] = useState([])

    
    useEffect(() => {
        const getCategoties = async () =>{

            const res = await axios.get('https://coursesnodejs.herokuapp.com/user/category?page=1&limit=7')
            setCtgr(res.data.data.data)
        }
        getCategoties()

        const getCourses = async () =>{

            const res = await axios.get('https://coursesnodejs.herokuapp.com/user/course?limit=5&page=1')
            setCourses(res.data.data.data)
        }
        getCourses()

        const getBooks = async () =>{

            const res = await axios.get('https://coursesnodejs.herokuapp.com/user/book?page=1&limit=5')
            setBooks(res.data.data.data)
        }
        getBooks()

    }, [])

    return(
        <MyContext.Provider value={{user, setUser, ctgr, courses, books, setBooks}}>
            {children}
        </MyContext.Provider>
    )
}