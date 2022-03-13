
import Document, { Html, Head, Main, NextScript } from 'next/document'

class BarcodeDocument extends Document {
  
  static async getInitialProps(ctx) {
    //console.log(ctx)

    const originalRenderPage = ctx.renderPage;

    ctx.renderPage = () =>
      originalRenderPage({
        // useful for wrapping the whole react tree
        enhanceApp: App => App,
        // useful for wrapping in a per-page basis
        enhanceComponent: Component => Component,
      })

    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head />
        <body className='body'>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default BarcodeDocument