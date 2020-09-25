import 'fontsource-roboto'

import BottomNavigation from '../components/navigation/Bottom'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <BottomNavigation />
    </>
  )
}

export default MyApp
