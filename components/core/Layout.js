import Header from "./Header";
import Footer from "./Footer";
import PropTypes from 'prop-types';

const Layout = ({children}) => {

  return (
    <>
      <Header/>
        <div className="container mx-auto">
          {children}
        </div>
      <Footer/>
    </>      
  );
};

export default Layout;

Layout.propTypes = {
  children: PropTypes.node,
}
