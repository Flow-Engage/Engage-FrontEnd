import Head from '@/components/Head';
import SideBar from '@/components/SideBar';
import { useSession, signIn, signOut } from 'next-auth/react';
export default function IndexPage() {
  const { data, status } = useSession();
  if (status === 'loading') return <h1> loading... please wait</h1>;
  if (status === 'authenticated') {
    return (
      <div>
        <Head name={data.user.name} img={data.user.image} signOut={signOut}/>
         <SideBar/>
       
      </div>
    );
  }
  return (
    <div>
      <button  className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded' onClick={() => signIn('google')}>sign in with gooogle</button>
    </div>
  );
}