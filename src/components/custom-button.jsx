export const CustomButton = ({ text }) => {
  return (
    <button className="uppercase rounded-full bg-[#212121] hover:bg-black text-[#f1f1f1] h-14 w-72 px-2 flex justify-center items-center gap-2 group transition-all duration-300 ease-in-out mx-auto">
      <span className="flex-[1.5]">{text}</span>
      <div className="flex-[0.5] flex items-center justify-center rounded-full w-10 h-10 ">
        <div className="w-2.5 h-2.5 text-[#212121] flex items-center justify-center text-[0px] bg-[#f1f1f1] rounded-full group-hover:w-5 group-hover:h-5 group-hover:text-[20px] transition-all duration-300 ease-in-out">
          &#8599;
        </div>
      </div>
    </button>
  )
}
