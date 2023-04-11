import '../styles/globals.scss'

import '../Components/Nav/Styles/Nav.scss'
import '../Components/footer/styles/Footer.scss'
import './CheckInbox/styles/checkinbox.scss'
import './Dashboard/Styles/Dashboard.scss'
import './Home/Styles/Home.scss'
import './Login/Styles/Login.scss'
import './Recovery/Styles/Recovery.scss'
import './Register/Styles/Register.scss'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
