import { AiOutlineMenu, AiFillCloseCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer.jsx";
import {useSelector} from 'react-redux';

function HomeLayout({ children }) {
  function hideSidebar() {
    const drawer = document.getElementById("my-drawer");
    drawer.checked = !drawer.checked;
  }

  const isLoggedIn= useSelector((state)=>state?.user?.isLoggedIn);

  return (
    <>
      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
       
          {children}

          <Footer />
          <label
            htmlFor="my-drawer"
            className="cursor cursor-pointer fixed top-2 left-2 "
          >
            <AiOutlineMenu size={"32px"} />
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-base-200 text-base-content min-h-screen w-80 p-4 relative">
            {/* Sidebar content here */}

            <li className="absolute w-fit right-2 z-50">
              <button className="" onClick={hideSidebar}>
                <AiFillCloseCircle size={"22px"} />
              </button>
            </li>

            <li>
              <Link to="/"> Home </Link>
            </li>

            <li>
              <Link to="/courses"> All Courses </Link>
            </li>

            <li>
              <Link to="/contact-us"> Contact Us </Link>
            </li>

            <li>
              <Link to="/about"> About Us </Link>
            </li>
            <li className="absolute bottom-4">
              {!isLoggedIn && (
                            <div className=" w-full flex justify-center items-center  space-x-4">
                            <button className="btn btn-sm btn-secondary  px-8 py-2 text-white font-semibold rounded-md"><Link to="/login">Login</Link></button>
                            <button className="btn btn-sm btn-primary  px-8 py-2 text-white font-semibold rounded-md"><Link to="/signin">signin</Link></button>
                          </div>
              )}

              {
                isLoggedIn && (
                  <div className=" w-full flex justify-center items-center  space-x-4">
                  <button className="btn btn-sm btn-secondary  px-8 py-2 text-white font-semibold rounded-md"><Link to="/profile">Profile</Link></button>
                  <button className="btn btn-sm btn-primary  px-8 py-2 text-white font-semibold rounded-md"><Link to="/logout">logout</Link></button>
                </div>
                )
              }
            </li>

          </ul>

        </div>
      </div>
    </>
  );
}

export default HomeLayout;
