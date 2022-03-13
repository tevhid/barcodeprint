
import PropTypes from 'prop-types';
import Head from 'next/head'

const SEO = ({ description = "", title = "",config = {} }) => {
    return (
      <Head>
          <title>{`${title} | `}{t('site_title')}</title>
          <meta name="description" content={description} />
          <meta property="og:type" content="website" />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="og:site_name" content={t('site_title')} />
          <meta property="og:url" content="" />  
          <meta property="og:image" content="" />  
          <meta property="twitter:card" content="summary" />
          <meta property="twitter:creator" content={config && config.social && config.social.twitter ? config.social.twitter : ""} />
          <meta property="twitter:site" content="" />
          <meta property="twitter:title" content={title} />
          <meta property="twitter:description" content={description} />
          <meta property="twitter:image" content="" /> 
      </Head>
      
    );
  };
  
export default SEO;
  
SEO.propTypes = {
    description: PropTypes.string,
    title: PropTypes.string,
    siteTitle: PropTypes.string,
    config: PropTypes.object,
}
