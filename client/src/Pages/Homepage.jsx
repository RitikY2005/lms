import { AiOutlineMenu ,AiFillCloseCircle} from "react-icons/ai";
import {Link} from 'react-router-dom';
import {useState} from 'react';

function Homepage() {


  function hideSidebar(){

    const drawer=document.getElementById('my-drawer');
    drawer.checked=!drawer.checked;

   }


    return ( <>

   <div className="drawer">
  <input id="my-drawer" type="checkbox" className="drawer-toggle"/>
  <div className="drawer-content p-1">
    {/* Page content here */}

    <label htmlFor="my-drawer" className="cursor cursor-pointer"><AiOutlineMenu size={"32px"}/></label>
  </div>
  <div className="drawer-side">
    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4 relative">
      {/* Sidebar content here */}

      <li className="absolute w-fit right-0 right-2 z-50">
      	<button className="" onClick={hideSidebar}><AiFillCloseCircle size={"22px"}/></button>
      </li>

      <li>
      	<Link path="/"> Home </Link>
      </li>

      <li>
      	<Link path="/courses"> All Courses </Link>
      </li>

      <li>
      	<Link path="/contact-us"> Contact Us </Link>
      </li>

      <li>
      	<Link path="/about"> About Us </Link>
      </li>

    </ul>
  </div>
</div>


     
    </>)
}

export default Homepage;