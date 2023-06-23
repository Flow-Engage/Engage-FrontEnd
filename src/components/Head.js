export default function Head({name,img,signOut}) {
  return (
    <>
      <header className="bg-[#FFFFFF] w-screen pl-44 ">
        <nav
          className=" flex mx-10 items-center justify-between ite p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1 items-center items-center  ">
            <a href="#" className="-m-1.5 p-1.5">
              
            </a>

            <form className="flex items-center items-center w-1/3 ml-6">
              <input
                type="text"
                id="voice-search"
                className="bg-[#F2F2F2] border  border-gray-300 text-gray-900 text-sm rounded-[24px] focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  "
                placeholder="Search here "
                required
              />
            </form>
          </div>

          <div className="flex  flex-row w-72 items-center justify-end ">
            <svg
              width="18"
              height="19"
              viewBox="0 0 18 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 17C12.0002 17.5046 11.8096 17.9906 11.4665 18.3605C11.1234 18.7305 10.6532 18.9572 10.15 18.995L10 19H8C7.49542 19.0002 7.00943 18.8096 6.63945 18.4665C6.26947 18.1234 6.04284 17.6532 6.005 17.15L6 17H12ZM9 9.54067e-10C10.815 -2.9945e-05 12.559 0.704894 13.8642 1.96607C15.1694 3.22726 15.9338 4.94609 15.996 6.76L16 7V10.764L17.822 14.408C17.9015 14.567 17.9413 14.7429 17.938 14.9206C17.9346 15.0984 17.8883 15.2727 17.8029 15.4286C17.7174 15.5845 17.5955 15.7174 17.4475 15.8158C17.2995 15.9143 17.1298 15.9754 16.953 15.994L16.838 16H1.162C0.984165 16.0001 0.808968 15.957 0.651422 15.8745C0.493876 15.792 0.35868 15.6725 0.257418 15.5264C0.156156 15.3802 0.0918485 15.2116 0.0700054 15.0351C0.0481623 14.8586 0.0694352 14.6795 0.132001 14.513L0.178001 14.408L2 10.764V7C2 5.14348 2.7375 3.36301 4.05025 2.05025C5.36301 0.737498 7.14349 9.54069e-10 9 9.54067e-10Z"
                fill="#333333"
              />
            </svg>
            <img className="h-10 w-10 rounded-full mr-4 ml-10" src={img} alt={name + ' photo'} />
            {name}
          </div>
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-10' onClick={signOut}>sign out</button>
        
        </nav>

      </header>
    </>
  );
}
