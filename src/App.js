import { Routes, Route} from 'react-router';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import CtBooks from './pages/Category/Books';
import Category from './pages/Category';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Courses from './pages/Courses'
import Books from './pages/Books'
import Panel from './pages/AdminPanel'
import Add from './pages/AdminPanel/addCoruse'
import AddBook from './pages/AdminPanel/addBook'


function App() {
  return (
    
      <div className="App">
        <Header/>
        <Routes>
          <Route exact path='/' element={<Main/>}/>
          <Route exact path='/category/:id' element={<CtBooks/>}/>
          <Route exact path='/category' element={<Category/>}/>
          <Route exact path='/courses' element={<Courses/>}/>
          <Route exact path='/signin' element={<SignIn/>}/>
          <Route exact path='/signup' element={<SignUp/>}/>
          <Route exact path='/books' element={<Books/>}/>
          <Route exact path='/user' element={<Panel/>}/>
          <Route exact path='/user/addCourse' element={<Add/>}/>
          <Route exact path='/user/addBook' element={<AddBook/>}/>
          {/* <Route exact path='/user/addCategory' element={<Add/>}/> */}
        </Routes>
        <Footer/>
      </div>

  );
}

export default App;
