import '@/styles/globals.css'
import { SessionProvider } from 'next-auth/react';
import 'flowbite';
import connectMongo from '@/database/conn';

  
export default function App({ Component, pageProps }) {
 
  return (
    <SessionProvider session={pageProps.session}>
     <Component {...pageProps} />
    </SessionProvider>
   );
} 
