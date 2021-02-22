import '../styles/globals.css'
import 'semantic-ui-css/semantic.min.css'
import Footer from '../src/component/Footer'
import Top from '../src/component/Top'


function MyApp({ Component, pageProps }) {
  return (
    <div>
        <Top></Top>
        <Component {...pageProps} />
        <Footer></Footer>

    </div>

  )

}

export default MyApp
