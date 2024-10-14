
import {FaFacebook,FaInstagram,FaLinkedin,FaTwitter} from 'react-icons/fa';


function Footer(){
	const date= new Date();
	const currentYear= date.getFullYear();

  return (
  	<footer className="width-full flex flex-col sm:flex-row justify-between items-center h-[8vh] relative left-0 bottom-0 px-12 bg-gray-700 ">
       <section className="flex justify-center align-center">
         <p className="text-white text-lg ">
         	Learning Pvt.ltd {currentYear} &copy; all rights reserved .
         </p>
       </section>

       <section className="flex justify-center align-center space-x-4">
       	  <FaFacebook className='cursor-pointer text-white hover:scale-110 transition-all duration-300 ease-in-out ' size={"22px"}/>
       	  <FaInstagram className='cursor-pointer text-white hover:scale-110 transition-all duration-300 ease-in-out ' size={"22px"}/>
       	  <FaLinkedin className='cursor-pointer text-white hover:scale-110 transition-all duration-300 ease-in-out ' size={"22px"}/>
       	  <FaTwitter className='cursor-pointer text-white hover:scale-110 transition-all duration-300 ease-in-out ' size={"22px"}/>
       </section>
  	</footer>
  	)
}

export default Footer;
