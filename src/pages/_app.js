import '@/styles/globals.css'


import { Source_Sans_3 } from 'next/font/google'
import { ToastContainer } from 'react-toastify'

const inter = Source_Sans_3({ subsets: ['latin'] })




export default function App({ Component, pageProps }) {



  return       <main className={inter.className} >

<ToastContainer />


  <Component {...pageProps} />
</main>


}
