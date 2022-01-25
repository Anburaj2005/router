import{BrowserRouter, Route,} from "react-router-dom"
import './App.css';
import Header from  './component/Header';
import Post from './component/Post';
import Home from  './Pages/Home';
import About from  './Pages/About';
import profile from  './Pages/profile';
import Notfound from './Pages/Not found';
import {useState} from "react";

function App() {
  
 const[Login,setLogin]=useState(true);
  
  return (
   <BrowserRouter>
    <div className ="App">
      <Header/>
   
   <button onClick={()=>setLogin(!Login)}> Login ?"logout:"login"</button>
   <switch>
<Route excat path = "/" component={Home}/>
<Route path = "/About" component={About}/>
<Route path = "/Post" component={Post}/>
<Route path ="/profile" component={profile}/>
<Route component={Notfound}/> 
</switch>
</div>
    
   </BrowserRouter>
   

  );
}

export default App;
