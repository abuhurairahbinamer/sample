import styles from './App.module.css'
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import Home from './pages/Home/Home';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
function App() {
  return (
    <div className={styles.container}>
   <BrowserRouter>
   <div className={styles.layout}>
    <Navbar/>
   
   <Routes>
    <Route path='/' exact element={<div className={styles.main}><Home/></div>}/>
  
    <Route path='/crypto' exact element={<div className={styles.main}>crypto</div>}/>
  
 
    <Route path='/blogs' exact element={<div className={styles.main}>blogs</div>}/>
  
  
    <Route path='/submit' exact element={<div className={styles.main}>submit a blog</div>}/>
  

    <Route path='/log-in' exact element={<div className={styles.main}>login page</div>}/>
  
  
    <Route path='/sign-up' exact element={<div className={styles.main}>sign-up page</div>}/>
  

   </Routes>


    <Footer/>
   </div>
   </BrowserRouter>
    </div>
  );
}

export default App;
