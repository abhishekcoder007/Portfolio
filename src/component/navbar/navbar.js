import React from 'react';
import logo from "../../logoipsum-293.svg";
import style from "./navbar.module.css";
import {NavLink} from "react-router-dom";
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import CloseIcon from '@mui/icons-material/Close';
import {useState} from "react";

export default function Navbar(){
 const [nav ,setnav]=useState(false);
// let a=JSON.stringify(12)
// localStorage.clear();
// localStorage.setItem("data1",a);
// localStorage.removeItem("userTweets");
// const store=JSON.parse(localStorage.getItem("data1"));
// console.log(store)
// useEffect(()=>{
//     if(window.)
// },[])
function hidenav(){
    setnav(!nav)

}

    return(
        <>

       <nav>
        <div className={style.NAV}>
           
            <div className={style.leftnav}>
                <img src={logo} alt="logo" />
                <h2 className={style.myname} > Abhishek Raj Gaurav</h2>
                </div>
          
            <ul className={style.NAVBAR}>
    
        <li><NavLink className={style.navstylelink}  to="/home">Home</NavLink></li>
        <li><NavLink className={style.navstylelink} to="/about">About</NavLink></li>
        <li><NavLink className={style.navstylelink} to="/contact">Contact</NavLink></li>
        <li><NavLink  className={style.navstylelink} to="/project">Project</NavLink></li>


       
      
       
           </ul>

           {nav?<>
            <ul className={style.mobileNAVBAR}>
    
        <li><NavLink className={style.navstylelink}  to="/home">Home</NavLink></li>
        <li><NavLink className={style.navstylelink} to="/about">About</NavLink></li>
        <li><NavLink className={style.navstylelink} to="/contact">Contact</NavLink></li>
        <li><NavLink  className={style.navstylelink} to="/project">Project</NavLink></li>


       
      
       
           </ul></>:""}
           <div className={style.mobile}>
           
         <button  onClick={hidenav} >{nav===false?<FormatAlignJustifyIcon sx={{color:"red",fontSize:"51px"}}/>:<CloseIcon  sx={{color:"red",fontSize:"51px"}}/>}</button>
           </div>
        </div>
     
      

        </nav>

        
        </>
    )
}
