import { MdCancel } from "react-icons/md";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setRescheduleFalse } from "../redux/features/rescheduleSlice";

const CancelPage = () => {
  const dispatch = useDispatch();

  return (
    <div className="flex justify-center mt-[6rem] mx-[8rem] h-[20rem] ">
      <div
        className={`px-6 w-[50%] bg-[#064663] h-full flex flex-col rounded-xl group transition-all duration-200 `}
      >
        <div className="flex flex-col justify-center h-full items-center">
          <MdCancel className="text-6xl text-red-800" />
          <p className="mt-4 text-red-600 font-bold text-2xl">
            Your meeting has been Cancelled
          </p>
          <p className="italic text-white">
            You can{" "}
            <Link
              to="/"
              onClick={() => dispatch(setRescheduleFalse())}
              className="border-b-2 hover:text-green-300 hover:border-green-300"
            >
              schedule your meeting again.
            </Link>{" "}
            Thank you!
          </p>
        </div>
      </div>
    </div>
  );
};

export default CancelPage;
