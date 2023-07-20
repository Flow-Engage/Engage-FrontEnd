import { useSession, signIn, signOut } from "next-auth/react";
// export default function IndexPage() {
//   const { data, status } = useSession();
//   if (status === 'loading') return <h1> loading... please wait</h1>;
//   if (status === 'authenticated') {
//     return (
//       <div>
//         <h1> hi {data.user.name}</h1>
//         <img src={data.user.image} alt={data.user.name + ' photo'} />
//         <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={signOut}>sign out</button>
//       </div>
//     );
//   }
//   return (
//     <div>
//       <button  className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded' onClick={() => signIn('google')}>sign in with gooogle</button>
//     </div>
//   );
// }
import React from "react";
import Sipnner from "@/components/Spinner";

import Header from "@/Partials/Header";
import HeroHome from "@/Partials/HeroHome";
import FeaturesHome from "@/Partials/Features";
import FeaturesBlocks from "@/Partials/FeatureBlocks";
import Newsletter from "@/Partials/Newsletter";
import Footer from "@/Partials/Footer";

function Home() {
  const { data, status } = useSession();
  if (status === "loading") return <h1> loading... please wait</h1>;

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">
        {/*  Page sections */}
        <HeroHome />
        <FeaturesHome />
        <FeaturesBlocks />
        {/* <Testimonials /> */}
        <Newsletter />
      </main>

      {/*  Site footer */}
      <Footer />
    </div>
  );
}

export default Home;
