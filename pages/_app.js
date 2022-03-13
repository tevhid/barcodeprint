import Router,{useRouter} from 'next/router';
import NProgress from 'nprogress';
import Cookie from 'js-cookie';
import { SWRConfig } from 'swr';
import Head from "next/head";
import $ from "jquery";


import Layout from "components/core/Layout";
import Meta from 'components/core/Meta';
import MetaLink from 'components/core/MetaLink';
import MetaScript from 'components/core/MetaScript';


import 'styles/nprogress.css';
import 'styles/globals.css';
import '@progress/kendo-theme-default/dist/all.css';

/** 
 * page loading
 */
 Router.events.on('routeChangeStart', url => {
  console.log(`Loading: ${url}`)
  NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())



function BarcodeApp({ Component, pageProps }) {
  return (  
    <>
      <Layout>
      <Head>                            
          <Meta title='Barcode Print' description='Kolay barkod yazdırma' siteTitle='www.barcodeprint.com'/>
          <MetaLink/>
          <MetaScript/>
      </Head> 
      <Component {...pageProps}/>
      </Layout>         
    </>    
  )
}

export default BarcodeApp
