import styles from './App.module.css'
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import Home from './pages/Home/Home';
import Crypto from './pages/crypto/crypto';
import Protected from './components/protected/protected';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Error from './pages/Home/error/Error';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import Blogs from './pages/Blogs/Blogs';
import BlogSubmit from './pages/BlogSubmit/blogSubmit';
import BlogDetail from './pages/blogDetail/BlogDetail';
import { useSelector } from 'react-redux';
import EditBlog from './pages/EditBlog/editBlog';
function App() {
const isAuth=useSelector((state)=>state.users.auth);

console.log("app run")

  return (
    <div className={styles.container}>
   <BrowserRouter>
   <div className={styles.layout}>
    <Navbar/>

    {/* <nav  className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <p className="navbar-brand" href="#">Navbar</p>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <p style={{color:'red'}} className="nav-link active" aria-current="page" href="#">Home</p>
            </li>
            <li className="nav-item">
              <p className="nav-link" href="#">Features</p>
            </li>
            <li className="nav-item">
              <p className="nav-link" href="#">Pricing</p>
            </li>
            <li className="nav-item">
              <p className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</p>
            </li>
          </ul>
        </div>
      </div>
    </nav> */}


   {/* {!isAuth && (<p>this one is good</p>)}
   {!isAuth && <p>this one is not bad</p>} */}
   <Routes>
    <Route path='/' exact element={<div className={styles.main}><Home/></div>}/>
  
    <Route path='/crypto' exact element={<div className={styles.main}><Crypto/></div>}/>
  
 
    <Route path='/blogs' exact element={<Protected isAuth={isAuth}> <div className={styles.main}><Blogs/></div></Protected>}/>
  
  
    <Route path='/submit' exact element={<Protected isAuth={isAuth} > <div className={styles.main}><BlogSubmit/></div></Protected>}/>
  
     
    <Route path='/detail/:id' exact element={<Protected isAuth={isAuth} > <div className={styles.main}><BlogDetail/></div></Protected>}/>
     
    <Route path='/editBlog/:id' exact element={<Protected isAuth={isAuth} > <div className={styles.main}><EditBlog/></div></Protected>}/>
     
   
    <Route path='/login' exact element={<div className={styles.main}><Login auth={isAuth}/></div>}/>
  
    <Route path='/signup' exact element={<div className={styles.main}><SignUp auth={isAuth}/></div>}/>
    
    <Route path="*" element={<div className={styles.main}><Error/></div>} />

   </Routes>


    <Footer/>
   </div>
   </BrowserRouter>
    </div>
  );
}

export default App;
