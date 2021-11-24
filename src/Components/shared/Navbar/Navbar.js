import React from 'react';
import { NavLink } from 'react-router-dom';
import { useState ,useEffect } from 'react';
import './Navbar.css';
import useAuth from '../../../Hooks/useAuth';
const Navbar = () => {
  const {user,LogOut,newName,admin} = useAuth()
  const [userInfo, setUserInfo] = useState([])
  useEffect(()=>{
    setUserInfo(user);
  },[user]);

    return (
        <div className="sticky-top fw-bold w-100">
        <nav className="navbar navbar-expand-lg navbar-dark nav-bg ">
       <div className="container-fluid text-white">
         <NavLink className="navbar-brand"  to="#">
           <img className="img-rotate" src="https://purepng.com/public/uploads/large/wrist-watch-ogx.png" alt="" width="50px"/> 
         </NavLink>
         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
           <span className="navbar-toggler-icon"></span>
         </button>
         <div className="collapse navbar-collapse" id="navbarSupportedContent">
           <ul className="navbar-nav me-auto mb-2 mb-lg-0">
             <li className="nav-item">
               <NavLink className="nav-link text-light"  activeClassName="nav-active-class" aria-current="page" to="/home">Home</NavLink>
             </li>
             <li className="nav-item">
               <NavLink className="nav-link text-light" to="/allProducts" activeClassName="nav-active-class" >All Watches</NavLink>
             </li>
             {
               user?.email &&
               <li className="nav-item">
               <NavLink className="nav-link text-light" to="/dashbord" activeClassName="nav-active-class" >DashBord</NavLink>
             </li>
             }
            
             <li className="nav-item">
               <NavLink className="nav-link text-light" to="/about" activeClassName="nav-active-class" >About Us</NavLink>
             </li>
             <li className="nav-item">
               <NavLink className="nav-link  text-light" to="/faq"  activeClassName="nav-active-class" >FAQ</NavLink>
             </li>
             
             {
              !userInfo?.email &&
                 <li className="nav-item">
               <NavLink className="nav-link text-light" to="/login" activeClassName="nav-active-class" ><i className="fas fa-sign-in-alt"></i> Login</NavLink>
             </li>   
             }
              {
               userInfo?.email &&  <li className="nav-item">
               <NavLink className="nav-link text-light" to="#" onClick={LogOut} > <i className="fas fa-sign-out-alt"></i> logout</NavLink>
             </li>
             
             }
             
              <li className="nav-item">
               <NavLink className="nav-link " to="#" >{
                 userInfo?.displayName?
                 <>
                 {userInfo.displayName} 
                 {admin&& <>(Admin)</>}
                 </>
                 :
                 <>
                 {newName}
                 {
                   admin && <>(Admin)</>
                 }
                 </>
               }</NavLink>
             </li>
     
             
             
            
           </ul>
           <form className="d-flex">
             <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
             <button className="btn btn-outline-success" type="submit">Search</button>
           </form>
         </div>
       </div>
     </nav>
      </div>
    );
};

export default Navbar;