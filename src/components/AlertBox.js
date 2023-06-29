// import React, { useEffect, useState } from "react";

// import Popup from "reactjs-popup";
// export function AlertBox({ popupParam }) {
//   const contentStyle = {
//     maxWidth: "600px",
//     width: "90%",
//   };
//   return (
//     <Popup
//       modal
//       open={popupParam}
//       contentStyle={contentStyle}
//       position=" center"
//     >

//       <div className="grid bg-white rounded">
//         <div className=" grid text-[#312E2A]  p-4  font-Montserrat">


//           <div className='w-full row  items-center flex border-[#D3C5B0] py-2     text-[16px] font-[700]'>
//             Confirm verification code
//           </div>
//           <div className='w-full row   items-center flex border-[#D3C5B0] py-2   text-[14px] font-[400]'>
//             {popupParam.bodyText}
//           </div>
//           <div className=" row w-full my-4   flex justify-center ">




//           </div>
//           <div onClick={popupParam.resendCode} className='w-full row underline cursor-pointer justify-center flex border-[#D3C5B0] py-2   text-[14px] font-[400]'>
//             Re-send code
//           </div>
//         </div>


//       </div>

//     </Popup>
//   );
// }


