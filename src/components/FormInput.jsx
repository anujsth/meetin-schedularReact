import React, { useState } from "react";
import { BsFillPersonPlusFill, BsPersonDashFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { setUserInput } from "../redux/features/detailsSlice";

const FormInput = () => {
  const { rescheduleData } = useSelector((state) => state.reschedule);
  const { userName, userEmail } = useSelector((state) => state.details);
  const { detail } = useParams();
  const timeFormat = detail === "30min" ? 30 : 15;
  const [toggle, setToggle] = useState(false);
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    userName: "",
    userEmail: "",
    guestEmail: "",
    additionalNote: "",
  });
  const inputUser = useSelector((state) => state.details);
  const inputName = (event) => {
    return setInput((prevState) => {
      return { ...prevState, userName: event.target.value };
    });
  };

  const inputUserEmail = (event) => {
    return setInput((prevState) => {
      return { ...prevState, userEmail: event.target.value };
    });
  };
  const inputGuestEmail = (event) => {
    return setInput((prevState) => {
      return { ...prevState, guestEmail: event.target.value };
    });
  };
  const inputAdditionalNote = (event) => {
    return setInput((prevState) => {
      return { ...prevState, additionalNote: event.target.value };
    });
  };
  const navigate = useNavigate();
  const submitHandler = (event) => {
    event.preventDefault();

    dispatch(
      setUserInput({
        userName: input.userName,
        userEmail: input.userEmail,
        guestEmail: input.guestEmail,
        additionalNote: input.additionalNote,
        timeFormat: timeFormat,
      })
    );
    navigate("/confirmationpage");
  };

  return (
    <div className="w-[70%]  bg-[#064663] px-[2.5rem] pt-[1.5rem]">
      <form className="flex flex-col" onSubmit={submitHandler}>
        <div className="mb-2">
          <p className="text-white mb-2">Your Name</p>
          {rescheduleData ? (
            <input
              value={userName}
              disabled
              placeholder="Eg: Binladin Osama"
              type="text"
              className="bg-transparent cursor-not-allowed text-red-900 w-full border-gray-200 h-[2.7rem]  border-2 px-[1rem] rounded"
            />
          ) : (
            <input
              required
              onChange={inputName}
              placeholder="Eg: Binladin Osama"
              type="text"
              className=" text-white w-full border-gray-200 h-[2.7rem] bg-transparent border-2 px-[1rem] rounded"
            />
          )}
        </div>
        <div className="mb-2">
          <p className="text-white mb-2">Email address</p>
          {rescheduleData ? (
            <input
              disabled
              value={userEmail}
              placeholder="Eg: Your@example.com"
              type="email"
              className=" cursor-not-allowed text-red-900 w-full border-gray-200 h-[2.7rem] bg-transparent border-2 px-[1rem] rounded"
            />
          ) : (
            <input
              required
              onChange={inputUserEmail}
              placeholder="Eg: Your@example.com"
              type="email"
              className=" text-white w-full border-gray-200 h-[2.7rem] bg-transparent border-2 px-[1rem] rounded"
            />
          )}
        </div>
        {toggle && (
          <div className="mb-2">
            <p className="text-white mb-2">Guests</p>
            <input
              onChange={inputGuestEmail}
              placeholder="Eg: Guest@gmail.com"
              type="email"
              className=" text-white w-full border-gray-200 h-[2.7rem] bg-transparent border-2 px-[1rem] rounded"
            />
          </div>
        )}
        <div className="mb-2">
          <p className="text-white mb-2">Additional Note</p>
          <textarea
            onChange={inputAdditionalNote}
            placeholder="Kindly provide me with details regarding our upcoming meeting..."
            type="textarea"
            className=" py-2 text-white w-full border-gray-200  bg-transparent border-2 px-[1rem] rounded"
          />
        </div>
        <div className="flex justify-between items-center mt-4">
          {!toggle && (
            <BsFillPersonPlusFill
              onClick={() => setToggle(true)}
              className="text-white  ml-2 text-2xl cursor-pointer transition-all hover:scale-125 hover:text-[#218df1]"
            />
          )}
          {toggle && (
            <BsPersonDashFill
              onClick={() => setToggle(false)}
              className="text-white  ml-2 text-2xl cursor-pointer transition-all hover:scale-125 hover:text-red-500"
            />
          )}
          <div className="flex items-center">
            <Link
              to="/"
              className="bg-white px-2 py-1 rounded mr-2 transition-all hover:scale-105"
            >
              cancel
            </Link>
            <button
              type="submit"
              className="bg-[#218df1] text-white transition-all hover:scale-105 px-2 py-1 duration-300 hover:bg-green-500 rounded"
            >
              Schedule
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormInput;
