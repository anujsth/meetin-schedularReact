import { AiOutlineArrowRight, AiFillClockCircle } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";

const MeetingCard = ({ time }) => {
  return (
    <div className=" flex items-center group relative justify-between p-[2rem] w-[70%] h-[9rem] mt-[1rem] bg-[#064663] rounded-xl shadow-2xl transition-all hover:bg-[#146C94] hover:scale-105 cursor-pointer">
      <AiOutlineArrowRight className="text-white hidden group-hover:block absolute top-1 right-2 text-xl" />
      <p className="text-white text-2xl">{time} min meeting</p>
      <div className="flex ">
        <div className="bg-black h-[2rem] w-[5rem] rounded-2xl flex justify-center items-center group-hover:bg-[#064663]">
          <AiFillClockCircle className="text-white text-xl" />
          <p className="text-white text-xl ml-3">{time}</p>
        </div>
        <div className="ml-3 bg-black h-[2rem] w-[6rem] rounded-2xl flex justify-center items-center group-hover:bg-[#064663]">
          <p className="text-white text-xl ">1 -</p>
          <BsFillPersonFill className="text-white text-xl" />
          <p className="text-white text-xl ">- 1</p>
        </div>
      </div>
    </div>
  );
};

export default MeetingCard;
