import PropTypes from 'prop-types';
import Head from 'next/head'

const Meta = ({title = "",description = "",siteTitle = "",social={}, url="" }) => {
    return (
      <Head>
          <title>{`${title} | ${siteTitle}`}</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"/>
          <meta name="description" content={description} />
          <meta property="og:type" content="website" />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="og:site_name" content={siteTitle} />
          <meta property="og:url" content={url} />  
          <meta property="og:image" content="" />  
          <meta property="twitter:card" content="summary" />
          <meta property="twitter:creator" content={social.twitter} />
          <meta name="twitter:site" content="" />
          <meta property="twitter:title" content={title} />
          <meta property="twitter:description" content={description} />
          <meta name="twitter:image" content="" /> 
      </Head>
      
    );
  };
  
export default Meta;
  
Meta.propTypes = {
  lang: PropTypes.string,
  description: PropTypes.string,
  title: PropTypes.string,
  siteTitle: PropTypes.string,
  social: PropTypes.object,
  url: PropTypes.string
}