import '@/styles/globals.css'
import '@/styles/other.css'
import { SessionProvider } from 'next-auth/react';
import 'flowbite';
import connectMongo from '@/database/conn';
import { useEffect } from 'react';
import Aos from 'aos';

  
export default function App({ Component, pageProps }) {
  useEffect(() => {
    Aos.init({
      once: true,
      disable: 'phone',
      duration: 700,
      easing: 'ease-out-cubic',
    });
  });

  return (
    <SessionProvider session={pageProps.session}>
     <Component {...pageProps} />
    </SessionProvider>
   );
} 
