
import React, {useEffect,useState} from 'react';
import Link from "next/link";
import {useRouter} from 'next/router';
import PropTypes from 'prop-types';


const Header = () => {

    const router = useRouter();

    useEffect(() => {    


    },[router.asPath]);
  
  
    const activeLink = (path)=>{
        return path === router.asPath ? "active" : null;
    }  

    return (
        <header className='container mx-auto justify-center'>
            <div className='flex justify-center'>
                header
            </div>            
        </header>      
    );
};
  
export default Header;
  

Header.propTypes = {
    lang: PropTypes.string,
}
