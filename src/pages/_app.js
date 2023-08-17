import '@/styles/globals.css'


import { Source_Sans_3 } from 'next/font/google'

const inter = Source_Sans_3({ subsets: ['latin'] })




export default function App({ Component, pageProps }) {



  return       <main className={inter.className} >

  <Component {...pageProps} />
</main>


}
