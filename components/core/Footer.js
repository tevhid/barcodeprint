import {useRouter} from 'next/router';
import Link from "next/link";
import PropTypes from 'prop-types';


const Footer = () => {
  const router = useRouter();


  const activeLink = (path)=>{
    return path === router.asPath ? "active" : null;
  }  
    return (
      <footer className='container mx-auto justify-center' >
          <div className='flex justify-center'>
            © {new Date().getFullYear()} <a title="Barcode">- Barcode</a>  
          </div>
      </footer>      
    );
  };
  
export default Footer;
  
Footer.propTypes = {
  lang: PropTypes.string,
}