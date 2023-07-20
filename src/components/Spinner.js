export default function Sipnner({ visible }) {
  return (
    <>
      {visible && (
        <div className="absolute w-full z-10 bg-opacity-30 h-full  ">
          <div
            className=" h-8 w-8 animate-spin top-[50%] absolute left-[50%] rounded-full border-4 text-[#0754D6] border-solid border-current border-r-white align-[-0.125em] text-primary motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status"
          >
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Loading...
            </span>
          </div>
        </div>
      )}
    </>
  );
}
