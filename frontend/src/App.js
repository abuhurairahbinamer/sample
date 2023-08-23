import styles from './App.module.css'
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import Home from './pages/Home/Home';
import Protected from './components/protected/protected';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Error from './pages/Home/error/Error';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import { useSelector } from 'react-redux';
function App() {
const isAuth=useSelector((state)=>state.users.auth);

console.log("app run")

  return (
    <div className={styles.container}>
   <BrowserRouter>
   <div className={styles.layout}>
    <Navbar/>
   {/* {!isAuth && (<p>this one is good</p>)}
   {!isAuth && <p>this one is not bad</p>} */}
   <Routes>
    <Route path='/' exact element={<div className={styles.main}><Home/></div>}/>
  
    <Route path='/crypto' exact element={<div className={styles.main}>crypto</div>}/>
  
 
    <Route path='/blogs' exact element={<Protected isAuth={isAuth}> <div className={styles.main}>blogs</div></Protected>}/>
  
  
    <Route path='/submit' exact element={<Protected isAuth={isAuth} > <div className={styles.main}>submit a blog</div></Protected>}/>
  

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
