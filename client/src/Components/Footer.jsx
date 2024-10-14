
import {FaFacebook,FaInstagram,FaLinkedIn,FaTwitter} from 'react-icons/fa';


function Footer(){
	const date= new Date();
	const currentYear= date.getFullYear();

  return (
  	<footer className="width-full flex flex-col sm:flex-row justify-between align-center h-[10vh] relative left-0 bottom-0 py-4 px-2 bg-gray-500">
       <section clasName="">
         <p className="text-white text-lg ">
         	{currentYear} &copy; all rights reserved .
         </p>
       </section>

       <section className="flex justify-center align-center space-x-4">
       	  <FaFacebook/>
       	  <FaInstagram/>
       	  <FaLinkedIn/>
       	  <FaTwitter/>
       </section>
  	</footer>
  	)
}

export default Footer;