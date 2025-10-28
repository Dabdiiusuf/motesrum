import { IoIosArrowUp } from "react-icons/io";

const ArrowBack = () => {
  return (
    <div className="bg-gray-400">
      <div className="w-[70px] h-[70px] bg-white rounded-[50%] flex items-center justify-center hover:bg-[#FF315E] cursor-pointer duration-200">
        <div className="text-7xl text-[#FF315E] hover:text-white">
          <IoIosArrowUp />
        </div>
      </div>
    </div>
  );
};

export default ArrowBack;
