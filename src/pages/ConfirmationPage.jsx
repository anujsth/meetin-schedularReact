import { AiOutlineFileDone } from "react-icons/ai";
import { BsArrowBarRight } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  setRescheduleFalse,
  setRescheduleTrue,
} from "../redux/features/rescheduleSlice";

const ConfirmationPage = () => {
  const { timeFormat, userName, userEmail, guestEmail, additionalNote } =
    useSelector((state) => state.details);
  const { selectedTimeZone } = useSelector((state) => state.timeZone);

  const dispatch = useDispatch();
  const { time, day, month, yearNum, dayNum } = useSelector(
    (state) => state.details.yourDetail
  );
  console.log(timeFormat);
  const resetHandler = () => {
    dispatch(setRescheduleTrue());
  };

  return (
    <div className="flex justify-center mt-[4rem] mx-[8rem] h-[40rem] ">
      <div
        className={`px-6 w-[50%] bg-[#064663] h-full flex flex-col rounded-xl group transition-all duration-200 `}
      >
        <div className="flex flex-col justify-center h-[30%] items-center border-b-2">
          <div className="flex flex-col justify-center h-full items-center">
            <AiOutlineFileDone className="text-6xl text-green-600" />
            <p className="mt-4 text-white font-bold text-lg">
              Your meeting has been Scheduled
            </p>
            <p className="italic text-white">
              You and any other attendees have been emailed with this
              information.
            </p>
          </div>
        </div>
        <div className="w-full h-[54%] border-b-2">
          <div className="flex w-full flex-col items-start mt-6  ">
            <div className="flex items-center">
              <p className="text-white font-bold text-xl w-[134px]">
                Meeting Time?
              </p>
              <BsArrowBarRight className="text-green-500 text-4xl " />
              <p className="text-amber-100 text-lg">{timeFormat} min meeting</p>
            </div>
            <div className="flex items-center mt-2 mb-2">
              <p className=" w-[134px]  text-white font-bold text-xl ">When?</p>
              <BsArrowBarRight className="text-green-500 text-4xl " />
              <p className="text-amber-100 text-lg  w-[435px]">
                {dayNum},{day},{month}, {yearNum} | {time} | {selectedTimeZone}
              </p>
            </div>
            <div className="flex items-center">
              <p className=" w-[134px] text-white font-bold text-xl">Who?</p>
              <BsArrowBarRight className="text-green-500 text-4xl  " />
              <p className="text-amber-100 text-lg">
                Anuj Shrestha - Organizer anuj@gmail.com
              </p>
            </div>
            <div className="flex items-center">
              <p className=" w-[134px] text-white font-bold text-xl">
                Participants?
              </p>
              <BsArrowBarRight className="text-green-500 text-4xl " />
              <p className="text-amber-100 text-lg w-[435px]">
                {userEmail} {guestEmail ? `|| Guest -> ${guestEmail}` : ""}
              </p>
            </div>
            <div className="flex items-center">
              <p className=" w-[134px]  text-white font-bold text-xl">Where?</p>
              <BsArrowBarRight className="text-green-500 text-4xl" />
              <p className="text-amber-100 text-lg">Video Call</p>
            </div>
            <div className="flex items-center">
              <p className="  w-[134px] text-white font-bold text-xl">
                Additional Notes
              </p>
              <BsArrowBarRight className="text-green-500 text-4xl" />
              <p className="text-amber-100 text-lg w-[435px]  overflow-x-hidden flex flex-wrap">
                {additionalNote}
              </p>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-row justify-center pt-3 ">
          <p className="text-white text-lg flex ">
            Need to make Changes?{" "}
            <Link
              onClick={resetHandler}
              to={"/" + timeFormat + "min"}
              className="border-b-2 ml-2 mr-2 hover:text-green-600 hover:border-green-600 transition-all"
            >
              Reschedule
            </Link>{" "}
            or{" "}
            <p>
              <Link
                to="/cancelpage"
                onClick={() => dispatch(setRescheduleFalse())}
                className="border-b-2 ml-2 hover:text-green-600 hover:border-green-600 transition-all"
              >
                Cancel
              </Link>
            </p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationPage;

// 2:30 PM , Thursday ,May,25,2023
