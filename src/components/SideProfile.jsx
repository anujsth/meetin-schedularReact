import { BiArrowBack } from "react-icons/bi";
import { BsFillCameraVideoFill } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";
import { IoIosTime } from "react-icons/io";
import { Link, useParams } from "react-router-dom";
import dp from "../assets/12.jpg";
import TimeZone from "./TimeZone";
import { useDispatch, useSelector } from "react-redux";
import { AiFillCalendar } from "react-icons/ai";
import { setFormerDate, setNewDate } from "../redux/features/rescheduleSlice";

const SideProfile = () => {
  const { detail } = useParams();
  const { id } = useParams();
  console.log(detail);
  console.log(id);
  const { time, day, month, yearNum, dayNum } = useSelector(
    (state) => state.details.yourDetail
  );
  const dispatch = useDispatch();
  const { newDate, formerDate } = useSelector((state) => state.reschedule);
  const { rescheduleData } = useSelector((state) => state.reschedule);
  if (!rescheduleData) {
    dispatch(setFormerDate({ time, day, month, yearNum, dayNum }));
  }

  return (
    <div
      className={`relative ${
        detail ? "w-[40%]" : "w-[100%]"
      } border-r-2 border-black border-b flex flex-col  items-center pt-[3rem]`}
    >
      <img src={dp} className="h-[4rem] w-[6rem] rounded-full " />
      <p className="text-white pt-2">Anuj Shrestha</p>
      <p className="text-gray-300 pt-1 text-xl font-medium">
        {id || detail === "30min" ? "30 Min Meeting" : "15 Min Meeting"}
        {/* {detail==undefined && detail === "30min" ? "30 Min Meeting" : "15 Min Meeting"} */}
      </p>
      <div className="w-[70%]  mt-6 text-lg">
        <div className="flex items-center">
          <BsFillCameraVideoFill className="text-gray-300" />
          <p className="ml-3 text-gray-300">Call Video</p>
        </div>
        <div className="flex items-center">
          <IoIosTime className="text-gray-300" />
          <p className="ml-3 text-gray-300">
            {id || detail === "30min" ? "30 minutes" : "15 minutes"}
          </p>
        </div>
        {detail ? (
          rescheduleData ? (
            <div className="flex text-green-300 items-center ">
              <AiFillCalendar className="mr-4" />
              <div className="flex w-full text-base">
                {time} , {newDate.day} ,{newDate.month},{newDate.dayNum},
                {newDate.yearNum}
              </div>
            </div>
          ) : (
            <div className="flex text-green-300 items-center ">
              <AiFillCalendar className="mr-4" />
              <div className="flex w-full text-base">
                {time} , {day} ,{month},{dayNum},{yearNum}
              </div>
            </div>
          )
        ) : (
          <div className="flex items-center mr-0">
            <FaGlobe className="text-white text-2xl " />
            <p className="ml-1 text-white">
              <TimeZone />
            </p>
          </div>
        )}
      </div>
      {detail && rescheduleData && (
        <div className="mt-9 w-full pl-[4.5rem]">
          <p className="text-white ">Former Time</p>
          <div className="flex text-red-500 items-center ">
            <AiFillCalendar className="mr-4" />
            <div className="flex w-full text-base line-through">
              {formerDate.time} , {formerDate.day} ,{formerDate.month},
              {formerDate.dayNum},{formerDate.yearNum}
            </div>
          </div>
        </div>
      )}
      {!detail && (
        <Link to="/">
          <BiArrowBack className=" top-2 left-2 absolute text-white text-2xl cursor-pointer hover:scale-125 hover:text-green-400 transition-all" />
        </Link>
      )}
    </div>
  );
};

export default SideProfile;
