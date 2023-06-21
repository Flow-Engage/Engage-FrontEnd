export default function SideBar() {
  return (
    <>
       
<button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" class="inline-flex items-center p-2 mt-2 ml-3 text-sm text-white-500 rounded-lg sm:hidden hover:bg-white-100 focus:outline-none focus:ring-2 focus:ring-white-200 -400 dark:hover:bg-white-700 dark:focus:ring-white-600">
   <span class="sr-only">Open sidebar</span>
   <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
   </svg>
</button>

<aside id="default-sidebar" class=" z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
   <div class="h-full px-3 py-4 overflow-y-auto bg-white-50 dark:bg-white-800">
      <ul class="space-y-2 font-medium">
         <li>
            <a href="#" class="flex items-center p-2 text-black rounded-lg  hover:bg-white-100 dark:hover:bg-white-700">
               <svg aria-hidden="true" class="w-6 h-6 text-white-500 transition duration-75 -400 group-hover:text-black dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
               <span class="ml-3">Dashboard</span>
            </a>
         </li>
         <li>
            <a href="#" class="flex items-center p-2 text-black rounded-lg  hover:bg-white-100 dark:hover:bg-white-700">
               <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-white-500 transition duration-75 -400 group-hover:text-black dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
               <span class="flex-1 ml-3 whitespace-nowrap">Marketplace</span>

            </a>
         </li>
         <li>
            <a href="#" class="flex items-center p-2 text-black rounded-lg  hover:bg-white-100 dark:hover:bg-white-700">
               <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-white-500 transition duration-75 -400 group-hover:text-black dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path><path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path></svg>
               <span class="flex-1 ml-3 whitespace-nowrap">Wallet</span>

            </a>
         </li>
         <li>
            <a href="#" class="flex items-center p-2 text-black rounded-lg  hover:bg-white-100 dark:hover:bg-white-700">
               <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-white-500 transition duration-75 -400 group-hover:text-black dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
               <span class="flex-1 ml-3 whitespace-nowrap">Join our Discord</span>
            </a>
         </li>
          
      </ul>
   </div>
</aside>

<div class="p-4 sm:ml-64">
   <div class="p-4 border-2 border-white-200 border-dashed rounded-lg dark:border-white-700">
      <div class="grid grid-cols-3 gap-4 mb-4">
         <div class="flex items-center justify-center h-24 rounded bg-white-50 dark:bg-white-800">
            <p class="text-2xl text-white-400 -500">+</p>
         </div>
         <div class="flex items-center justify-center h-24 rounded bg-white-50 dark:bg-white-800">
            <p class="text-2xl text-white-400 -500">+</p>
         </div>
         <div class="flex items-center justify-center h-24 rounded bg-white-50 dark:bg-white-800">
            <p class="text-2xl text-white-400 -500">+</p>
         </div>
      </div>
      <div class="flex items-center justify-center h-48 mb-4 rounded bg-white-50 dark:bg-white-800">
         <p class="text-2xl text-white-400 -500">+</p>
      </div>
      <div class="grid grid-cols-2 gap-4 mb-4">
         <div class="flex items-center justify-center rounded bg-white-50 h-28 dark:bg-white-800">
            <p class="text-2xl text-white-400 -500">+</p>
         </div>
         <div class="flex items-center justify-center rounded bg-white-50 h-28 dark:bg-white-800">
            <p class="text-2xl text-white-400 -500">+</p>
         </div>
         <div class="flex items-center justify-center rounded bg-white-50 h-28 dark:bg-white-800">
            <p class="text-2xl text-white-400 -500">+</p>
         </div>
         <div class="flex items-center justify-center rounded bg-white-50 h-28 dark:bg-white-800">
            <p class="text-2xl text-white-400 -500">+</p>
         </div>
      </div>
      <div class="flex items-center justify-center h-48 mb-4 rounded bg-white-50 dark:bg-white-800">
         <p class="text-2xl text-white-400 -500">+</p>
      </div>
      <div class="grid grid-cols-2 gap-4">
         <div class="flex items-center justify-center rounded bg-white-50 h-28 dark:bg-white-800">
            <p class="text-2xl text-white-400 -500">+</p>
         </div>
         <div class="flex items-center justify-center rounded bg-white-50 h-28 dark:bg-white-800">
            <p class="text-2xl text-white-400 -500">+</p>
         </div>
         <div class="flex items-center justify-center rounded bg-white-50 h-28 dark:bg-white-800">
            <p class="text-2xl text-white-400 -500">+</p>
         </div>
         <div class="flex items-center justify-center rounded bg-white-50 h-28 dark:bg-white-800">
            <p class="text-2xl text-white-400 -500">+</p>
         </div>
      </div>
   </div>
</div>

    </>
  );
}
