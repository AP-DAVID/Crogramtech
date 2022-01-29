import '../styles/globals.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import 'antd/dist/antd.css';

config.autoAddCss = false
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
